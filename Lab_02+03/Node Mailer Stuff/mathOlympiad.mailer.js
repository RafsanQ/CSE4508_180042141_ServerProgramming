const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
        user: 'iutfest2021@outlook.com',
        pass: '9cd4c26428'
    }
});

const mail = (recipientMail, hashCode) => {
    console.log("Sending Mail form mailer...");
    const options = {
        from: 'iutfest2021@outlook.com',
        to: recipientMail,
        subject: 'Participation Confirmtion - Math Olympiad',
        text: `Thank you for registering for our Math Olympiad Contest. Below is the code that you will use.\n${hashCode}`
    }
    
    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
            return 0;
        }
        console.log("Email Sent:" + info.response);
        return 1;
    });
    return 0;
}

module.exports = mail;
