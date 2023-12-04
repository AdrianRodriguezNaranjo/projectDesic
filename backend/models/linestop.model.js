module.exports = (sequelize, Sequelize) => {
  const Linestop = sequelize.define("linestop", {});

  Linestop.associate = (models) => {
    Linestop.belongsTo(models.busline);
    Linestop.belongsTo(models.stop);
  };

  return Linestop;
};