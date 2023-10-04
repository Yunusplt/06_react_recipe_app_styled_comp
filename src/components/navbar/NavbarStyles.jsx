import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
background: salmon;
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
border-radius: 0 0 10px 10px;
height: 76px;
font-size: 2rem;

@media (max-width: 768px) {
    padding: 0;
}
`;

export const MenuLink = styled(Link)`
  background-color: green;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 90%;
  }
`;

export const Menu = styled.div`
  background: #e1f1dd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    height: 200px;
    display: ${({ osman }) => (osman ? "flex" : "none")};
  }

  a {
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #02475e;
    transition: all 0.3s ease-in;
    font-size: 2rem;
    font-family: "Girassol", sans-serif;
    &:hover {
      color: #00adb5;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
      border: 1px solid #00adb5;
      border-radius: 10px;
      width: 91%;
    }
  }
`;

export const Logo = styled(MenuLink)`
background-color: gray;
padding: 1rem 3rem;
color: #393e46;
font-weight: 800;

span{
  color: whitesmoke;
}

`;

export const Hamburger = styled.div`
display: none;
cursor: pointer;
@media (max-width: 768px) {
    display: flex;
    width: 9%;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0;
}
`;