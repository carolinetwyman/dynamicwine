import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./filters.css";


export default function Filters(){

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            Dropdown
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>White</DropdownItem>
            <DropdownItem>Rose</DropdownItem>
            <DropdownItem>Red</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    
}