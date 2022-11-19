import React, { Fragment } from "react";
import TodosView from "../../components/context-provider/todosView";
import { Badge, Container, Row, Col } from "reactstrap";
import Store from "../../components/context-provider/store";
export const ContextProvider = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="text-center m-3">
              <Badge color="secondary" className="m-auto">
                <h3>Context Provider</h3>
              </Badge>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Store>
              <TodosView />
            </Store>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
