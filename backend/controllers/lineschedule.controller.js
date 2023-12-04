const db = require('../models');
const LineSchedule = db.lineschedule;
const Schedule = db.schedule;

exports.getLineSchedule = async (req, res) => {
  const buslineId = req.params.buslineId;

  try {
    const schedule = await LineSchedule.findAll({
      where: {
        buslineId: buslineId
      },
      include: [{
        model: Schedule
      }]
    });

    res.send(schedule);
  } catch (error) {
    console.log(error);
  }
}

exports.addLineSchedule = async (req, res) => {
  const buslineId = req.params.buslineId;
  const scheduleId = req.body.scheduleId;

  try {
    const schedule = await Schedule.findOne({
      where: {
        id: scheduleId
      }
    });

    if (!schedule) {
      return res.status(404).send({
        message: "No se ha encontrado"
      });
    }

    const newLineSchedule = await LineSchedule.create({
      buslineId: buslineId,
      scheduleId: scheduleId,
    });

    res.status(201).send(newLineSchedule);

  } catch (error) {
    res.status(500).send({
      message: error.message || "No se ha encontrado."
    });
  }
}
