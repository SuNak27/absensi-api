module.exports = (sequelize, DataTypes) => {
  const jadwal = sequelize.define(
    "jadwal",
    {
      id_karyawan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "karyawan",
          key: "id",
        },
      },
      id_tahun: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tahun",
          key: "id",
        },
      },
      tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      bulan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "jadwal",
    }
  );
  jadwal.associate = function (models) {
    jadwal.hasMany(models.detail_jadwal, {
      foreignKey: "id_jadwal",
      sourceKey: "id",
    });
    jadwal.hasOne(models.karyawan, {
      foreignKey: "id",
      sourceKey: "id_karyawan",
    });
    jadwal.hasOne(models.setting_tahun, {
      foreignKey: "id",
      sourceKey: "id_tahun",
    });
  };
  return jadwal;
};
