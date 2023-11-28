import "./buslineList.css";
import React from "react";
import { DeleteOutlined, EditOutlined, DownOutlined, CopyOutlined } from '@ant-design/icons';

const BuslineList = ({ items, rows, headline, onDelete, onUpdate , goToStop}) => {

  return (
    <div className="container-buslinelist">
      <h2>Lista de guaguas</h2>
      <table>
        <thead>
          <tr>
            {headline.map((headline, index) => (
              <th key={index}>{headline}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                {rows(item)}
                <td>
                  {item.filename ? (
                    <img src={`http://localhost:4000/images/${item.filename}`} alt="Busline" style={{ maxWidth: "100px" }} />
                  ) : (
                    "No tiene imagen"
                  )}
                </td>
                <td><DeleteOutlined onClick={() => onDelete(item.id)} /></td>
                <td><EditOutlined onClick={() => onUpdate(item)} /></td>
                <td><DownOutlined onClick={() => goToStop(item.id)}/></td>
                <td><CopyOutlined /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headline.length + 1}>No hay líneas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuslineList;