import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import {RevealWrapper} from 'next-reveal'

const Bg = styled.div`
  position: relative;
  background-color: #191919;
  color:#fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:2rem;
  text-align: justify;
  color: #B6B6B6;
  
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
  max-width: 70%;
  text-align: justify;
  margin-bottom: 35px;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  img.main{
    max-width: 100%;
    max-height: 600px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
  div:nth-child(3) {
    display:none;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    & > div:nth-child(1) {
      order: 0;
    }
    div:nth-child(3) {
    display: block;
    }
    img{
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  //justify-content: center;
  gap:20px;
  margin-top:25px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const CenterImg = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  
`;

const ImgColumn = styled(Column)`
  & > div{
    width: 100%;
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  img:nth-child(1) {
    width:70%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImgColumnRight = styled(Column)`
  & > div{
    width: 100%;
  }
  
`;

const ContentWrapper = styled.div`
  

`;

export default function Featured({product}) {
  return ( 
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <RevealWrapper origin={'left'} delay={0}>
                <ContentWrapper>
                  <Title>{product.title}</Title>
                  <ButtonsWrapper>
                    <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Детальніше</ButtonLink>
                    <FlyingButton white={1} _id={product._id} src={product.images?.[0]}>
                      <CartIcon />
                      В корзину
                    </FlyingButton>
                  </ButtonsWrapper>
                </ContentWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <ImgColumn>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className={'main'} src={product.images?.[0]} alt="" />
              </CenterImg>
              <Desc>{product.description}</Desc>
            </RevealWrapper>
          </ImgColumn>
          <ImgColumnRight>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className={'main'} src={product.images?.[1]} alt=""/>
              </CenterImg>
            </RevealWrapper>
          </ImgColumnRight>
        </ColumnsWrapper>
      </Center>
     </Bg>
  );
}