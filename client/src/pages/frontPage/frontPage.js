import React from "react";
import "./frontPage.css";
import Map from "../../components/map/map";
import Login from '../../components/login/login';
import { Button, Container, Row, Col } from 'reactstrap';


//i need to keep handlechange and handlesubmit

function frontPage() {
  return (

    <div className="wine">
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Login className='center'/>,
          <Map className='center'/>
      </Col>
      </Row>

    </div>
  );
}

export default frontPage;
