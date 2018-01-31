import verifyMessengerWebhook from './verifyMessengerWebhook';

function createRequestHandler(bot, config = {}) {
  const requestHandler = bot.createRequestHandler();
  return async ctx => {
    if (ctx.req.method === 'GET' && bot.connector.platform === 'messenger') {
      verifyMessengerWebhook({ verifyToken: config.verifyToken })(ctx);
    } else if (ctx.req.method === 'POST') {
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
    } else {
      ctx.res = { status: 405 };
      ctx.done();
    }
  };
}

export default createRequestHandler;
