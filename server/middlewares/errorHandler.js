const errorHandler = (err, req, resp, next) => {
  switch (err.name) {
    case "user_input_missing":
      resp
        .status(400)
        .json({ msg: "Please input email and password for login" });
      break;

    case "JsonWebTokenError":
      resp.status(401).json({ msg: "Invalid access token" });
      break;

    case "invalid_credential":
      resp.status(401).json({ msg: "Invalid email or password" });
      break;

    case "invalid_access":
      resp.status(401).json({ msg: "Invalid access token" });
      break;

    case "product_not_found":
      resp.status(404).json({ msg: "Product data not found" });
      break;

    case "not_found":
      resp.status(404).json({ msg: "user data not found" });
      break;

    case "video_not_found":
      resp.status(404).json({ msg: "Video not found" });
      break;

    default:
      resp.status(500).json({ msg: "Internal server error!" });
      break;
  }
};

module.exports = errorHandler;
