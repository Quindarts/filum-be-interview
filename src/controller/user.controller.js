const sendEmail = async (req, res) => {
  try {
    const { email, score } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const sendFaceBook = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const sendLink = async (req, res) => {
  try {
  } catch (error) {
    console.log("🚀 ~ sendLink ~ error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { sendEmail, sendFaceBook, sendLink };
