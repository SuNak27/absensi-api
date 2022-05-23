require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pengurus } = require("../../model");
const Validator = require("fastest-validator");
const v = new Validator();
const { JWT_SECRET_KEY, JWT_TIME_EXPIRE } = process.env;

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const schema = {
    username: "string|required",
    password: "string|required",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(422).json({
      status: false,
      message: validate,
    });
  }

  await Pengurus.findOne({
    where: { username },
  }).then((data) => {
    if (data === null) {
      return res.status(401).json({
        status: false,
        message: "Username Salah",
      });
    }
    bcrypt.compare(password, data.password, (err, pass) => {
      if (err) {
        return res.status(400).json({
          status: false,
          message: err.message,
        });
      } else {
        if (pass) {
          //return res.json(data)
          jwt.sign(
            {
              id: data.id,
              username: data.username,
              role: data.role,
              nama: data.nama,
              foto: data.foto,
            },
            JWT_SECRET_KEY,
            { expiresIn: JWT_TIME_EXPIRE },
            (err, token) => {
              if (err) {
                return res.status(400).json({
                  status: false,
                  message: err.message,
                });
              }
              return res.json({
                status: true,
                message: "Pengurus berhasil login",
                token,
                role: data.role,
                nama: data.nama,
                foto: `${req.protocol}://${req.get("host")}/${data.foto}`,
              });
            }
          );
        } else {
          return res.status(401).json({
            status: false,
            message: "Password Salah",
          });
        }
      }
    });
  });
};
