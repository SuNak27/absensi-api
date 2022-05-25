module.exports = (sequelize, DataTypes) => {
  const karyawan = sequelize.define(
    "karyawan",
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "karyawan",
    }
  );
  return karyawan;
};
