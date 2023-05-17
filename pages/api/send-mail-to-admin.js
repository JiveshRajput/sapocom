// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '100mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method = 'POST') {
    try {
      const { name, email, number, message } = req.body;

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
        to: process.env.ADMIN_MAIL, // list of receivers 
        subject: `Form Submission - ${name} details are there.`, // Subject line
        // text: `Dear ${username || 'User'}, Your OTP is ${req.app.locals.OTP}. Enter the OTP to reset your password.`, // plain text body
        html: `<h1>${name} Submitted the Form</h1>
        <div>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Number: ${number}</p>
          <p>Message: ${message}</p>
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
