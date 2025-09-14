const express = require("express");
const router = express.Router();
const Message = require("../models/message"); 
const nodemailer = require("nodemailer");

// 📧 Email sender function
const sendEmail = async (to, subject, text, html) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

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

// Handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 📧 Notify admin
    await sendEmail(
      "your-admin-email@gmail.com", // change to your admin email
      "📩 New Contact Form Submission",
      `You got a new message from ${name} (${email}):\n\n${message}`,
      `<p><b>Name:</b> ${name}</p>
       <p><b>Email:</b> ${email}</p>
       <p><b>Message:</b><br/>${message}</p>`
    );

    // 📧 Auto-reply to user
    await sendEmail(
      email,
      "✅ We received your message",
      `Hi ${name}, thank you for contacting us. We will get back to you soon.`,
      `<p>Hi ${name},</p>
       <p>Thank you for reaching out! Our team will get back to you soon.</p>
       <p>– Your Company</p>`
    );

    res.status(200).json({ success: "Message saved & emails sent successfully" });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
