import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useEffect, useState, useLocation} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";
import CartIcon from "./icons/CartIcon";
import UserIcon from "./icons/UserIcon";
import { useRouter } from 'next/router';


const StyledHeader = styled.header`
  background-color: transparent;
  position:sticky;
  top:0;
  z-index:10;
`;

const Logo = styled(Link)`
  color:#B6B6B6;
  //margin-left: -80px;
  letter-spacing: 0.2em;
  font-size: 1.2rem;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
    height:110px;
    background-color: #191919;
      @media screen and (min-width: 768px) {
      background-color: transparent;
      }
  ` : `
    display: none;
    
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }

`;


const NavLink = styled(Link)`
  display: block;
  color: #B6B6B6;
  text-decoration:none;
  min-width:30px;
  padding: 10px 0;
  svg{
    height:20px;
  }
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: #B6B6B6;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a{
    display:inline-block;
    min-width:30px;
    color: #B6B6B6;
    text-decoration: none;
    svg{
      width:17px;
      height:17px;
    }
  }
  span{
    font-size:.6rem;
  }

`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const [colorChange, setColorChange] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;


  const changeBackground = () => {
    if (window.scrollY >= 60 ){
      setColorChange(true);
    }
    else {
      setColorChange(false);
    };
  }

  useEffect(() => {
    if (currentRoute != "/") {
      setColorChange(true);
    }
    else {
      window.addEventListener('scroll', changeBackground);
    }
    
  }, []);

  return (
    <StyledHeader className={colorChange ? "navbar colorChange" : "navbar"}>
      <Center>
        <Wrapper>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Головна</NavLink>
            <NavLink href={'/products'}>Всі товари</NavLink>
            <NavLink href={'/categories'}>Каталог</NavLink>
          </StyledNav>
          <Logo href={'/'}>G Y H</Logo>
          <SideIcons>
            <Link href={'/search'}><SearchIcon /></Link>
            <Link href={'/account'}><UserIcon/></Link>
            <Link href={'/cart'}><CartIcon/><span>({cartProducts.length})</span></Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
          
         
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}