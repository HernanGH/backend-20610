const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'xxxx@gmail.com',
        pass: 'xxxx'
    }
});

const mailOptions = {
    from: 'xxxx@gmail.com',
    to: ['ritate5201@leezro.com'],
    subject: '[TEST][CON GMAIL] Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        { path: 'file.png' }
    ]
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return err
    }
    console.log(info)
})
