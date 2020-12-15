import React, { useState, useEffect } from "react";

import Map from "../../components/map/map";
import Filters from "../../components/filters/filters";

import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Row, Col } from "reactstrap";


import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";
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
                        {wine.year} {wine.grape} {wine.PPG} | {wine.PPB}
                      </div>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Jumbotron>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}

