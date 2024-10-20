// src/Dropdown.js
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
      </button>
      {isOpen && (
        <div className="dropdown-content66">
          <h3>Categories</h3>
          <ul>
            <li> Electronics</li>
            <li> Kitchen Items</li>
            <li> Clothes</li>
            <li> Perfumes</li>
            <li> Bikes</li>
            <li> Sporting Goods</li>
            <li> Home&Garden</li>
            <li> Fashions</li>
            <li> Musical instruments</li>
            <li> Cars</li>
            <li> Toys</li>
            <li> Guns</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
