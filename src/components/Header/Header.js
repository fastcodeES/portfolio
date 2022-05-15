import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, ButtonResume } from "./HeaderElements";
import LogoImage from "../../Assets/images/vector/isolated-monochrome-white.svg";

import {
  Image
} from "../Hero/HeroElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <Image src={LogoImage} alt="man-svgrepo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Proyectos
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Sobre mi
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contacto
          </NavLink>
        </NavMenu>
        <ButtonResume>
          <a
            className="buttonResume"
            href="https://github.com/fastcodeES/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </ButtonResume>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
