import styled from "styled-components";
import Center from "@/components/Center";
import Image from "next/image"

const WrapperFooterRect = styled.div`
  align-self: center;
`;

const FooterRect = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
   @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
`;

const Bg = styled.div`
  background-image: url("https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/backgr.jpg");
  background-size: cover;
  height: 800px;
  //background-color: #121212;
  color:#fff;
  //margin-top: -60px;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts() {
  
  return (
<Bg>
    <Center>
    <Title>New</Title>
        <WrapperFooterRect>
            <FooterRect>
                  <img src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/footer_rect1.svg"/>
              
                  <img src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/footer_rect2.svg"/>
              
                  <img src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/footer_rect3.svg"/>
            </FooterRect>
        </WrapperFooterRect>
      </Center>
     </Bg>
  );
}