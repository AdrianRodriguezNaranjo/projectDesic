module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("schedule", {
    hour: {
      type: Sequelize.STRING
    },
  });
  
  Schedule.associate = (models) => {
    Schedule.belongsToMany(models.busline, { through: models.lineschedule, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  };

  return Schedule;
};