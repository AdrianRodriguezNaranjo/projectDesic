import BuslineCreate from "../../components/buslineCreate/buslineCreate";
import BuslineList from "../../components/buslineList/buslineList";
import "./busline.css";
import BuslineService from "../../services/busline/busline.service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Busline() {
  const nav = useNavigate();

  const [lineList, setlineList] = useState([]);
  const headline = ['direction', 'startstop', 'finalstop', 'file'];

  const navUpdate = () => {
    nav("/buslineupdate");
  };

  useEffect(() => {
    const getBusline = async () => {
      try {
        const response = await BuslineService.getBuslines(localStorage.getItem("accessToken"));
        setlineList(response);
      } catch (error) {
        console.log(error);
      }
    };
    getBusline();
  }, []);

  const row = (line) => {
    return (
      <>
        <td>{line.direction}</td>
        <td>{line.startstop}</td>
        <td>{line.finalstop}</td>
      </>
    );
  };

  const onDelete = ((id) => {
    BuslineService.remove(localStorage.getItem("accessToken"), id);
  });

  const onUpdate = ((data) => {
    localStorage.setItem("busline", JSON.stringify(data));
    navUpdate();
  });

  const goToStop = ((id) => {
    localStorage.setItem("idBusline", id);
    nav("/stop");
  });

  const goToSchedule = ((id) => {
    localStorage.setItem("idBusline", id);
    nav("/schedule");
  });


  return (
    <>
      <BuslineCreate />
      <BuslineList items={lineList} rows={row}
        headline={headline} onDelete={onDelete}
        onUpdate={onUpdate} goToStop={goToStop}
        goToSchedule={goToSchedule} />
    </>
  );
}

export default Busline;