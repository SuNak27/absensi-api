const { application, raw } = require("express");
const {
  jadwal,
  unit,
  shift,
  jabatan,
  karyawan,
  detail_jadwal,
  setting_tahun,
} = require("../model");
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
                  attributes: ["nama_jabatan"],
                },
                {
                  model: unit,
                  attributes: ["nama_unit"],
                },
              ],
            },
            {
              model: setting_tahun,
              attributes: ["tahun", "status"],
            },
          ],
          attributes: {
            exclude: ["id_karyawan", "id_tahun"],
          },
          group: ["id_karyawan", "bulan"],
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
  async cariByKaryawan(req, res, next) {
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
                  attributes: ["nama_jabatan"],
                },
                {
                  model: unit,
                  attributes: ["nama_unit"],
                },
              ],
            },
            {
              model: setting_tahun,
              attributes: ["tahun", "status"],
            },
            {
              model: detail_jadwal,
              include: [
                {
                  model: shift,
                  attributes: ["id", "nama_shift", "jam_masuk", "jam_keluar"],
                },
              ],
              attributes: {
                exclude: ["id_jadwal", "id", "id_tahun"],
              },
            },
          ],
          attributes: {
            exclude: ["id_karyawan", "bulan", "karyawan"],
          },
          order: [["tanggal", "ASC"]],
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              success: 1,
              karyawan: result[0].karyawan,
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
  async cariByKaryawanAndBulan(req, res, next) {
    try {
      await jadwal
        .findAll({
          where: {
            id_karyawan: req.params.id_karyawan,
            bulan: req.params.bulan,
          },
          include: [
            {
              model: karyawan,
              attributes: ["id", "nama"],
              include: [
                {
                  model: jabatan,
                  attributes: ["nama_jabatan"],
                },
                {
                  model: unit,
                  attributes: ["nama_unit"],
                },
              ],
            },
            {
              model: setting_tahun,
              attributes: ["tahun", "status"],
            },
            {
              model: detail_jadwal,
              include: [
                {
                  model: shift,
                  attributes: ["id", "nama_shift", "jam_masuk", "jam_keluar"],
                },
              ],
              attributes: {
                exclude: ["id_jadwal", "id"],
              },
            },
          ],
          attributes: {
            exclude: ["id_karyawan", "bulan", "karyawan", "id_tahun"],
          },
          order: [["tanggal", "ASC"]],
        })
        .then((result) => {
          if (result != 0) {
            return res.status(200).json({
              success: 1,
              karyawan: result[0].karyawan,
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
          return res.status(200).json({
            success: 1,
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
