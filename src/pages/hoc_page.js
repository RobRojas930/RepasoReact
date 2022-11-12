import React, { Fragment } from "react";
import withSearch from "./../components/hoc/withSearch";
import ProductList from "./../components/hoc/productList";

export const HocPage = () => {
  const products = [
    {
      id: 1,
      title: "Wasabi Paste",
    },
    {
      id: 2,
      title: "Sesame Seed",
    },
    {
      id: 3,
      title: "Turkey - Ground. Lean",
    },
    {
      id: 4,
      title: "Sauce - Fish 25 Ozf Bottle",
    },
    {
      id: 5,
      title: "Kiwano",
    },
    {
      id: 6,
      title: "Wine - Beringer Founders Estate",
    },
    {
      id: 7,
      title: "Flower - Commercial Spider",
    },
    {
      id: 8,
      title: "Wine - Chardonnay Mondavi",
    },
    {
      id: 9,
      title: "Otomegusa Dashi Konbu",
    },
    {
      id: 10,
      title: "Muffin - Blueberry Individual",
    },
  ];
  const todos = [
    {
      id: 1,
      title: "InterdumMaurisUllamcorper.xls",
      completed: true,
    },
    {
      id: 2,
      title: "OrnareConsequatLectus.avi",
      completed: true,
    },
    {
      id: 3,
      title: "CubiliaCuraeNulla.mp3",
      completed: true,
    },
    {
      id: 4,
      title: "Blandit.txt",
      completed: true,
    },
    {
      id: 5,
      title: "SapienCursusVestibulum.doc",
      completed: false,
    },
    {
      id: 6,
      title: "PorttitorPede.ppt",
      completed: false,
    },
    {
      id: 7,
      title: "MorbiPorttitor.doc",
      completed: true,
    },
    {
      id: 8,
      title: "AeneanLectus.tiff",
      completed: false,
    },
    {
      id: 9,
      title: "SagittisDui.ppt",
      completed: false,
    },
    {
      id: 10,
      title: "TellusInSagittis.mp3",
      completed: true,
    },
  ];

  const ProductWithSearch = withSearch(ProductList, products);
  const TodoWithSearch = withSearch(ProductList, todos);
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col md="6">
            <ProductWithSearch></ProductWithSearch>
          </Col>
          <Col md="6">
            <TodoWithSearch></TodoWithSearch>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
