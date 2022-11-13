import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import NavContainer from "./navContainer.js";
import NavContainerTitleBox from "./navContainerTitleBox.js";
import HCenterBox from "../page/HCenter";
import VCenterBox from "../page/VCenter";

const Nav = ({ siteTitle, menuLinks }) => (
  <NavContainer>
    <NavContainerTitleBox>
      <VCenterBox>
        <h1>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </VCenterBox>
    </NavContainerTitleBox>
    <nav>
      <VCenterBox>
        <ul>
          {menuLinks.map((link) => (
              <HCenterBox>
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
              </HCenterBox>
            ))}
        </ul>
      </VCenterBox>
    </nav>
  </NavContainer>
);

Nav.propTypes = {
  siteTitle: PropTypes.string,
};

Nav.defaultProps = {
  siteTitle: ``,
};

export default Nav;
