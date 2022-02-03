const sendNotification = (message, to) => {
  if (typeof message === 'string' && typeof to === 'string' ) {
    return console.log(`
      Message: ${message},
      To: ${to}
    `);
  }

  return new Error('Error send notification, Wrong type');
};

module.exports = {
  sendNotification
};