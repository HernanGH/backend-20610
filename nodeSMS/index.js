/* ---------------------------------------------------------------------- */
/*                                 SMS                                    */
/* ---------------------------------------------------------------------- */
// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC0b439be5828c1a88f32b7125b0e73685';
const authToken = '9de493a9f76c17c32ce083db53cf7512';

const twilio = require('twilio')
const client = twilio(accountSid, authToken);

client.messages.create({
      body: 'Hola soy un SMS desde Node.js!',
      from: '+19714071392',
      to: '+5491159617065'
})
.then(message => console.log(message.sid))
.catch(console.log)
