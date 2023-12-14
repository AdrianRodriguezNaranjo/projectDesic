import "./stopCreate.css";
import StopService from "../../services/stop/stop.service";
import { useState, useEffect } from 'react';
import { Button, Input } from 'antd';

function StopCreate({ stop, mode, onCancel, afterAction }) {
  const [latitude, setLatitude] = useState(stop.Latitude || "");
  const [longitude, setLongitude] = useState(stop.Longitude || "");
  const [nameStop, setNameStop] = useState(stop.name || "");

  useEffect(() => {
    setLatitude(stop.latitude || "");
    setLongitude(stop.longitude || "");
    setNameStop(stop.name || "");
  }, [stop]);

  // const [voidLoginError, setVoidError] = useState("");

  // const validateInput = () => {

  // }
  const submitStop = async () => {
    const formData = new FormData();
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('name', nameStop);
    if (mode === "Editar") {
      await StopService.update(stop.id, formData);
    } else if (mode === "Añadir") {
      await StopService.create(formData);
      setLatitude("");
      setLongitude("");
      setNameStop("");
    }
    afterAction();
  }

  return (
    <div className="container-stopcreate">
      <h2>{mode}</h2>
      <Input placeholder="Latitud" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      <Input placeholder="Longitud" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      <Input placeholder="Nombre" value={nameStop} onChange={(e) => setNameStop(e.target.value)} />
      {/* {voidLoginError && <div className="error-mesage">{voidLoginError}</div>} */}
      <Button className="buttonCreateStop" type="primary" onClick={submitStop}>{mode}</Button>
      {mode === "Editar" && (<Button className="buttonCancel" danger type="primary" onClick={onCancel}>Cancelar</Button>)}
    </div>
  );
}

export default StopCreate;