import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, NavBar } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] =useState(false)
  return (
    <NavBar>
      <Logo to="/home" onClick={()=>setOpen(false)}>RECIPE<span>BOOK</span></Logo>
      <Hamburger> <GiHamburgerMenu onClick={()=> setOpen(!open)}/> </Hamburger>
      <Menu osman={open}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/Yunusplt" target='blank' >Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </NavBar>
  );
}

export default Navbar