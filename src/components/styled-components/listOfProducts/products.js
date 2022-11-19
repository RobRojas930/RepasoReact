import "regenerator-runtime/runtime";
import React from "react";
import { Product } from "../product/product";
import { Col, Container, Row } from "reactstrap";
const TOKEN = ""; //Poner token aqui
const  getData = ({ headers, callback, method, data, url }) => {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    let respData = {
      success: false,
      message: "Ocurrió un error",
      data: {},
    };
    if (this.readyState == 4 && this.status == 200 && this.response) {
      respData = JSON.parse(this.response);
    }
    callback(respData);
  };

  request.open(
    method,
    `http://gentle-temple-86430.herokuapp.com/api/v1${url}`
  );
  headers.forEach((element) => {
    request.setRequestHeader(element.header, element.value);
  });
  request.send(JSON.stringify(data));
}

export class ListOfProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  } 
  componentDidMount() {
    getData({
      method: "GET",
      url: "/products",
      data: {},
      headers:[
        { header: 'Content-Type', value: 'application/json' },
        { header: 'Authorization', value: `BEARER ${TOKEN}` },
        { header: 'Access-Control-Allow-Origin', value: `*` },
        { header: 'Access-Control-Allow-Credentials', value: 'true' },
        { header: 'Access-Control-Allow-Headers', value: 'Authorization' },
        {
          header: 'Access-Control-Allow-Methods',
          value: 'GET, POST, PUT, DELETE',
        },
      ],
      callback: (response, alertDataMessage) => {
        //enviamos al componente padre el alert message
        if (alertDataMessage) this.alertMessage(alertDataMessage);
        if (response.success) {
          if (response.data.products.length <= 0)
            this.alertMessage({
              show: true,
              type: "success",
              title: "¡ÉXITOS!",
              message: response.message,
            });
          this.setState({
            products: response.data.products,
          });
        }
      },
    });
  }
  render() {
    var products = this.state.products || [];
    return (
      <Container fluid>
        <Row>
          {products.map((x, i) => (
            <Col md="3" key={i}>
              <Product image={x.image} {...x}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
