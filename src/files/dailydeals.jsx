import React from 'react'
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import images from "../pics/images.png";
import Dropdown from "./dropdown";
import SearchBar from "../page1/searchbar";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Register all necessary elements with Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dailydeals = () => {
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Profit',
        data: [12, 19, 10, 15, 8, 13, 17, 9, 14, 10, 18, 11],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 0, // Removes dots on the line
        tension: 0 // Makes the line straight
      },
      {
        label: 'Revenue',
        data: [22, 29, 25, 30, 28, 33, 35, 27, 29, 32, 30, 35],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointRadius: 0, // Removes dots on the line
        tension: 0 // Makes the line straight
      },
      {
        label: 'Investment',
        data: [10, 15, 13, 12, 11, 14, 12, 16, 15, 14, 13, 15],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointRadius: 0, // Removes dots on the line
        tension: 0 // Makes the line straight
      }
    ]
  };

  // Configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Positions the legend at the bottom
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months'
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12
        }
      },
      y: {
        title: {
          display: true,
          text: 'Values'
        },
        grid: {
          display: true,
        },
      }
    }
  };
  return (
    <div>
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
            <a href="">
            <Link to="/register">
              register
              </Link>
              </a>
          </div>
        </div>
        <div className="navbar1div2">
          <a href="" className="div2a">
          <Link style={{textDecoration:'none',color:'black'}} to="/dailydeals">
            Daily Deals
            </Link>
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
        </div>
        <div style={{display:'flex',justifyContent:'center'}} >
        <Line style={{padding:'20px'}} data={data} options={options} />
        </div>
    </div>
  )
}

export default Dailydeals;