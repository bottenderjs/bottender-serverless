const verifyMessengerWebhook = ({ verifyToken }) => ctx => {
  const { query } = ctx.req;
  if (
    query['hub.mode'] === 'subscribe' &&
    query['hub.verify_token'] === verifyToken
  ) {
    ctx.res = { status: 200, body: query['hub.challenge'] };
    ctx.done();
  } else {
    ctx.error('Failed validation. Make sure the validation tokens match.');
    ctx.res = { status: 403 };
    ctx.done();
  }
};

export default verifyMessengerWebhook;
