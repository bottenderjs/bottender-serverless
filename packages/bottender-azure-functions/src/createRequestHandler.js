function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return (ctx, req) => {
    // ...
    ctx.res = { status: 200 };
    ctx.done();
  };
}
