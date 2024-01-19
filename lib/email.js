import nodemailer from "nodemailer";

const data = {
  MAIL_EMAIL: "sapocomwebsiteform@gmail.com",
  MAIL_PASSWORD: "misukhzojcklpkop",
  //   ADMIN_MAIL: "websitequery@sapocomglobal.com",
  ADMIN_MAIL: "princeverma360p@gmail.com",
};

export default async function sendMail(reciever) {
  try {
    // Creating Transporter for sending mail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: data.MAIL_EMAIL,
        pass: data.MAIL_PASSWORD,
      },
    });

    // Sending mail to admin
    await transporter.sendMail({
      from: data.MAIL_EMAIL, // sender address
      to: data.ADMIN_MAIL, // list of receivers
      subject: `Form Submission - ${reciever.name} details are there.`, // Subject line
      html: `<h1>${reciever.name} Submitted the Form</h1>
          <div>
            <p>Name: ${reciever.name}</p>
            <p>Email: ${reciever.email}</p>
            <p>Number: ${reciever.mobileNumber}</p>
          </div>`,
      attachments: [
        {
          filename: reciever.resume, // Name of the file you want to attach
          path: `public/uploads/${reciever.resume}`, // Path to the file on your server
        },
        // Add more attachments if needed
      ],
    });

    // Sending mail to user
    await transporter.sendMail({
      from: data.MAIL_EMAIL, // sender address
      to: reciever.email, // list of receivers
      subject: `Sapocom Form Submitted Successfully!`, // Subject line
      html: `<h1>Sapocom Form Submitted Successfully</h1>
        <div>
          <p>Thank you for your Email. We will get back to you as soon as possible. If you have any queries or concerns, please contact us at +91 9919636685.</p>
          <p>This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed. If you have received this mail in error, please notify the originator of the message. This footer also confirms that this email message has been scanned for the presence of computer viruses.</p>
          <p>Any views expressed in this message are those of the individual sender, except where the sender specifies and with authority, states them to be the views of the SAPOCOM Technologies</p>
        </div>`,
    });
  } catch (error) {
    console.log(error);
  }
}
