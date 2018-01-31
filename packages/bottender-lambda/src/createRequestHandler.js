import verifyMessengerWebhook from './verifyMessengerWebhook';

function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async (event, context, callback) => {
    if (event.httpMethod === 'GET' && bot.connector.platform === 'messenger') {
      verifyMessengerWebhook({ verifyToken: config.verifyToken })(
        event,
        context,
        callback
      );
    } else if (event.httpMethod === 'POST') {
      // ...
      const response = await requestHandler(event.body);
      if (response) {
        callback(null, {
          statusCode: 200,
          headers: response.headers || {},
          body: response.body || '',
        });
      } else {
        callback(null, { statusCode: 200 });
      }
    } else {
      callback(null, { statusCode: 405 });
    }
  };
}

export default createRequestHandler;
