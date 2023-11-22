module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      }
    });

    User.associate = (models) => {
      User.belongsToMany(models.busline, { through: 'UserLine' });
    };
  
    return User;
  };