import React from "react";
import { Fragment } from "react";
import { Badge, Container, Row, Col } from "reactstrap";
import TodoContainer from "./../components/presentation-container/todoContainer";

export const PresentationContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="text-center m-3">
              <Badge color="secondary" className="m-auto">
                <h3>Presentation-Container</h3>
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <TodoContainer />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
