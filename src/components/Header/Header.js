import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <header className="Header flex-ai" data-testid="Header">
        <nav className="col-sm-12">
          <ul className="navUl flex-sb">
            {/* <li className="logo">
              <img src="https://cdn.sick.com/media/ZOOM/2/82/782/IM0077782.png" />
            </li> */}
            {/* {selector || isAuth === "true" ? (
              <li className="logOut">
                <label onClick={() => logout()}>Logout</label>
              </li>
            ) : (
              ""
            )} */}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
