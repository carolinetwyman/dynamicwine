import React from "react";

import Map from "../../components/map/map";
import Login from '../../components/login/login';
import Filters from '../../components/filters/filters';
import List from '../../components/list/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import "./frontPage.css";


//i need to keep handlechange and handlesubmit

function frontPage() {
  return (
    <Jumbotron fluid className="body">
      <Row className="wine">
          <Login className='center'/>
      </Row>
      <Row>
        <Col lg={8}>
          <Jumbotron fluid>
            <Map/>
          </Jumbotron>
        </Col>
        <Col lg={4}>
          <Row>
            <Jumbotron fluid>
              <Filters/>
            </Jumbotron>
          </Row>
          <Row>
            <Jumbotron fluid>
              <List/>
            </Jumbotron>
          </Row>
        </Col>
      </Row>
      </Jumbotron>
 
  );
}

export default frontPage;
