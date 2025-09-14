const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, text, html) => {
  try {
    // Configure transporter (using Gmail as example)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("✅ Email sent successfully!");
  } catch (error) {
    console.error("❌ Email send error:", error);
  }
};

module.exports = sendEmail;
