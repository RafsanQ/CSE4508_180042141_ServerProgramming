const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
        user: 'iutfest2021@outlook.com',
        pass: '9cd4c26428'
    }
});

const mail = (recipientMail, hashCode, teamName, participantName) => {
    console.log("Sending Mail form mailer...");
    const options = {
        from: 'iutfest2021@outlook.com',
        to: recipientMail,
        subject: 'Participation Confirmtion - Programming Contest',
        text: `Thank you ${participantName} for registering for our Contest as team "${teamName}". Below is the code that you will use.\n${hashCode}`
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
