import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./signup.css";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formData, setData] = useState(initialData);

  //handle user input
  const handleInputChange = (e) => {
    const { name, value } = e.target; //to extract name and value attributes from our input fields

    //updating our state values with existing values
    setData({
      ...formData,
      [name]: value, //setting the dynamic name property from our inputs and equating it to current input state
    });
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setData(initialData);
  };

  return (
    <div className="sign-up__page">
      <div className="sign-up__form">
        <h2>Create an Account</h2>
        <p>
          Already have an account? <span>Sign In</span>
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="names">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <button className="button" type="submit">
            <Link className="link" to="/landing">
              Sign Up
            </Link>
          </button>
        </form>
        <div className="terms">
          <input type="checkbox" />
          <p>
            I have read all the <span>Terms of service</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
