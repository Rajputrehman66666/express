import React, { useState } from "react";

function CountryDropdown() {
  const [countries] = useState([
    "USA",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "India",
    "China",
    "Australia"
  ]);
  
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      
      <br />
      <select id="country"style={{width:'420px', height:'45px',marginLeft:'80px', color:'lightgray',justifyContent:'center'}} value={selectedCountry} onChange={handleCountryChange}>
        <option value="" >Where is your business registered?</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <br />
   
    </div>
  );
}

export default CountryDropdown;
