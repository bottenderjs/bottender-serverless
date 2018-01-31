import verifyMessengerWebhook from './verifyMessengerWebhook';

function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async (req, res) => {
    // Express?
    if (req.method === 'GET' && bot.connector.platform === 'messenger') {
      verifyMessengerWebhook({ verifyToken: config.verifyToken })(req, res);
    } else if (req.method === 'POST') {
      // ...
      const response = await requestHandler(req.body);
      if (response) {
        res.set(response.headers || {});
        res.status(response.status || 200);
        res.send(response.body || '');
      } else {
        res.status(200).end();
      }
    } else {
      res.status(405).end();
    }
  };
}

export default createRequestHandler;
