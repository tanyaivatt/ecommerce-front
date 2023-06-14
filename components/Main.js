import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import {RevealWrapper} from 'next-reveal'
import Link from "next/link";

const BgOrig = styled.div`
  width: 100%;
  height: 90vh;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Title = styled.h1`
  font-weight:normal;
  font-size:3rem;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    font-size:4rem;
  }
`;
const Desc = styled.p`
  color:#B6B6B6;
  font-size:1.2rem;
  margin-bottom: 50px;
`;
const ContentWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  color: white;

`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDown = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -100px;
  color:#aaa;
`;

const SocialLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
`;



export default function Featured({product}) {
  return ( 
   <BgOrig>
      <Bg>
        <img src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/bg_main_orig.jpg"/>
          <Center>
            <ContentWrapper>
            <RevealWrapper origin={'left'} delay={0}>
                    <div>
                      <Desc>Онлайн-шоурум 
                        <br/>з широким асортиментом
                        <br/>ювелірних виробів</Desc>
                      <Title>Місце
                        <br />краси та естетики</Title>
                    </div>
                        <MainDown>
                          <p>Проскроль</p>
                          <p><SocialLink href="/">Instagram</SocialLink></p>  
                          
                        </MainDown>
                </RevealWrapper>
            </ContentWrapper>
          </Center>
        </Bg>
      </BgOrig>
  );
}