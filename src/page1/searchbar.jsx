import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="search-bar1">
      <div className="search-bar">
        <div className="icon3">
          <IoMdSearch />
        </div>

        <input
          className="input"
          type="text"
          placeholder="Search for anything"
        />
     
        <select className="dropdown22">
          <option value="option1">All categories</option>
          <hr/>
          <option value="option2">Baby</option>
          <option value="option3">Perfumes</option>
          <option value="option2">Art</option>
          <option value="option3">Books</option>
          <option value="option2">Cameras&Photos</option>
          <option value="option3">Crafts</option>
          <option value="option2">Motorbikes</option>
          <option value="option3">Cycles</option>
          <option value="option2">Travels</option>
          <option value="option3">Video Games</option>
        </select>

      
     
      </div>
      
    </div>
  );
};

export default SearchBar;
