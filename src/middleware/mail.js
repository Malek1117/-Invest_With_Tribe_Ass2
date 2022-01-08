const nodemailer = require("nodemailer");

async function sendMail(req, res, next) {
    const {email} = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
        user: "tanya.douglas67@ethereal.email",
        pass: "2F5AyeQzcCQkhRs7HJ",
        },
    });

    let info = await transporter.sendMail({
        from: 'shahnawazmalek@gmail.com',
        to: `${email}`,
        subject: "Welcome Mail",
        text: "Welcome to web page, you are successfully sign up."
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    next();
}

module.exports = sendMail;