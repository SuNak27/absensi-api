module.exports = (sequelize, DataTypes) => {
  const setting_tahun = sequelize.define(
    "setting_tahun",
    {
      tahun: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(0, 1),
        allowNull: false,
      },
    },
    {
      tableName: "setting_tahun",
    }
  );
  setting_tahun.associate = function (models) {
    setting_tahun.hasMany(models.jadwal, {
      foreignKey: "id_tahun",
      sourceKey: "id",
    });
  };
  return setting_tahun;
};
