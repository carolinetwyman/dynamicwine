import React, { Component } from "react";
import axios from "axios";
import "./frontPage.css";
import Map from "../../components/map/map";
import Login from "../../components/login/login";
import CategoryChoice from "../../components/wine-categories/category-choice";
import { Button, Container, Row, Col } from 'reactstrap';


class frontPage extends Component {
  state = {
    categories: null
  }

  getChoices = (e) => {
    e.preventDefault();
    const category = e.target.elements.wineCategory.value;
    axios.get(`https://quiniwine.com/api/pub/wineCategory/${category}/0/5?access_token=xbhysxe4p3gpeznr8kpn`)
    .then((res) => {
      const categories = res.data.items[0].Name + ", " + res.data.items[0].Winery + ", " + res.data.items[0].Country + ", " + res.data.items[0].id;
      this.setState({ categories });
      console.log(categories);
      console.log(res);
    })
  }

  render(){
    return (
      <div className="wine">
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Login className='center'/>,
          <Map className='center'/>
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <CategoryChoice getChoices={this.getChoices} />
          { this.state.categories ? <p>Wine info based off your selection: {this.state.categories}</p> : <p>Please select a category</p>}
        </Col>
      </Row>
        
      </div>
    );
  }
};

export default frontPage;
