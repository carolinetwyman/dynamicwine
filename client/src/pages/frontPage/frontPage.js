import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../components/map/map";
import Filters from "../../components/filters/filters";
// import List from "../../components/list/list";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Info from "../../components/information/information";
import "./frontPage.css";

export default function FrontPage() {
  const [wines, setWines] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [fullWineList, setFullWinesList] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadWines();
  }, []);

  // Loads all books and sets them to books
  function loadWines() {
    API.getWines()
      .then((res) => {
        setWines(res.data);
        setFullWinesList(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.wine_name && formObject.year) {
      API.saveWine({
        wine_name: formObject.wine_name,
        year: formObject.year,
      })
        .then(() =>
          setFormObject({
            wine_name: "",
            year: "",
          })
        )
        .then(() => loadWines())
        .catch((err) => console.log(err));
    }
  }
  
  return (
    <div className="body">
      <Row className="header componenets">
      <Col lg={8}></Col>
          {wines.length > 0 && (
            <Filters
              fullWineList={fullWineList}
              setWines={setWines}
              wines={wines}
              className="filters"
            />
          )}
       
      </Row>
      <Jumbotron fluid className="main">
        <Row>
          <Col lg={8}>
            <Jumbotron fluid className="map">
              <Map wineList={wines} />
            </Jumbotron>
          </Col>
          <Col lg={4}>
              {wines.length > 0 && (
                  <Filters
                    fullWineList={fullWineList}
                    setWines={setWines}
                    wines={wines}
                    className="filters"
                  />
                )}
            <Jumbotron fluid className="components">
              {wines.length ? (
                <List>
                  {wines.map((wine) => (
                    <ListItem key={wine._id} wine={wine}>
                      <Info wine={wine}> </Info>
                      <strong wine={wine}>
                        {wine.wine_name} "{wine.full_name}"
                      </strong>
                      <div>
                        {wine.year} {wine.grape}
                      </div>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="wine_name"
                placeholder="WineName"
                value={formObject.wine_name}
              />
              <Input
                onChange={handleInputChange}
                name="year"
                placeholder="Year"
                value={formObject.year}
              />
              <FormBtn
                disabled={!(formObject.wine_name && formObject.year)}
                onClick={handleFormSubmit}
              >
                Enter A Wine
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

//////////////// KEEP FOR JULIAN///////////////////////////////

// class frontPage extends Component {
//   state = {
//     categories: null
//   }

//   getChoices = (e) => {
//     e.preventDefault();
//     const category = e.target.elements.wineCategory.value;
//     axios.get(`https://quiniwine.com/api/pub/wineCategory/${category}/0/5?access_token=xbhysxe4p3gpeznr8kpn`)
//     .then((res) => {
//       const categories = res.data.items[0].Name + ", " + res.data.items[0].Winery + ", " + res.data.items[0].Country + ", " + res.data.items[0].id;
//       this.setState({ categories });
//       console.log(categories);
//       console.log(res);
//     })
//   }

//   render(){
//     return (
//       <div className="wine">
//       <Row>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <Login className='center'/>,
//           <Map className='center'/>
//         </Col>
//         <Col sm={{ size: 'auto', offset: 1 }}>
//           <CategoryChoice getChoices={this.getChoices} />
//           { this.state.categories ? <p>Wine info based off your selection: {this.state.categories}</p> : <p>Please select a category</p>}
//         </Col>
//       </Row>

//       </div>
//     );
//   }
// };

///////////////////////////////////////////////////////////////////
