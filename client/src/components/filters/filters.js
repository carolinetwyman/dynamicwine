import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./filters.css";


export default function Filters({setWines, fullWineList}){
  // const wines = props.wines
  // const setWines = props.setWines
  // const fullWineList = props.fullWineList
  // const {setWines, fullWineList}
  const handleClick = event => {
    const color = event.target.id;
    setWines(()=>{
      var filteredWines = fullWineList.filter((wine)=>{
        return wine.color === color
      })
      return filteredWines
    })
  };



    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    const handleChange= e => console.log("e.target.val",e.target.value)
    
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} onChange={handleChange}>
          <DropdownToggle caret>
            Dropdown
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem id="White" onClick={handleClick} >White</DropdownItem>
            <DropdownItem id="Rose" onClick={handleClick} >Rose</DropdownItem>
            <DropdownItem id="Red" onClick={handleClick} >Red</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    
}