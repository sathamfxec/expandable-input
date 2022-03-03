import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = () => (
  <React.Fragment>
    <footer className="flex-ai flex-jc" data-testid="Footer">
      <label>
        Copyright <span>&#169;</span> Satham Hussain
      </label>
    </footer>
  </React.Fragment>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
