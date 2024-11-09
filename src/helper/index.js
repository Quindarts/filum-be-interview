module.exports = function findLevelImg(level) {
  let imgURL = "";
  switch (level) {
    case "1":
      imgURL =
        "https://res.cloudinary.com/dyd2nynrp/image/upload/v1731062043/1_q3jhxd.png";
      break;
    case "2":
      imgURL =
        "https://res.cloudinary.com/dyd2nynrp/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1731062042/2_iqzcns.png";

      break;
    case "3":
      imgURL =
        "https://res.cloudinary.com/dyd2nynrp/image/upload/v1731062043/3_dhrhjr.png";
      break;
    case "4":
      imgURL =
        "https://res.cloudinary.com/dyd2nynrp/image/upload/v1731062042/4_le2z2c.png";
      break;
    case "5":
      imgURL =
        "https://res.cloudinary.com/dyd2nynrp/image/upload/v1731062042/5_qsl2m5.png";
      break;
  }
  return imgURL;
};
