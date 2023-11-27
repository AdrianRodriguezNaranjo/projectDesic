import "./stopCreate.css";
import StopService from "../../services/stop/stop.service";
import { useState } from 'react';
import { Button, Input } from 'antd';

function StopCreate() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [nameStop, setNameStop] = useState();

  // const [voidLoginError, setVoidError] = useState("");

  // const validateInput = () => {

  // }

  const submitStop = async () => {
    const formData = new FormData();
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    formData.append('name', nameStop);

    StopService.create(formData);
  }

  return (
    <div className="container-stopcreate">
      <h2>Crea parada</h2>
      <Input placeholder="Latitud" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      <Input placeholder="Longitud" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      <Input placeholder="Nombre" value={nameStop} onChange={(e) => setNameStop(e.target.value)} />
      {/* {voidLoginError && <div className="error-mesage">{voidLoginError}</div>} */}
      <Button className="buttonCreateStop" type="primary" onClick={submitStop}>Añadir</Button>
    </div>
  );
}

export default StopCreate;