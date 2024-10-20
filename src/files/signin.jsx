import React from "react";
import ebay from "../pics/images.png";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

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
        <button className="bn">
          Continue
        </button>
      </div>
      <div>
      <button className="bn">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
