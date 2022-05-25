const bcrypt = require("bcryptjs");
const { karyawan } = require("../../model");
const Validator = require("fastest-validator");
const v = new Validator();

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
    .update(
      {
        nama_pengguna,
        sandi: bcrypt.hashSync(sandi, 10),
      },
      { where: { id: req.params.id } }
    )
    .then((data) => {
      return res.status(201).json({
        status: true,
        message: "karyawan berhasil ditambahkan",
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
