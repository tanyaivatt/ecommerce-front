import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import { RevealWrapper } from 'next-reveal'



const BgMain = styled.div`
  width: 100%;
  height: 90vh;
`;

const BgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.9);
`;

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity:0.4;
`;

const Title = styled.h1`
  font-weight:normal;
  font-size:2rem;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-align: center;
  /* text-color */
  color: #b6b6b6;
  font-family: 'Poiret One', cursive;
  @media screen and (min-width: 768px) {
    font-size:3.5rem;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 100px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;




export default function Featured({}) {
  return ( 
   <BgMain>
      <BgOverlay>
        <BgImg src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/DEFC46E3-E29F-48BF-BE0E-6E4F5DD7E9A4.gif"/>
        {/* <Center> */}
        
        <ContentWrapper>
          <RevealWrapper origin={'left'} delay={0}>
                      <Title>Місце краси та естетики</Title>
                <ButtonsWrapper>
                    <ButtonLink href={'/categories'} outline={1} white={1}>ДО КАТАЛОГУ</ButtonLink>
          </ButtonsWrapper>
          </RevealWrapper>
          </ContentWrapper>
          
          {/* </Center> */}
        </BgOverlay>
      </BgMain>
  );
}