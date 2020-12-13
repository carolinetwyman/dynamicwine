import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "../../components/map/map";
import Filters from "../../components/filters/filters";
// import List from "../../components/list/list";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col } from "reactstrap";
import "./frontPage.css";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Input } from "../../components/Form";
import Info from "../../components/information/information";

export default function FrontPage() {
  const [wineList, setWineList] = useState([
    {
      name: "Menti",
      vintage: 2018,
      address:
        "UFFICI /HEADQUARTER, via Dr. Bruzzo, 24, 36053 Gambellara VI, Italy",
    },
    {
      name: "Raventos i Blanc",
      vintage: 2017,
      address:
        "Plaça del Roure, S/N, 08770 Sant Sadurní d'Anoia, Barcelona, Spain",
      // coords: { lat: 41.4263208, lng: 1.7845831 }
    },
  ]);

  const [wines, setWines] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadWines();
  }, []);

  // Loads all books and sets them to books
  function loadWines() {
    API.getWines()
      .then((res) => setWines(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <div className="body">
      <Row className="header componenets">
        <h2>Silly Wine</h2>
        <br />
        <Filters wines={wines} className="components" />
      </Row>
      <Jumbotron fluid className="main">
        <Row>
          <Col lg={8}>
            <Jumbotron fluid className="map">
              <Map wineList={wines} />
            </Jumbotron>
          </Col>
          <Col lg={4}>
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
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
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