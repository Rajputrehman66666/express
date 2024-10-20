import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import Signin from "../files/signin";
import Navbar2 from "./navbar2";
import Navbar3 from "./navbar3";
import UncontrolledExample from "./carousel";
import Roundbuttons from "./roundbuttons";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";


const Front = () => {
  return (
    <div>
    <div className="navbar1">
      <div className="navbar1div">
        <div className="navbar1div1">
          <div> Hi!</div>
          <div>
            {" "}
            <a href="">
              <Link to="/signin">
              Sign in
              </Link>
             </a>
          </div>
          <div>or</div>
          <div>
            {" "}
            <a href="">register</a>
          </div>
        </div>
        <div className="navbar1div2">
          <a href="" className="div2a">
            Daily Deals
          </a>  
        </div>
        <div className="navbar1div3">
          <a href="" className="div2a">
            Help&Contact
          </a>
        </div>
      </div>
      <div className="navbar1cl2">
        <div className="div3">
          <a href="" className="">
            Ship to
          </a>
        </div>
        <div className="div2">
          <a href="" className="">
            Sell
          </a>
        </div>
        <div className="dropdown1">
          <div class="dropdown">
            <button class="dropbtn">
              Watchlist <RiArrowDropDownLine />
            </button>
            <div class="dropdown-content">
              <a href="#">movies</a>
              <a href="#">daramas</a>
              <a href="#">tv shows</a>
              <a href="#">behind the scenes</a>
              <a href="#">trailers</a>
              <a href="#">new movies dates</a>
            </div>
          </div>
        </div>
        <div className="dropdown1">
          <div class="dropdown">
            <button class="dropbtn">
              My eBay <RiArrowDropDownLine />
            </button>
            <div class="dropdown-content">
              <a href="#">summary</a>
              <a href="#">recently review</a>
              <a href="#">discounts</a>
              <a href="#">watchlist</a>
              <a href="#">purchase history</a>
              <a href="#">buy again</a>
            </div>
          </div>
        </div>
        <div className="icon1">
          <a href="">
            <FaRegBell />
          </a>
        </div>
        <div className="icon1">
          <a href="">
            <LuShoppingCart />
          </a>
        </div>
      </div>
      
    </div>
    <Navbar2/>
    <Navbar3/>
    <UncontrolledExample/>
    <Roundbuttons/>
    <Page3/>
    <Page4/>
    <Page5/>
    </div>
  );
};

export default Front;
