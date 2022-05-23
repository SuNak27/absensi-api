const bcrypt = require("bcryptjs");
const { Admin } = require("../../model");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { username, password, nama } = req.body;
  const schema = {
    username: "string|required",
    password: "string|required",
    nama: "string|required",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(422).json({
      status: false,
      message: validate,
    });
  }

  await Admin.create({
    username,
    password: bcrypt.hashSync(password, 10),
    nama,
  })
    .then((data) => {
      return res.status(201).json({
        status: true,
        message: "Admin berhasil ditambahkan",
        data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        status: false,
        message: error.message,
      });
    });
};
