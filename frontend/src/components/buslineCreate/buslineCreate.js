import "./buslineCreate.css";
import { useState } from 'react';
import { Button, Input } from 'antd';
import BuslineService from "../../services/busline/busline.service";

function BuslineCreate({afterAction}) {
  const [file, setFile] = useState();
  const [direction, setDirection] = useState();
  const [startstop, setStartstop] = useState();
  const [finalstop, setFinalstop] = useState();

  // const [voidLoginError, setVoidError] = useState("");

  // const validateInput = () => {

  // }

  const submitBusline = async () => {
    const formData = new FormData();
    formData.append('direction', direction);
    formData.append('startstop', startstop);
    formData.append('finalstop', finalstop);
    formData.append('file', file);

    await BuslineService.create(localStorage.getItem("accessToken"), formData);
    afterAction();
  }

  return (
    <div className="container-buslinecreate">
      <h2>Crear Línea</h2>
      <Input placeholder="Direction" value={direction} onChange={(e) => setDirection(e.target.value)} />
      <Input placeholder="Start Stop" value={startstop} onChange={(e) => setStartstop(e.target.value)} />
      <Input placeholder="Final Stop" value={finalstop} onChange={(e) => setFinalstop(e.target.value)} />
      <Input 
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"/>
      <div className="images">
        {file && (
          <div className="image">
            <img src={URL.createObjectURL(file)} height="200" alt="upload" />
            <Button onClick={() => setFile(null)}>
              Eliminar imagen
            </Button>
          </div>
        )}
      </div>
      {/* {voidLoginError && <div className="error-mesage">{voidLoginError}</div>} */}
      <Button className="buttonCreateBusline" type="primary" onClick={submitBusline}>Añadir</Button>
    </div>
  );
}

export default BuslineCreate;