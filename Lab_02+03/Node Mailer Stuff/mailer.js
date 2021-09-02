const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: 'festict2021@gmail.com',
        pass: '9cd4c26428'
    }
});

const mail = (recipientMail) => {
    const options = {
        from: 'festict2021@gmail.com',
        to: recipientMail,
        subject: 'Paticipation Confirmation',
        text: 'Thank you for participating. Your code will be sent shortly'
    }
    
    transporter.sendMail(options);
}