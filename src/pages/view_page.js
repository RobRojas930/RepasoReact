import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  Button,
} from "reactstrap";
export const ViewPage = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>{}children</Col>
      </Row>
    </Container>
  );
};
