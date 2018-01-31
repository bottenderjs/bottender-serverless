const verifyMessengerWebhook = ({ verifyToken }) => (
  event,
  context,
  callback
) => {
  const query = event.queryStringParameters;
  if (
    query['hub.mode'] === 'subscribe' &&
    query['hub.verify_token'] === verifyToken
  ) {
    callback(null, { statusCode: 200, body: query['hub.challenge'] });
  } else {
    console.error('Failed validation. Make sure the validation tokens match.');
    callback(null, { statusCode: 403 });
  }
};

export default verifyMessengerWebhook;
