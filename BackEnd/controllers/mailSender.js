import sendMail from "../middleware/Email.js";

const mailSender = async (req, res) => {
  try {
    const { email, subject, content } = req.body;

    if (!email || !subject || !content) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await sendMail(email, subject, content);

    res.status(200).json({
      success: true,
      message: "Mail sent successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

export default mailSender;
