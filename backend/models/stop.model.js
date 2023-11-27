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

  return Stop;
};