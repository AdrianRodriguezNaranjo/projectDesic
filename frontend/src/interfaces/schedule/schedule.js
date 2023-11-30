import "./schedule.css"
import React, { useEffect, useState } from "react";
import ScheduleService from "../../services/schedule/schedule.service";
import ScheduleDetails from "../../components/scheduleDetails/scheduleDetails";
import ScheduleAddPut from "../../components/scheduleAddPut/scheduleAddPut";
import Consts from "../../components/const/const";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [edithour, setEditHour] = useState("");
  const headline = ['Hora salida'];
  const [mode, setMode] = useState(Consts.addMode);

  const getSchedule = async () => {
    try {
      const response = await ScheduleService.getAll();
      setSchedule(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  const row = (item) => {
    return (
      <>
        <td>{item.hour}</td>
      </>
    );
  };

  const onDelete = async (id) => {
    await ScheduleService.remove(id);
    getSchedule();
  };

  const onUpdate = ((data) => {
    setMode(Consts.editMode);
    const hourToEdit = schedule.find(hour => hour.id === data.id);
    setEditHour(hourToEdit);
  });

  const onCancel = (() => {
    setMode(Consts.addMode);
    setEditHour("");
  });

  return (
    <>
      <ScheduleAddPut edithour={edithour} mode={mode} onCancel={onCancel} afterAction={getSchedule} />
      <ScheduleDetails
        items={schedule}
        rows={row}
        headline={headline}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </>
  );
}

export default Schedule;