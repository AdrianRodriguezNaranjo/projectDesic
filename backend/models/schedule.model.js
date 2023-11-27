module.exports = (sequelize, Sequelize) => {
  const Schedule = sequelize.define("stop", {
    dayslist1: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    hourlist1: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    dayslist2: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    hourlist2: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
  });

  return Schedule;
};