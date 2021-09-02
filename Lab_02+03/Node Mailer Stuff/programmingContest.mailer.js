const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
        user: 'iutfest2021@outlook.com',
        pass: '9cd4c26428'
    }
});

const mail = (recipientMail, hashCode, TeamName) => {
    console.log("Sending Mail form mailer...");
    const options = {
        from: 'iutfest2021@outlook.com',
        to: recipientMail,
        subject: 'Participation Confirmtion - Programming Contest',
        text: `Thank you for registering for our Programming Contest as Team '${TeamName}'. Below is the code that you will use.\n${hashCode}`
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
