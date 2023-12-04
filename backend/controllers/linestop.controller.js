const db = require('../models');
const LineStop = db.linestop;
const Stop = db.stop;

exports.getLineStops = async (req, res) => {
  const buslineId = req.params.buslineId;

  try {
    const stop = await LineStop.findAll({
      where: {
        buslineId: buslineId
      },
      include: [{
        model: Stop
      }]
    });

    res.send(stop);
  } catch (error) {
    console.log(error);
  }
}

exports.addLineStop = async (req, res) => {
  const buslineId = req.params.buslineId;
  const stopId = req.body.stopId;

  try {
    const stop = await Stop.findOne({
      where: {
        id: stopId
      }
    });

    if (!stop) {
      return res.status(404).send({
        message: "No se ha encontrado"
      });
    }

    const newLineStop = await LineStop.create({
      buslineId: buslineId,
      stopId: stopId,
    });

    res.status(201).send(newLineStop);

  } catch (error) {
    res.status(500).send({
      message: error.message || "No se ha encontrado."
    });
  }
}