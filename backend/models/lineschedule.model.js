module.exports = (sequelize, Sequelize) => {
  const Lineschedule = sequelize.define("lineschedule", {});

  Lineschedule.associate = (models) => {
    Lineschedule.belongsTo(models.busline);
    Lineschedule.belongsTo(models.schedule);
  };

  return Lineschedule;
};