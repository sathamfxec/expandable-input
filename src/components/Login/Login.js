import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    uname: '',
    pwd: ''
  });
  const navigate = useNavigate();
  /**
   * Method to handle form submit
   * @param {*} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    if(formData.uname === 'admin@gmail.com' && formData.pwd === 'admin') {
      console.log(formData);
      // navigate('/test');
    }
  };
  /**
   * Method to handle onChange
   */
  const handleInput = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  }
  return (
    <React.Fragment>
      <div className="Login">
        <div className="container mt-5">
          <div className="row justify-content-between">
            <div className="imgDiv col-lg-6 col-md-6 col-sm-12">
              <img
                src="https://yt3.ggpht.com/ytc/AKedOLQZlNQqTwgU8uQNB44lB7K55G0XQkmlB6xZx6SI=s900-c-k-c0x00ffffff-no-rj"
                alt="Alt Text"
              />
            </div>
            <div className="formDiv col-lg-3 col-md-3 col-sm-12">
              <form onSubmit={handleSubmit} className="p-3">
                <div className="mb-3">
                  <label htmlFor="uname" className="form-label">Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="uname"
                    value={formData.uname}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="pwd"
                    value={formData.pwd}
                    onChange={handleInput}
                  />
                </div>
                <div className="mb-3 txtRight">
                  <button className="btn btn-success" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
