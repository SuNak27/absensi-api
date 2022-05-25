module.exports = (sequelize, DataTypes) => {
  const shift = sequelize.define(
    "shift",
    {
      kode_shift: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nama_shift: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jam_masuk: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      jam_keluar: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "shift",
    }
  );
  return shift;
};
