import React from "react";
import ebay from "../pics/images.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Applee from "../pics/applee.png";
import Facebook from "../pics/1.png";
import Google from "../pics/google.png";
import svg from "../pics/tick.svg";
import svg1 from"../pics/tick.svg"
import svg2 from"../pics/cross.svg"
const Signin = () => {
  return (
    <div>
      <div className="tellus">
        <h6>Tell us what you think</h6>
      </div>
      <div>
        <img className="ebay" src={ebay} alt="" />
      </div>
      <div className="hello">Hello</div>
      <div className="in">
        <p>Sign in to eBay or </p>
        <Link>create an account</Link>
      </div>
      <div className="form">
        <Form.Control
          className="form2"
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
      </div>
      <div className="bnn">
        <button className="bn">Continue</button>
      </div>
      <div className="line">
        <div>
          {" "}
          <hr
            style={{
              width: "150px",
              backgroundColor: "black",
              height: 1,
            }}
          />
        </div>{" "}
        <div
          style={{ marginTop: "1px", marginLeft: "5px", marginRight: "5px" }}
        >
          or{" "}
        </div>
        <div>
          {" "}
          <hr
            style={{
              width: "150px",
              backgroundColor: "grey",
              height: 1,
            }}
          />
        </div>
      </div>
      <div className="bnb">
        <button className="bn1">
          {" "}
          <img
            src={Google}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "8px",
              marginLeft: "5px",
            }}
          />{" "}
          <div className="apple"> Continue with Google</div>{" "}
        </button>
      </div>
      <div className="bnb">
        <button className="bn1">
          <img
            src={Facebook}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "8px",
              marginLeft: "5px",
            }}
          />{" "}
          <div className="apple">Continue with Facebook</div>
        </button>
      </div>
      <div className="bnb">
        <button className="bn1">
          {" "}
          <img
            src={Applee}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "8px",
              marginLeft: "5px",
            }}
          />{" "}
          <div className="apple"> Continue with Apple</div>
        </button>
      </div>
      <div className="last">
        <input type="checkbox" style={{marginRight:"5px"}} />
        <div>Stay signed in</div>
        <div>
         <img src={svg} style={{width:"14px",height:"14px",marginLeft:"5px"}} />
        </div>
      </div>
      <hr/>
      <div className="p1">
    <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Consumer Health Data, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices <img className="small" src={svg2}  />and AdChoice <img src={svg1} className="svg" /></p>
  </div>
    </div>
  );
};

export default Signin;
