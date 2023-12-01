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
    Busline.belongsToMany(models.schedule, { through: models.lineschedule , onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  };

  return Busline;
};