import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarWrapper,
  NavbarContent,
  HamburgerMenu,
  MenuDrawer,
  MenuItem,
  LogoText,
  NavbarLinks,
} from '../wrappers/navbar';

const Navbar = () => {
  const navigate = useNavigate();
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuDrawerHandler = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarWrapper isScrolled={isScrolled}>
      <NavbarContent>
        <HamburgerMenu onClick={menuDrawerHandler}>
          {hamburgerMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </HamburgerMenu>

        <MenuDrawer hamburgerMenu={hamburgerMenu}>
          <ul className="mt-16 flex flex-col gap-4 text-white px-6">
            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => navigate("/products")}>About</MenuItem>
            <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
          </ul>
        </MenuDrawer>

        <LogoText>
          Rushikesh Vadnal
        </LogoText>

        <NavbarLinks>
          <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
          <MenuItem onClick={() => navigate("/products")}>About</MenuItem>
          <MenuItem onClick={() => navigate("/contact")}>Contact</MenuItem>
        </NavbarLinks>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
