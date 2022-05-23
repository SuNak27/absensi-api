require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = async (req, res, next) => {
  const token = req.get("X-Admin-Token");

  jwt.verify(token, JWT_SECRET_KEY, (err, pass) => {
    if (err) {
      return res.status(401).json({
        status: false,
        message: "Test failed, please login again!",
      });
    } else if (pass) {
      req.admin = pass;
      next();
    }
  });
};
