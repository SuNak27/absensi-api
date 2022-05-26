module.exports = (sequelize, DataTypes) => {
  const jabatan = sequelize.define(
    "jabatan",
    {
      nama_jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "jabatan",
    }
  );
  jabatan.associate = function (models) {
    jabatan.belongsTo(models.karyawan, {
      foreignKey: "id",
    });
  };
  return jabatan;
};
