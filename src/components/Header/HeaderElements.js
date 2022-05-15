import { FaBars } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled(LinkRouter)`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item {
    margin-left: 1rem;
    border: 2px solid white;
    padding: 5px;
    border-radius: 5px;
    color: #fcbf49;
  }
  .menu-item:hover {
    color: #FFFFFF;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
align-items: center;
margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonResume = styled.nav`
  .buttonResume {
    margin-left: 1rem;
    border: 2px solid white;
    padding: 5px;
    border-radius: 5px;
    color: #fcbf49;
    font-size: 1.2rem;
    background-color: #f77f00;
  }

  .buttonResume:hover {
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
