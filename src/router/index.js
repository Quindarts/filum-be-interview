require("dotenv").config();
const express = require("express");
const { getLinkResult } = require("../controller/user.controller");


const router = express.Router();
const ROUTER = {
  INDEX: '/',
  GET_LINK:'/get-link',
  SEND_MAIL:'/send-mail',
  SHARE_FACEBOOK:'/share-facebook',
}
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
      header {
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #333;
      }
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
      }

      .container {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
      }

      h1, h2 {
        color: #333;
        margin-bottom: 20px;
      }

      p {
        font-size: 16px;
        color: #555;
        line-height: 1.6;
      }

      a {
        color: #007BFF;
        text-decoration: none;
      }

      a:hover {
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
      }
    </style>
  </head>
  <body><div class="container">
    <header>
      <h4 style="text-align: center; color: #007BFF; margin-bottom: 10px;"> SWAGGER API - FILUM INTERVIEW</h4>
      <h1>API Here !!</h1>
      <p>METHOD POST</p>
      <p>SEND LINK FACEBOOK</p>
      <p>SEND EMAIL</p>
    <p>
    COPY LINK TO CLIPBOARD
    <a href="https://filum-be-interview.vercel.app/get-link?user=quang@gmail.com&level=5"> Example: Click me !</a>  
    </p>
    </header>
    <footer>
        <h4 style="color: #08315e;">Filum.ai</h4>
        <p><strong>Email:</strong> <a href="mailto:careers@filum.ai">careers@filum.ai</a></p>
        <p><strong>Trang web:</strong> <a href="https://filum.ai" target="_blank">Tuyển dụng Filum.ai</a></p>
        <p><strong>Địa chỉ:</strong> 117 Tân Cảng, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
    </footer>
  </div>

  </body>
</html>
`);
});

const mail = router.post(ROUTER.SEND_MAIL, (req, res) => {
  res.status(200).send("API Here !!");
});

const link = router.get(ROUTER.GET_LINK, getLinkResult);
const facebook = router.get(ROUTER.SHARE_FACEBOOK, (req, res) => {
  res.status(200).send("API Here !!");
});

function route(app) {
  app.use(home)
  app.use(mail)
  app.use(link)
  app.use(facebook)
}

module.exports  = route;