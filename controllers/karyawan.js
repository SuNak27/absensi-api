const { application } = require("express");
const { karyawan, unit, jabatan } = require("../model");
const { sequelize } = require("sequelize");

module.exports = {
  async all(req, res, next) {
    try {
      await karyawan
        .findAll({
          include: [
            {
              model: unit,
            },
            {
              model: jabatan,
            },
          ],
          attributes: {
            exclude: ["sandi", "id_unit", "id_jabatan"],
          },
        })
        .then((result) => {
          if (result.length > 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "tidak ditemukan...",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async cari(req, res, next) {
    try {
      await karyawan
        .findOne({
          where: {
            id: req.params.id,
          },
          include: [
            {
              model: unit,
            },
            {
              model: jabatan,
            },
          ],
          attributes: {
            exclude: ["sandi", "id_unit", "id_jabatan"],
          },
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              success: 1,
              data: result,
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "tidak ditemukan...",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async simpan(req, res, next) {
    try {
      const { nama, jabatan } = req.body;
      await karyawan
        .create({
          nama,
          jabatan,
        })
        .then((result) => {
          return res.status(201).json({
            success: 1,
            message: "Berhasil Tersimpan",
            data: result,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
  async edit(req, res, next) {
    try {
      const {
        nik,
        nama,
        id_jabatan,
        id_unit,
        tanggal_lahir,
        status_kawin,
        alamat,
        gender,
        pendidikan,
        agama,
        telepon,
        tanggal_mulai_kerja,
        tanggal_resign,
        status_aktif,
        status_kerja,
        tanggal,
        tanggal_mulai_kontrak,
        tanggal_habis_kontrak,
        lama_kontrak,
        nama_pengguna,
        sandi,
        lastupdate_date,
      } = req.body;
      await karyawan
        .update(
          {
            nik,
            nama,
            id_jabatan,
            id_unit,
            tanggal_lahir,
            status_kawin,
            alamat,
            gender,
            pendidikan,
            agama,
            telepon,
            tanggal_mulai_kerja,
            tanggal_resign,
            status_aktif,
            status_kerja,
            tanggal,
            tanggal_mulai_kontrak,
            tanggal_habis_kontrak,
            lama_kontrak,
            nama_pengguna,
            sandi,
            lastupdate_date,
          },
          { where: { id: req.params.id } }
        )
        .then((result) => {
          if (result == 1) {
            return res.status(201).json({
              success: 1,
              message: "Berhasil Pembaruan",
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "Gagal Pembaruan",
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({
            success: 0,
            message: error.message,
          });
        });
    } catch (error) {
      return res.status(400).json({
        success: 0,
        message: error.message,
      });
    }
  },
};
