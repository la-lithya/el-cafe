import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ROUTES as ROUTES, MAIN } from "../../constants/routes";
import styles from 'styled-components';

const Nav = styles.div`
  display: flex;
  background-color: lightgray;
  margin: 0;
`;

const NavList = styles.ul`
  display: flex;
  justify-content: space-between;
`;

const NavListItems = styles.li`
  list-style: none;
  margin: 0 5px;
  text-transform: uppercase;
  font-size: 12px;
`;

const NavBrand = styles.span`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 20px;
`;


const Navigation = () => (
  <Nav>
    <NavBrand><Link to={MAIN}>El Cafe</Link></NavBrand>
    <NavList>
      {ROUTES.map((link, index) => {
        return (<NavListItems key={index}>
          <Link to={link.link}>{link.linkName}</Link>
        </NavListItems>)
      })}
    </NavList>
  </Nav>
);

export default Navigation;