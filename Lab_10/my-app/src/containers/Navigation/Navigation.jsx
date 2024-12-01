import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper } from './Navigation.styled';

const Navigation = () => (
  <NavWrapper>
    <ul>
      <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li><NavLink to="/catalog" className={({ isActive }) => isActive ? "active" : ""}>Catalog</NavLink></li>
      <li><NavLink to="/cart" className={({ isActive }) => isActive ? "active" : ""}>Cart</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
    </ul>
  </NavWrapper>
);

export default Navigation;
