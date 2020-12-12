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
import { Input, FormBtn } from "../../components/Form"
//import NewWine from "../../components/NewWine"


export default function FrontPage() {

//setting our component's initial state
  const [wines, setWines] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setWines
  useEffect(() => {
    loadWines();
  }, []);

  // Loads all books and sets them to wines
  function loadWines() {
    API.getWines()
      .then((res) => setWines(res.data))
      .catch((err) => console.log(err));
  }

  //handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.wine_name && formObject.full_name) {
      API.saveWine({
        title: formObject.wine_name,
        author: formObject.full_name,
        synopsis: formObject.synopsis
      })
        .then(res => loadWines())
        .catch(err => console.log(err));
    }
  };




  return (
    <div className="body">
      <Row className="header componenets">
        <h2>Dynamic Wine</h2>
        <br />
        <Filters className="components" />
      </Row>
      <Jumbotron fluid className="main">
        <Row>
          <Col lg={8}>
            <Jumbotron fluid className="map">
              <Map />
            </Jumbotron>
          </Col>
          <Col lg={4}>
            <Jumbotron fluid className="components">
              {wines.length ? (
                <List>
                  {wines.map((wine) => (
                    <ListItem key={wine._id}>
                      <Link to={"/wines/" + wine._id}>
                        <strong>
                          {wine.wine_name} by {wine.full_name}
                          {wine.wine_name} {wine.variety}
                        </strong>
                      </Link>
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
                placeholder="Wine Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="variety"
                placeholder="Variety (required)"
              />
              <FormBtn
                disabled={!(formObject.wine_name && formObject.variety)}
                onClick={handleFormSubmit}
              >
                Submit Wine
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
