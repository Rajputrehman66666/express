import React from "react";
import ebay from "../pics/images.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Facebook from "../pics/1.png";
import Applee from "../pics/applee.png";
import Google from "../pics/google.png";
import { color } from "framer-motion";
import personal from "../pics/personal.jpg";
import business from "../pics/business.jpg";
import CountryDropdown from "./dropdown";
import svg1 from"../pics/tick.svg"
import svg2 from"../pics/cross.svg"
const Register = () => {
  const [accountType, setAccountType] = useState("personal");
  const [activeButton, setActiveButton] = useState("personal");
  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    setActiveButton(type);
  };

  return (
    <div>
      <div className="eaby33">
        <div>
          <img className="ebay" src={ebay} alt="" />
        </div>

        <div className="sign">
          <div className="an">Already have an account?</div>
          <Link className="anchor" to="/signin">
            Sign in
          </Link>
        </div>
      </div>
      <div className="">
        <div className="registration-container1">
          <div className="image-container33">
            {accountType === "personal" ? (
              <img style={{borderRadius:'10px'}} src={personal} alt="Personal" />
            ) : (
              <img style={{borderRadius:'10px'}} src={business} alt="Business" />
            )}
          </div>
          <div className="form-container45">
            <h2 className="hgh">Create an Account</h2>
            <div className="account-buttons32">
              <div>
              <button
                className="bbb56"
                onClick={() => handleAccountTypeChange("personal")}
                style={{
                  backgroundColor:
                    activeButton === "personal" ? "black" : "white",
                  color: activeButton === "personal" ? "white" : "black",
                }}
              >
                Personal
              </button>

              </div>
              <div>
              <button
              className="bbb56"
                onClick={() => handleAccountTypeChange("business")}
                style={{
                  backgroundColor:
                    activeButton === "business" ? "black" : "white",
                  color: activeButton === "business" ? "white" : "black",
                }}
              >
                Business
              </button>
                
              </div>
             
            </div>
            {accountType === "personal" ? (
              <form>
                <div
                  style={{
                    width: "420px",
                    marginLeft: "80px",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    style={{
                      backgroundColor: "#e8e8e8",
                      width: "190px",
                      marginRight: "30px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    style={{
                      backgroundColor: "#e8e8e8",
                      width: "190px",
                      marginLeft: "10px",
                    }}
                  />
                </div>
                <div style={{ display: "flex ", flexDirection: "column" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    style={{ width: "420px", marginLeft: "80px" }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    style={{ width: "420px", marginLeft: "80px" }}
                  />
                  <p
                    style={{
                      fontSize: "small",
                      color: "lightslategray",
                      marginLeft: "80px",
                    }}
                  >
                    By selecting{" "}
                    <span style={{ color: "black" }}>
                      {" "}
                      Create personal account,
                    </span>{" "}
                    you agree to our{" "}
                    <span style={{ textDecoration: "underline" }}>
                      User Agreement
                    </span>{" "}
                    <br />
                    and acknowledge reading our{" "}
                    <span style={{ textDecoration: "underline" }}>
                      User Privacy Notice.
                    </span>{" "}
                  </p>
                  <button
                    className="bbb56"
                    type="submit"
                    style={{
                      width: "420px",
                      height: "40px",
                      marginLeft: "80px",
                    }}
                  >
                    Create personal account{" "}
                  </button>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "90px",
                      marginTop: "10px",
                    }}
                  >
                    <hr
                      style={{
                        width: "150px",
                        backgroundColor: "black",
                        height: 1,
                        marginRight: "6px",
                      }}
                    />
                    <div style={{ fontSize: "small", marginTop: "6px" }}>
                      or continue with
                    </div>
                    <hr
                      style={{
                        width: "150px",
                        backgroundColor: "black",
                        height: 1,
                        marginLeft: "6px",
                      }}
                    />
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginLeft:'60px'}}>
                <div>
        <button   className="bbb56" style={{width:'150px',height:'40px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
          {" "}
          <img
            src={Google}
            style={{
              width: "17px",
              height: "17px",
              marginTop:'12px',
              marginRight:'3PX'
             
            }}
          />{" "}
          <div style={{fontWeight:'bold',fontSize:'large',marginTop:'8px'}}> Google</div>{" "}
        </button>
      </div>
      <div>
        <button   className="bbb56" style={{width:'150px',height:'40px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
          <img
            src={Facebook}
            style={{
              width: "20px",
              height: "20px",
              marginTop:'11px',
              marginRight:'3PX'
            }}
          />{" "}
          <div style={{fontWeight:'bold',fontSize:'large',marginTop:'8px'}}> Facebook</div>
        </button>
      </div>
      <div >
        <button   className="bbb56" style={{width:'150px',height:'40px',display:'flex',flexDirection:'row',justifyContent:'center'}}>
          {" "}
          <img
            src={Applee}
            style={{
              width: "20px",
              height: "20px",
              marginTop:'10px',
              marginRight:'3PX'
            }}
          />{" "}
          <div style={{fontWeight:'bold',fontSize:'large',marginTop:'8px'}}>  Apple</div>
        </button>
      </div>
                </div>
              </form>
            ) : (
              <form>
                <p style={{fontSize:'small',marginLeft:'90px'}}>
                Continue to register as <span style={{fontWeight:'bold'}}>business or nonprofit,</span>  or if you plan to <br />
                 sell a large number of goods.
                </p>
                <input type="email" placeholder="Business name" required style={{ width: "420px", marginLeft: "80px" }}/>
                <input type="email" placeholder="Business Email" required style={{ width: "420px", marginLeft: "80px" }} />
                <input type="password" placeholder="Password" required style={{ width: "420px", marginLeft: "80px" }} />
                <div>
                <select id="countries" style={{ width: "420px", marginLeft: "80px" ,height:'45px',borderRadius:'5px' }} >
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="Australia">Australia</option>
      
    </select></div>
                <p style={{fontSize:'small',marginLeft:'80px',}}>If your business isn't registered, select your country of residence.</p>
                <div style={{display:'flex' , flexDirection:'row',marginLeft:'80px'}}>
                  <input style={{width:'20px',height:'20px',marginRight:'10px'}} type="checkbox" />  <p style={{marginTop:'7px'}}>I’m only interested in buying on eBay for now</p>
                </div>
                <p
                    style={{
                      fontSize: "small",
                      color: "lightslategray",
                      marginLeft: "80px",
                    }}
                  >
                    By selecting{" "}
                    <span style={{ color: "black" }}>
                      {" "}
                      Create personal account,
                    </span>{" "}
                    you agree to our{" "}
                    <span style={{ textDecoration: "underline" }}>
                      User Agreement
                    </span>{" "}
                    <br />
                    and acknowledge reading our{" "}
                    <span style={{ textDecoration: "underline" }}>
                      User Privacy Notice.
                    </span>{" "}
                  </p>
                  <button
                    className="bbb56"
                    type="submit"
                    style={{
                      width: "420px",
                      height: "40px",
                      marginLeft: "80px",
                    }}
                  >
                    Create business account{" "}
                  </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div>
    
   <div className="p1" style={{
    
   }}>
    <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Consumer Health Data, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices <img className="small" src={svg2}  />and AdChoice <img src={svg1} className="svg" /></p>
  </div>
      </div>
    </div>
  );
};

export default Register;
