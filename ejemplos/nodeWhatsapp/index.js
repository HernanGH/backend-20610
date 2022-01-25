import twilio from 'twilio'

const accountSid = 'AC6ae8590288d544c804948c02ec75fffb'
const authToken = '4debfd37e8bb4324014905b7264aa0b5'

const client = twilio(accountSid, authToken)

const options = {
    body: 'test AWAIT sin ASYNC',
    mediaUrl: [ 'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg' ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491165045279'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
