const  findLevelImg = require('../helper/index');
const transporter = require('../config');

const sendEmail = async (req, res) => {
  try {
    const { email, level } = req.body;
    const img = findLevelImg(`${level}`);
    const mailOptions = {
      from: "chrisnguuyen193@gmail.com",
      to: email,
      subject: 'Filum.ai: Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng',
      html: `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Filum.ai</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7fb;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 800px;
        text-align: center;
      }

      h1 {
        color: #333;
        font-size: 2rem; /* Giảm kích thước tiêu đề chính */
        margin-bottom: 15px;
        font-weight: 600;
      }

      h4 {
        color: #007BFF;
        margin-bottom: 20px;
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem; 
        color: #555;
        line-height: 1.6;
        margin-bottom: 15px;
      }

      a {
        color: #007BFF;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
        margin: 15px 0;
      }

      footer {
        margin-top: 20px;
        font-size: 0.85rem; 
        color: #333;
      }

      footer p {
        margin: 5px 0;
      }

      footer h4 {
        color: #08315e;
        font-weight: 600;
        margin-bottom: 10px;
      }

      footer a {
        color: #007BFF;
      }

      footer a:hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .container {
          padding: 20px;
        }
        h1 {
          font-size: 1.4rem; 
        }

        h4 {
          font-size: 0.3rem;
        }

        p {
          font-size: 0.5rem; 
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h4>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h4>
        <h1>Chúc mừng ${email} đã hoàn thành bài đánh giá xuất sắc !!</h1>
        <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
      </header>

      <footer>
        <img width="1280px" src="${img}" alt="Filum.ai" />
        <h4>Filum.ai</h4>
        <p><strong>Email:</strong> <a href="mailto:careers@filum.ai">careers@filum.ai</a></p>
        <p><strong>Trang web:</strong> <a href="https://filum.ai" target="_blank">Tuyển dụng Filum.ai</a></p>
        <p><strong>Địa chỉ:</strong> 117 Tân Cảng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
      </footer>
    </div>
  </body>
</html>
    `,
  };

  await transporter.sendMail(mailOptions);

  return res.status(200).json({
    status: 200,
    success: true,
    message: `Gửi đến email ${email} thành công !`
   });
  } catch (error) {
    res.status(500).json({ message: "Có lỗi, vui lòng thử lại sau" });
  }
};
const getShareFaceBook = async (req, res) => {
  try {
    const {  level } = req.query;
    const { email }= req.params;
    const img = findLevelImg(level);
    return res.status(200).send(`
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Filum.ai</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7fb;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 800px;
        text-align: center;
      }

      h1 {
        color: #333;
        font-size: 2rem; /* Giảm kích thước tiêu đề chính */
        margin-bottom: 15px;
        font-weight: 600;
      }

      h4 {
        color: #007BFF;
        margin-bottom: 20px;
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem; 
        color: #555;
        line-height: 1.6;
        margin-bottom: 15px;
      }

      a {
        color: #007BFF;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
        margin: 15px 0;
      }

      footer {
        margin-top: 20px;
        font-size: 0.85rem; 
        color: #333;
      }

      footer p {
        margin: 5px 0;
      }

      footer h4 {
        color: #08315e;
        font-weight: 600;
        margin-bottom: 10px;
      }

      footer a {
        color: #007BFF;
      }

      footer a:hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .container {
          padding: 20px;
        }
        h1 {
          font-size: 1.4rem; 
        }

        h4 {
          font-size: 0.3rem;
        }

        p {
          font-size: 0.5rem; 
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h4>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h4>
        <h1>Chúc mừng ${email} đã hoàn thành bài đánh giá xuất sắc !!</h1>
        <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
      </header>

      <footer>
        <img width="1280px" src="${img}" alt="Filum.ai" />
        <h4>Filum.ai</h4>
        <p><strong>Email:</strong> <a href="mailto:careers@filum.ai">careers@filum.ai</a></p>
        <p><strong>Trang web:</strong> <a href="https://filum.ai" target="_blank">Tuyển dụng Filum.ai</a></p>
        <p><strong>Địa chỉ:</strong> 117 Tân Cảng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
      </footer>
    </div>
  </body>
</html>
`)
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getLinkResult = async (req, res) => {
  try {
    const { user, level } = req.query;
    const img = findLevelImg(level);
    return res.status(200).send(`
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Filum.ai</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7fb;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 800px;
        text-align: center;
      }

      h1 {
        color: #333;
        font-size: 2rem; /* Giảm kích thước tiêu đề chính */
        margin-bottom: 15px;
        font-weight: 600;
      }

      h4 {
        color: #007BFF;
        margin-bottom: 20px;
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem; 
        color: #555;
        line-height: 1.6;
        margin-bottom: 15px;
      }

      a {
        color: #007BFF;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }

      img {
        max-width: 100%;
        border-radius: 8px;
        margin: 15px 0;
      }

      footer {
        margin-top: 20px;
        font-size: 0.85rem; 
        color: #333;
      }

      footer p {
        margin: 5px 0;
      }

      footer h4 {
        color: #08315e;
        font-weight: 600;
        margin-bottom: 10px;
      }

      footer a {
        color: #007BFF;
      }

      footer a:hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .container {
          padding: 20px;
        }
        h1 {
          font-size: 1.4rem; 
        }

        h4 {
          font-size: 0.3rem;
        }

        p {
          font-size: 0.5rem; 
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h4>Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng</h4>
        <h1>Chúc mừng ${user} đã hoàn thành bài đánh giá xuất sắc !!</h1>
        <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
      </header>

      <footer>
        <img width="1280px" src="${img}" alt="Filum.ai" />
        <h4>Filum.ai</h4>
        <p><strong>Email:</strong> <a href="mailto:careers@filum.ai">careers@filum.ai</a></p>
        <p><strong>Trang web:</strong> <a href="https://filum.ai" target="_blank">Tuyển dụng Filum.ai</a></p>
        <p><strong>Địa chỉ:</strong> 117 Tân Cảng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
      </footer>
    </div>
  </body>
</html>


`)

  } catch (error) {
    console.log("🚀 ~ sendLink ~ error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { sendEmail, getShareFaceBook, getLinkResult };