import "./buslineUpdate.css";
import { useState } from 'react';
import { Button, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import BuslineService from "../../services/busline/busline.service";

function BuslineUpdate() {
    const nav = useNavigate();

    const data = JSON.parse(localStorage.getItem("busline"));

    const [direction, setDirection] = useState(data.direction || "");
    const [startstop, setStartstop] = useState(data.startstop || "");
    const [finalstop, setFinalstop] = useState(data.finalstop || "");

    const [file, setFile] = useState(data.filename || "");

    const [voidLoginError, setVoidError] = useState("");

    // const validateInput = () => {

    // }

    const submitBusline = async () => {
        const formData = new FormData();
        formData.append('direction', direction);
        formData.append('startstop', startstop);
        formData.append('finalstop', finalstop);
        formData.append('file', file);

        try {
            await BuslineService.update(localStorage.getItem("accessToken"), data.id, formData);
            nav("/busline");
        } catch (error) {
            console.error("Error updating busline", error);
            setVoidError("Error al actualizar la línea de guagua");
        }
    }

    return (
        <div className="container-buslinecreate">
            <h2>Actualiza línea de guagua</h2>
            <Input placeholder={data.direction} value={direction} onChange={(e) => setDirection(e.target.value)} />
            <Input placeholder={data.startstop} value={startstop} onChange={(e) => setStartstop(e.target.value)} />
            <Input placeholder={data.finalstop} value={finalstop} onChange={(e) => setFinalstop(e.target.value)} />

            <Input onChange={(e) => setFile(e.target.files[0])}
                type="file"
                accept="image/*" />
            {voidLoginError && <div className="error-mesage">{voidLoginError}</div>}
            <Button className="buttonCreateBusline" type="primary" onClick={submitBusline}>Actualizar</Button>
        </div>
    );
}

export default BuslineUpdate;