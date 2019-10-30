module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: { type: DataTypes.STRING(100), allowNull: false },
      email: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      charset: 'utf8',
      collate: 'utf8_general_ci',
    },
  );
  User.associate = db => {
    db.User.hasMany(db.Cart);
  };
  return User;
};
