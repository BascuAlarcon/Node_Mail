const { Twilio } = require('twilio') 

// on trail accounts, you could only send sms to phone number of your verified account

const accountSid = process.env.accountSid
const authToken = process.env.authToken

const client = new Twilio(accountSid, authToken)

const createSMS = () => {
    client.messages.create({
        body: 'Hello!',
        to: process.env.NUMBER_PHONE,
        from: process.env.TWILIO_NUMBER_PHONE
    }).then((message) => console.log(message.sid))
}
  
createSMS();