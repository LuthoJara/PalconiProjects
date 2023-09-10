//Importing for the sticky menu
import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

///Routes for the react app
import { Link, useLocation} from "react-router-dom";

//Importing the logo
import Palconi from "../images/Palconi.png";
 
const Container = styled.div`
  height: auto;
  background-color: #ffffff;
  padding-bottom: 5px;

  //Making the menu sticky
  position: relative;
` 
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;

//Making the menu sticky
  height: ${props => props.sticky ? "5rem" : "8rem"};
  padding: ${props => props.sticky ? "0px 10px" : "20px 40px"};
  position: ${props => props.sticky ? "fixed" : "relative"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`
const MenuItem = styled(Link)`
  font-size: 1.4rem;
  width: auto;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
  padding-right: 15px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Logo = styled.img`
  height: auto;
  width: 10vw;
  cursor: pointer;
`
const Right = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const { pathname } = useLocation();
  const excludedPaths = useMemo(() => ["/Login", "/CreateAccount", "/ContactUs"], []);

useEffect(() => {
  // Reset scroll position on page load
  window.scrollTo(0, 0);

  const handleScroll = () => {
    if (window.scrollY > 100 && !excludedPaths.includes(pathname)) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [excludedPaths, pathname, setSticky]);

// Making the navbar links dropdowns
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  // setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <Container>
      <Wrapper sticky={isSticky}>
        <Left>
          <MenuItem to="/">
            <Logo src={Palconi} />
          </MenuItem>
        </Left>
        <Right>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/AboutUs">About Us</MenuItem>
          <MenuItem to="/Responsibility">Social Responsibility</MenuItem>
          <MenuItem to="/Projects">Projects</MenuItem>
          <MenuItem to="/News">News</MenuItem>
          <MenuItem to="/Downloads">Downloads</MenuItem>
          <MenuItem to="/ContactUs">Contact Us</MenuItem>
                  
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;