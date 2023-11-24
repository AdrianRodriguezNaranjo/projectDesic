module.exports = (sequelize, Sequelize) => {
  const Busline = sequelize.define("busline", {
    direction: {
      type: Sequelize.STRING
    },
    startstop: {
      type: Sequelize.STRING
    },
    finalstop: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  Busline.associate = (models) => {
    Busline.belongsTo(models.user, { through: 'UserLine' });
  };

  return Busline;
};