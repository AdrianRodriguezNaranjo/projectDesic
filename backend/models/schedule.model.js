module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("schedule", {
    hour: {
      type: Sequelize.STRING
    },
  });

  return Schedule;
};