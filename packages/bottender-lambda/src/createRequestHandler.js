function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return (event, callback) => {
    // ...
    callback(null, { statusCode: 200 });
  };
}
