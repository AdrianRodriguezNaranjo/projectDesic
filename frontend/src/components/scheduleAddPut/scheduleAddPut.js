import "./scheduleAddPut.css"
import React, { useEffect, useState } from "react";
import ScheduleService from "../../services/schedule/schedule.service";
import { Button, Input } from 'antd';

function ScheduleAddPut({ edithour, mode, onCancel, afterAction }) {
  const [hour, setHour] = useState(edithour.hour || "");

  useEffect(() => {
    setHour(edithour.hour || "");
  }, [edithour]);

  const submitHour = async () => {
    const formData = new FormData();
    formData.append('hour', hour);
    if (mode === "Editar") {
      await ScheduleService.update(edithour.id, formData);
    } else if (mode === "Añadir") {
      formData.append('buslineId', localStorage.getItem("idBusline"));
      await ScheduleService.create(formData);
      setHour("");
    }
    afterAction();
  }

  return (
    <div className="container-schedule">
      <h2>{mode}</h2>
      <Input placeholder="Hour" value={hour} onChange={(e) => setHour(e.target.value)} />
      {/* {voidLoginError && <div className="error-mesage">{voidLoginError}</div>} */}
      <Button className="buttonSchedule" type="primary" onClick={submitHour}>{mode}</Button>
      {mode === "Editar" && (<Button className="buttonCancel" danger type="primary" onClick={onCancel}>Cancelar</Button>)}
    </div>
  );
}

export default ScheduleAddPut;