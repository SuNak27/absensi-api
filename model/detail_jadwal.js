module.exports = (sequelize, DataTypes) => {
  const detail_jadwal = sequelize.define(
    "detail_jadwal",
    {
      id_jadwal: {
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
    },
    {
      tableName: "detail_jadwal",
    }
  );
  detail_jadwal.associate = function (models) {
    detail_jadwal.hasOne(models.shift, {
      foreignKey: "id",
      sourceKey: "id_shift",
    });
    detail_jadwal.belongsTo(models.jadwal, {
      foreignKey: "id_jadwal",
    });
  };
  return detail_jadwal;
};
