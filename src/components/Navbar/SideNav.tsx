import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.ul`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  list-style: none;
  box-sizing: border-box;
  padding: 0px;
  margin: 0;
  border: 1px solid ${props => props.theme.color.gray[4]};
  border-collapse: collapse;
  border-radius: 5px;
  a {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.theme.color.gray[5]};
    &:hover {
      color: #fff;
    }
  }
  li {
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.color.gray[4]};
    &:hover {
      background-color: ${props => props.theme.color.gray[4]};
      color: white;
    }
  }
  li:last-child {
    border-bottom: none;
  }
`;

interface Route {
  name: string;
  path: string;
}

interface Props {
  routes: Route[];
}

const SideNav: React.FC<Props> = ({ routes }) => {
  return (
    <NavBar>
      {routes.map(route => (
        <li key={route.name}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </li>
      ))}
    </NavBar>
  );
};

export default SideNav;
