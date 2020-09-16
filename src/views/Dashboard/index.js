import React, { useState, useEffect, useRef } from "react";
import { Container, ContainerTable, HeaderContainerTable } from "./styles";

// api
import api from "../../services/api";

export default function Dashboard() {
  const [cars, setCars] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [carModelName, setCarModelName] = useState("");

  // variable to scroll when the button is clicked
  let element = document.getElementById("carsModel");

  // this is called when you get in the page
  useEffect(() => {
    async function loadCars() {
      const response = await api.get("carros/marcas");
      setCars(response.data);
    }
    loadCars();
  }, []);

  // load the models of a car
  async function loadCarModels(id, name) {
    const response = await api.get(`carros/marcas/${id}/modelos`);
    setCarModels(response.data.modelos);
    setCarModelName(name);
    element.scrollIntoView();
  }

  return (
    <Container>
      <h1>Veículos</h1>
      <ContainerTable>
        <HeaderContainerTable>
          <h4>Marcas</h4>
        </HeaderContainerTable>
        <table>
          <thead>
            <tr>
              <th>Marca</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.codigo}>
                <td>{car.nome}</td>
                <td onClick={() => loadCarModels(car.codigo, car.nome)}>
                  Ver modelos
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ContainerTable>
      <div id="carsModel">
        {carModels.length > 0 ? (
          <ContainerTable>
            <HeaderContainerTable>
              <h4>Modelos ({carModelName})</h4>
            </HeaderContainerTable>
            <table>
              <thead>
                <tr>
                  <th>Modelo</th>
                </tr>
              </thead>
              <tbody>
                {carModels.map((carModel) => (
                  <tr key={carModel.codigo}>
                    <td>{carModel.nome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ContainerTable>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}
