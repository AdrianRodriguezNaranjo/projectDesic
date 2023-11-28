import "./stop.css";
import StopCreate from "../../components/stopCreate/stopCreate";
import StopList from "../../components/stopList/stopList";
import React, { useEffect, useState } from "react";
import StopService from "../../services/stop/stop.service";
import Consts from "../../components/const/const";

function Stop() {
  const [stopList, setStopList] = useState([]);
  const [stop, setStop] = useState("");
  const headline = ['latitude', 'longitude', 'name'];
  const [mode, setMode] = useState(Consts.addMode);

  useEffect(() => {
    const getStop = async () => {
      try {
        const response = await StopService.getStops();
        setStopList(response);
      } catch (error) {
        console.log(error);
      }
    };
    getStop();
  }, [stopList]);

  const row = (item) => {
    return (
      <>
        <td>{item.latitude}</td>
        <td>{item.longitude}</td>
        <td>{item.name}</td>
      </>
    );
  };

  const onDelete = ((id) => {
    StopService.remove(id);
  });

  const onUpdate = ((data) => {
    setMode(Consts.editMode);
    const stopToEdit = stopList.find(stop => stop.id === data.id);
    console.log(stopToEdit);
    setStop(stopToEdit);
  });

  const onCancel = (() => {
    setMode(Consts.addMode);
    setStop("");
  });

  return (
    <>
      <StopCreate stop={stop} mode={mode} onCancel={onCancel}/>
      <StopList items={stopList} rows={row} headline={headline} onDelete={onDelete} onUpdate={onUpdate} />
    </>
  );
}

export default Stop;