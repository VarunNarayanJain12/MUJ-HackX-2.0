const nodemailer = require('nodemailer');
const sendMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: 'ecofasal1@gmail.com',
        pass: 'due to security rerason password is removed from here'
    },
    });

    let info = await transporter.sendMail({
      from: '"Kanhaiya team" <ecofasal1@gmail.com>', // sender address
      to: `${req.body.email_id}`, // list of receivers
      subject: "Hello check check✔", // Subject line
      text: "Newspaper", // plain text body
      html: "<b>Newspaper</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
};
module.exports=sendMail; 