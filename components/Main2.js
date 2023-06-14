import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import {RevealWrapper} from 'next-reveal'


const BgMain = styled.div`
  margin-top:-50px;
  width: 100%;
  height: 90vh;
`;

const StyledDiv = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  background-color: rgba(0,0,0,.9);
  margin-top:-20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const DivImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity:0.4;
  
`;
const ButtonImg = styled.img`
  max-width: 300px;
  max-height: 300px;
  margin-top:20px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight:normal;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: center;
  /* text-color */
  color: #B6B6B6;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size:4rem;
  }
`;
const ContentWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  
  
`
const ContentWrapperImg = styled.div`
  width: 50%;
  
  //background-color: rgba(0,0,0,.9);
  
  color: white;
  //margin-top: 100px;
  @media screen and (max-width: 768px) {
    //display:none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonsLink = styled.button`
  padding: 5px 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poiret One', cursive;
  border-color: transparent;
  background-color:transparent;
  color: #B6B6B6;
  font-size: 60px;
`;




export default function Featured({}) {
  return ( 
   <BgMain>
      
        {/* <Center> */}
          <RevealWrapper origin={'left'} delay={0}>
          <Title>Місце краси та естетики</Title>
        <StyledDiv>
          <ContentWrapper>
            <ButtonImg src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/1.1.jpg"/>   
                <ButtonsWrapper>
                    <ButtonsLink href={'/products'}>До каталогу /</ButtonsLink>
                </ButtonsWrapper>
          </ContentWrapper>
        
        <ContentWrapperImg>
              <DivImg src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/DEFC46E3-E29F-48BF-BE0E-6E4F5DD7E9A4.gif"/>
            </ContentWrapperImg>
            </StyledDiv>
          </RevealWrapper>
          {/* </Center> */}
        
      </BgMain>
  );
}