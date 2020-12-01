import React, { Component } from "react";
// import axios from "axios";
import Map from "../../components/map/map";
import Login from '../../components/login/login';
import Filters from '../../components/filters/filters';
import List from '../../components/list/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
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
          <Jumbotron fluid>
            <Map/>
          </Jumbotron>
        </Col>
        <Col lg={8}>
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
 
 export default bottleInfo;