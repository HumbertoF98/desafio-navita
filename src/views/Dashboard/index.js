import React from "react";
import { Container, ContainerTable, HeaderContainerTable } from "./styles";

export default function Dashboard() {
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
            <tr>
              <td>Chevrolet</td>
              <td>Ver modelos</td>
            </tr>
            <tr>
              <td>Fiat</td>
              <td>Ver modelos</td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>

      <ContainerTable>
        <HeaderContainerTable>
          <h4>Modelos</h4>
        </HeaderContainerTable>
        <table>
          <thead>
            <tr>
              <th>Modelo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Onix</td>
            </tr>
            <tr>
              <td>Prisma</td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </Container>
  );
}
