module.exports = (sequelize, DataTypes) => {
  const Notice = sequelize.define(
    'Notice',
    {
      type: { type: DataTypes.STRING(20), allowNull: false },
      rank: { type: DataTypes.INTEGER, allowNull: false },
      asin: { type: DataTypes.STRING(20), allowNull: false },
      name: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      image: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  return Notice;
};
