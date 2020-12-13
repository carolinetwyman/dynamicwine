import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./filters.css";

export default function Filters({ setWines, fullWineList }) {
  const [color, setColor] = useState("Color");
  const [country, setCountry] = useState("Country");
 

  const handleClick = (event) => {
    const color = event.target.id;
    setWines(() => {
      var filteredWines = fullWineList.filter((wine) => {
        return wine.color === color;
      });
      return filteredWines;
    });
    setColor(event.target.id);
  };

  const handleClickCountry = (event) => {
    const country = event.target.id;
    setWines(() => {
      var filteredWinesCountry = fullWineList.filter((wine) => {
        return wine.country === country;
      });
      return filteredWinesCountry;
    });
    setCountry(event.target.id);
  };

  const handleReset = () => {
   
      return fullWineList;
  }

 

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenCountry, setDropdownOpenCountry] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleCountry = () => setDropdownOpenCountry((prevState) => !prevState);

  const handleChange = (e) => console.log("e.target.val", e.target.value);
  const handleChangeCountry = (e) =>
    console.log("e.target.val", e.target.value);

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        onChange={handleChange}
        inline
      >
        <DropdownToggle className="button" caret>
          {color}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="White" onClick={handleClick}>
            White
          </DropdownItem>
          <DropdownItem id="Rose" onClick={handleClick}>
            Rose
          </DropdownItem>
          <DropdownItem id="Red" onClick={handleClick}>
            Red
          </DropdownItem>

        </DropdownMenu>
      </Dropdown>

      <Dropdown
        isOpen={dropdownOpenCountry}
        toggle={toggleCountry}
        onChange={handleChangeCountry}
        inline
      >
        <DropdownToggle className="button" caret>
          {country}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="Canada" onClick={handleClickCountry}>
            Canada
          </DropdownItem>
          <DropdownItem id="France" onClick={handleClickCountry}>
            France
          </DropdownItem>
          <DropdownItem id="Germany" onClick={handleClickCountry}>
            Germany
          </DropdownItem>
          <DropdownItem id="Greece" onClick={handleClickCountry}>
            Greece
          </DropdownItem>
          <DropdownItem id="Italy" onClick={handleClickCountry}>
            Italy
          </DropdownItem>
          <DropdownItem id="New Zealand" onClick={handleClickCountry}>
            New Zealand
          </DropdownItem>
          <DropdownItem id="Portugal" onClick={handleClickCountry}>
            Portugal
          </DropdownItem>
          <DropdownItem id="Spain" onClick={handleClickCountry}>
            Spain
          </DropdownItem>
          <DropdownItem id="USA" onClick={handleClickCountry}>
            USA
          </DropdownItem>
        </DropdownMenu>
       
      </Dropdown>
      
      <Button inline className="reset" onClick={handleReset}>Reset</Button>
    </>
  );
}
