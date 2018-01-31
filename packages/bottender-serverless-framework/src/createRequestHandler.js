function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async (event, context, callback) => {
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
  };
}

export default createRequestHandler;
