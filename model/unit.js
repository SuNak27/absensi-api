module.exports = (sequelize, DataTypes) => {
  const unit = sequelize.define(
    "unit",
    {
      nama_unit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "unit",
    }
  );
  unit.associate = function (models) {
    unit.belongsTo(models.karyawan, {
      foreignKey: "id",
    });
  };
  return unit;
};
