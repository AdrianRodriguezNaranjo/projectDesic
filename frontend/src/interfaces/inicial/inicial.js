import "./inicial.css"
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

function Inicial() {
  const nav = useNavigate();

  const gotobusline = () => {
    nav("/busline");
  }

  return (
    <div className="background-inicial">
      <Button className="gotobusline" type="primary" onClick={gotobusline}>Líneas y horarios</Button>
    </div>
  );
}

export default Inicial;