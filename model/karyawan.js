module.exports = (sequelize, DataTypes) => {
  const karyawan = sequelize.define(
    "karyawan",
    {
      nik: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_jabatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "jabatan",
          key: "id",
        },
        field: "id_jabatan",
      },
      id_unit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "unit",
          key: "id",
        },
        field: "id_unit",
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status_kawin: {
        type: DataTypes.ENUM("Kawin", "Belum Kawin"),
        allowNull: false,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("L", "P"),
        allowNull: false,
      },
      pendidikan: {
        type: DataTypes.ENUM(
          "SMP Sederajat",
          "SMA Sederajat",
          "S1",
          "S2",
          "Lainnya"
        ),
        allowNull: false,
      },
      agama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telepon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tanggal_mulai_kerja: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tanggal_resign: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status_aktif: {
        type: DataTypes.ENUM("Aktif", "Tidak Aktif"),
        allowNull: false,
      },
      status_kerja: {
        type: DataTypes.ENUM("Kontrak", "Tetap", "Training"),
        allowNull: false,
      },
      tanggal_mulai_kontrak: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      tanggal_habis_kontrak: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      lama_kontrak: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nama_pengguna: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sandi: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastupdate_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "karyawan",
    }
  );
  karyawan.associate = function (models) {
    karyawan.hasOne(models.jabatan, {
      foreignKey: "id",
      sourceKey: "id_jabatan",
    });
    karyawan.hasOne(models.unit, {
      foreignKey: "id",
      sourceKey: "id_unit",
    });
    karyawan.belongsTo(models.jadwal, {
      foreignKey: "id",
    });
  };
  return karyawan;
};
