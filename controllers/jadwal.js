const { application } = require("express");
const { jadwal, unit, shift, jabatan, karyawan } = require("../model");
const { sequelize } = require("sequelize");

module.exports = {
  async all(req, res, next) {
    try {
      await jadwal
        .findAll({
          include: [
            {
              model: karyawan,
              attributes: ["id", "nama"],
              include: [
                {
                  model: jabatan,
                  attributes: ["id", "nama_jabatan"],
                },
                {
                  model: unit,
                  attributes: ["id", "nama_unit"],
                },
              ],
            },
          ],
          attributes: {
            exclude: ["id_shift", "id_karyawan"],
          },
          group: ["id_karyawan"],
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
      await jadwal
        .findAll({
          where: {
            id_karyawan: req.params.id_karyawan,
          },
          include: [
            {
              model: karyawan,
              attributes: ["id", "nama"],
              include: [
                {
                  model: jabatan,
                  attributes: ["id", "nama_jabatan"],
                },
                {
                  model: unit,
                  attributes: ["id", "nama_unit"],
                },
              ],
            },
            {
              model: shift,
              required: true,
              attributes: ["id", "nama_shift"],
            },
          ],
          attributes: {
            exclude: ["id_shift", "id_karyawan"],
          },
          order: [["tanggal", "ASC"]],
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
      const body = req.body;
      await jadwal
        .bulkCreate(body)
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
      const { nama, jabatan } = req.body;
      await jadwal
        .update(
          {
            nama,
            jabatan,
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
