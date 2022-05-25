module.exports = (sequelize, DataTypes) => {
  const shift = sequelize.define(
    "shift",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jam_awal: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      jam_akhir: {
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
