import React, { Component } from "react";
import axios from "axios";
import "./frontPage.css";
import Map from "../../components/map/map";
import Login from "../../components/login/login";
import CategoryChoice from "../../components/wine-categories/category-choice";


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
      <div>
        <Login />,
        <Map />
        <CategoryChoice getChoices={this.getChoices} />
        { this.state.categories ? <p>Wine info based off your selection: {this.state.categories}</p> : <p>Please select a category</p>}
      </div>
    );
  }
};

export default frontPage;