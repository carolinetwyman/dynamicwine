import React from "react";
// import axios from "axios";
import Map from "../../components/map/map";
import Login from '../../components/login/login';
import Filters from '../../components/filters/filters';
import List from '../../components/list/list';
import Information from '../../components/information/information';
import { Jumbotron, Row, Col } from 'reactstrap';
import "./bottleInfo.css";
// import CategoryChoice from "../../components/wine-categories/category-choice";


function bottleInfo() {
  return (
    <Jumbotron fluid className="body">
      <Row className="wine">
          <Login className='center'/>
      </Row>
      <Row>
        <Col lg={4}>
          <Jumbotron fluid className="map">
            <Map/>
          </Jumbotron>
        </Col>
        <Col lg={4}>
          <Row>
            <Jumbotron fluid className="components">
              <Filters/>
            </Jumbotron>
          </Row>
          <Row>
            <Jumbotron fluid className="components">
              <List/>
            </Jumbotron>
          </Row>
        </Col>
        <Col lg={4}>
          <Jumbotron fluid className="components">
            <Information/>
          </Jumbotron>
        </Col>
      </Row>
      </Jumbotron>
 
  );
 }
 
 export default bottleInfo;