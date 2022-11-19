import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  Button,
  Label,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <Card key={title} body>
      <CardTitle tag="h5">{title}</CardTitle>
      <Button onClick={() => navigate(url)}>IR</Button>
    </Card>
  );
};

export const MenuPage = ({ name, items }) => {
  return (
    <Container fluid>
      <Row>
        <Label className="h2">{name}</Label>
      </Row>
      <Row>
        {items.map((item) => (
          <Col key={item.title} md="3">
            <MenuItem {...item}></MenuItem>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
