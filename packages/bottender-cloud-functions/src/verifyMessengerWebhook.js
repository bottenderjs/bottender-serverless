const verifyMessengerWebhook = ({ verifyToken }) => (req, res) => {
  const { query } = req;
  if (
    query['hub.mode'] === 'subscribe' &&
    query['hub.verify_token'] === verifyToken
  ) {
    res.send(query['hub.challenge']);
  } else {
    console.error('Failed validation. Make sure the validation tokens match.');
    res.status(403).end();
  }
};

export default verifyMessengerWebhook;
