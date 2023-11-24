import BuslineCreate from "../../components/buslineCreate/buslineCreate";
import BuslineList from "../../components/buslineList/buslineList";
import "./busline.css";
import BuslineService from "../../services/busline/busline.service";
import React, { useEffect, useState } from "react";

function Busline() {
  const [lineList, setlineList] = useState([]);
  const headline = ['direction', 'startstop', 'finalstop', 'file'];

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
  }, [lineList]);

  const row = (line) => {
    return (
      <>
        <td>{line.direction}</td>
        <td>{line.startstop}</td>
        <td>{line.finalstop}</td>
      </>
    );
  };


  return (
    <>
      <BuslineCreate />
      <BuslineList items={lineList} rows={row} headline={headline} />
    </>
  );
}

export default Busline;