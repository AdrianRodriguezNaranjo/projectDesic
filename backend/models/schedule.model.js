module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("schedule", {
    dayslist1: {
      type: Sequelize.STRING
    },
    hourlist1: {
      type: Sequelize.STRING
    },
    dayslist2: {
      type: Sequelize.STRING
    },
    hourlist2: {
      type: Sequelize.STRING
    },
  });

  return Schedule;
};