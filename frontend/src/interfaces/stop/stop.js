import "./stop.css";
import StopCreate from "../../components/stopCreate/stopCreate";
import StopList from "../../components/stopList/stopList";
import React, { useEffect, useState } from "react";
import StopService from "../../services/stop/stop.service";
import BuslineService from "../../services/busline/busline.service";
import Consts from "../../components/const/const";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function Stop() {
  const [stopList, setStopList] = useState([]);
  const [stop, setStop] = useState("");
  const headline = ['latitude', 'longitude', 'name'];
  const [mode, setMode] = useState(Consts.addMode);

  const getStop = async () => {
    try {
      const response = await BuslineService.getStopOfBusline(localStorage.getItem("accessToken"),
      localStorage.getItem("idBusline"));
      const res = response.map(item => item.stop);
      setStopList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStop();
  }, [])

  const row = (item) => {
    return (
      <>
        <td>{item.latitude}</td>
        <td>{item.longitude}</td>
        <td>{item.name}</td>
      </>
    );
  };

  const onDelete = async (id) => {
    await StopService.remove(id);
    getStop();
  };

  const onUpdate = ((data) => {
    setMode(Consts.editMode);
    const stopToEdit = stopList.find(stop => stop.id === data.id);
    setStop(stopToEdit);
  });

  const onCancel = (() => {
    setMode(Consts.addMode);
    setStop("");
  });

  return (
    <div className="stop-content">
      <Header/>
      <StopCreate stop={stop} mode={mode} onCancel={onCancel} afterAction={getStop} />
      <StopList
        items={stopList}
        rows={row}
        headline={headline}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
      <Footer />
    </div>
  );
}

export default Stop;