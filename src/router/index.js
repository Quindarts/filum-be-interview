require("dotenv").config();
const express = require("express");
const {
  getLinkResult,
  getShareFaceBook,
  sendEmail,
} = require("../controller/user.controller");

const router = express.Router();
const ROUTER = {
  INDEX: "/",
  GET_LINK: "/get-link",
  SEND_MAIL: "/send-mail",
  SHARE_FACEBOOK: "/share-facebook/:email",
};
const home = router.get(ROUTER.INDEX, (req, res) => {
  res.status(200).send(`<!doctype html>
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
      font-family: 'Inter', sans-serif;
      background-color: #f3f4f6; /* Tailwind gray-100 */
      padding: 20px;
      color: #374151; /* Tailwind gray-700 */
    }
    header {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #1f2937; /* Tailwind gray-900 */
    }
    .container {
      background-color: #ffffff; /* White background */
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tailwind shadow */
      max-width: 800px;
      margin: 0 auto;
    }
    h1, h2, h4 {
      color: #1f2937; /* Tailwind gray-900 */
      margin-bottom: 20px;
    }
    h4 {
      color: #007BFF;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
      color: #4b5563; /* Tailwind gray-600 */
    }
    a {
      color: #2563eb; /* Tailwind blue-600 */
      text-decoration: none;
      transition: color 0.3s;
    }
    a:hover {
      color: #1d4ed8; /* Tailwind blue-700 */
      text-decoration: underline;
    }
    img {
      display: block;
      margin: 20px auto;
      max-width: 100%;
    }
    i {
      display: block;
      text-align: center;
      font-style: italic;
      margin-top: 10px;
      color: #6b7280; /* Tailwind gray-500 */
    }
    footer {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid #d1d5db; /* Tailwind gray-300 */
    }
    footer h4 {
      color: #1e3a8a; /* Tailwind indigo-900 */
    }
    footer p {
      margin-top: 8px;
      color: #374151; /* Tailwind gray-700 */
    }
    footer a {
      color: #0ea5e9; /* Tailwind cyan-500 */
      transition: color 0.3s;
    }
    footer a:hover {
      color: #0284c7; /* Tailwind cyan-600 */
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h4>FILUM INTERVIEW</h4>
      <h4>My info </h4> 
      <p>My name is Le Minh Quang, I'm a Growth engineer internship. </p>
      <p>email: lmqiuhdev@gmail.com</p>
      <p>github: Quindarts</p>
      <H2>--------API INTERVIEW INCLUDES------------------------------------------</H2>
      <p>METHOD [GET] SEND LINK FACEBOOK</p>
      <p>
        url: https://filum-be-interview.vercel.app/share-facebook/{param}?{query}<br />
        params: email<br />
        query: level<br />
      </p>
      <p>METHOD [POST] SEND EMAIL</p>
      <p>
        url: https://filum-be-interview.vercel.app/send-email<br />
        body:<br />
        {<br />
        "email": "quang82thcspb@gmail.com",<br />
        "level": 1<br />
        }
      </p>
      <p>
        METHOD [GET] COPY LINK TO CLIPBOARD<br />
        <a href="https://filum-be-interview.vercel.app/get-link?user=quang@gmail.com&level=5">Example: Click me!</a>
      </p>
    </header>
    <footer>
      <h4>Filum.ai</h4>
      <p><strong>Email:</strong> <a href="mailto:careers@filum.ai">careers@filum.ai</a></p>
      <p><strong>Trang web:</strong> <a href="https://filum.ai" target="_blank">Tuyển dụng Filum.ai</a></p>
      <p><strong>Địa chỉ:</strong> 117 Tân Cảng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
    </footer>
  </div>
</body>
</html>
`);
});

const mail = router.post(ROUTER.SEND_MAIL, sendEmail);

const link = router.get(ROUTER.GET_LINK, getLinkResult);

const facebook = router.get(ROUTER.SHARE_FACEBOOK, getShareFaceBook);

function route(app) {
  app.use(home);
  app.use(mail);
  app.use(link);
  app.use(facebook);
}

module.exports = route;
