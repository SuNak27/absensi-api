module.exports = (sequelize, DataTypes) => {
  const jadwal_shift = sequelize.define(
    "jadwal_shift",
    {
      shift_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "shift",
          key: "id",
        },
      },
      karyawan_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "karyawan",
          key: "id",
        },
      },
    },
    {
      tableName: "jadwal_shift",
    }
  );
  jadwal_shift.associate = function (models) {
    jadwal_shift.belongsTo(models.shift, {
      foreignKey: "shift_id",
    });
    jadwal_shift.belongsTo(models.karyawan, {
      foreignKey: "karyawan_id",
    });
  };
  return jadwal_shift;
};
