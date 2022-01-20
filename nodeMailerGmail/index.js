const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'drunkartp5@gmail.com',
        pass: 'kqdcrkwptgmionow'
    }
})

const mailOptions = {
    from: 'Servidor Node.js',
    to: ['hellen.gleichner@ethereal.email'],
    subject: 'Mail de prueba desde Node.js',
    html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
    attachments: [
        {   // filename and content type is derived from path
            path: 'nodemailer.png'
        }
    ]
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err)
        return err
    }
    console.log(info)
})



