module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
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