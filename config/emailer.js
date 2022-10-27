 const nodemailer = require('nodemailer')
 
const createTrans =  () => {  
    // prod environment could use sendgrid

    // dev environment use mailtrap
    const transport = nodemailer.createTransport({ 
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: { 
            user: "7d2016b8ced3c4",
            pass: "4557e929b824a9"
        }
    })
    
    return transport;
}

const sendMail = async () => {
    const transporter = createTrans() 
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bascualarconalexander@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world</b>", // html body
        attachments: [
            {   // use URL as an attachment
                filename: 'license.txt',
                path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            },
        ]
        })
    
    console.log("Message sent: %s", info.messageId);
}

sendMail() 
 