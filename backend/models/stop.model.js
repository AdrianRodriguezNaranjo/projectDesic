module.exports = (sequelize, Sequelize) => {
  const Stop = sequelize.define("stop", {
    latitude: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  });

  Stop.associate = (models) => {
    Stop.belongsToMany(models.busline, { through: models.linestop, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  };

  return Stop;
};