import React from "react";
import { Container, Text } from "./styles";

export default function Button({ ...rest }) {
  return (
    <Container {...rest}>
      <Text>Ver modelos</Text>
    </Container>
  );
}
