import React from "react";
import images from "../pics/images.png";
import Dropdown from "./dropdown";
import SearchBar from "./searchbar";

const Navbar2 = () => {
  return (
    <div>
      <div className="navbar2">
        <div>
          <img className="image1" src={images} alt="" />
        </div>
        <div className=" written">
          Shop by 
          <br></br>
          Category
        </div>
        <div className="dropdownrrr"> <Dropdown/></div>
        <div><SearchBar/></div>
        <div >
          <button className="button56">Search</button>
        </div>
        <div>
          <button className="button66">Advanced</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
