function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async ctx => {
    // ...
    const response = await requestHandler(ctx.req.body);
    if (response) {
      ctx.res = {
        status: response.status || 200,
        headers: response.headers || {},
        body: response.body || '',
      };
      ctx.done();
    } else {
      ctx.res = { status: 200 };
      ctx.done();
    }
  };
}

export default createRequestHandler;
