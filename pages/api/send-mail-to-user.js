// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method = 'POST') {
    try {
      const { email } = req.body;

      // Creating Transporter for sending mail
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_EMAIL, // generated ethereal user
          pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
      });

      // Sending mail
      const info = await transporter.sendMail({
        from: process.env.MAIL_EMAIL, // sender address
        to: email, // list of receivers 
        subject: `Sapocom Form Submitted Successfully!`, // Subject line
        html: `<h1>Sapocom Form Submitted Successfully</h1>
        <div>
          <p>Thank you for your Email. We will get back to you as soon as possible. If you have any queries or concerns, please contact us at +91 9919636685.</p>
          <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this mail in error, please notify the originator of the message. This footer also confirms that this email message has been scanned for the presence of computer viruses.</p>
          <p>Any views expressed in this message are those of the individual sender, except where the sender specifies and with authority, states them to be the views of the SAPOCOM Technologies</p>
        </div>`
      });

      // Sending Response
      res.send({
        status: 'Ok',
        message: `Mail sent`,
        mailId: info.messageId
      })

    } catch (error) {
      res.status(400).json({
        message: 'Internal Server Error',
        error,
      })
    }
  }
}
