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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headline.length + 1}>No hay paradas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuslineList;