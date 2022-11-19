import React, { Fragment } from "react";
import { Badge, Container, Row, Col } from "reactstrap";
import Menu from "../../components/compound/menu";
export const CompoundComponents = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="text-center m-3">
              <Badge color="secondary" className="m-auto">
                <h3>Compound Components</h3>
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Menu>
              <Menu.Item title="Elem 1"></Menu.Item>
              <Menu.Item title="Elem 2"></Menu.Item>
              <Menu.Item title="Elem 3"></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
