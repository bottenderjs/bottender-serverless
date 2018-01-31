function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return (req, res) => {
    // ...
    // Express?
    res.status(200).end();
  };
}
