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
      id_shift: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "shift",
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
    jadwal.hasMany(models.shift, {
      foreignKey: "id",
      sourceKey: "id_shift",
    });
    jadwal.belongsTo(models.karyawan, {
      foreignKey: "id_karyawan",
    });
  };
  return jadwal;
};
