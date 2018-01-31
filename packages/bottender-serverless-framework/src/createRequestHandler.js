function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return (event, context, callback) => {
    // ...
    const response = { statusCode: 200 };
    callback(null, response);
  };
}
