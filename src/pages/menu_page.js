import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, url }) => {
  const navigate = useNavigate();
  <Card key={title} body>
    <CardTitle tag="h5">{title}</CardTitle>
    <Button onClick={() => navigate(url)}>IR</Button>
  </Card>;
};

export const MenuPage = ({items}) => {
  return (
    <Container fluid>
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
