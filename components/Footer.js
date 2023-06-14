import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";

const StyledFooter = styled.footer`
  //background-image: url("https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/backgr.jpg");
  //background-size: cover;
  background-color: #191919;
  color: #B6B6B6;
  padding-bottom: 10px;
  top:0;
  z-index:10;
`;

const StyledFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  //padding: 20px 0;
  
`;

const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & > div:nth-child(1) {
    align-items: flex-start;
  };
  & >  div:nth-child(2) {
    align-items: center;
  };
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #5D4136;
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

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
          <StyledGrid>
            <StyledFooterDiv>
            <p>Контакти: </p>  
            <FooterLink href={'/'}>+380966604498</FooterLink>
                      
            <p>Магазин в Instagram:</p>
            <FooterLink href={'/'}>@gyh.accesories</FooterLink>
           
            
            </StyledFooterDiv>
                      
            <StyledFooterDiv>
            <p>© 2021-2023. GYH</p>  
            </StyledFooterDiv>
                      
            <StyledFooterDiv>
            <Logo href={'/'}>G Y H</Logo>  
            <p>Designed by Tanya Ivat</p>
            {/* <FooterLink href={'/'}>Home</FooterLink> */}
            </StyledFooterDiv>
          </StyledGrid>
      </Center>
    </StyledFooter>
  );
}