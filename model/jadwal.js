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
      tanggal: {
        type: DataTypes.DATE,
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
  };
  return jadwal;
};
