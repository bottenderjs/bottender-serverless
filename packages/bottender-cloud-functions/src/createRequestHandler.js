function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async (req, res) => {
    // ...
    // Express?
    const response = await requestHandler(req.body);
    if (response) {
      res.set(response.headers || {});
      res.status(response.status || 200);
      res.send(response.body || '');
    } else {
      res.status(200).end();
    }
  };
}

export default createRequestHandler;
