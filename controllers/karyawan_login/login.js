require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { karyawan } = require("../../model");
const Validator = require("fastest-validator");
const v = new Validator();
const { JWT_SECRET_KEY, JWT_TIME_EXPIRE } = process.env;

module.exports = async (req, res) => {
  const { nama_pengguna, sandi } = req.body;
  const schema = {
    nama_pengguna: "string|required",
    sandi: "string|required",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(422).json({
      status: false,
      message: validate,
    });
  }

  await karyawan
    .findOne({
      where: { nama_pengguna },
    })
    .then((data) => {
      if (data === null) {
        return res.status(401).json({
          status: false,
          message: "nama pengguna Salah",
        });
      }
      bcrypt.compare(sandi, data.sandi, (err, pass) => {
        if (err) {
          return res.status(400).json({
            status: false,
            message: err.message,
          });
        } else {
          if (pass) {
            jwt.sign(
              {
                id: data.id,
                nama_pengguna: data.nama_pengguna,
                nama: data.nama,
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
                  message: "karyawan berhasil login",
                  token,
                });
              }
            );
          } else {
            return res.status(401).json({
              status: false,
              message: "sandi Salah",
            });
          }
        }
      });
    });
};
