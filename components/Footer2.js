import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import Insta from "@/components/icons/Insta";
import Mail from "@/components/icons/Mail";
import Telephone from "@/components/icons/Telephone";


const FooterContainer = styled.footer`
  background-color: #191919;
  padding: 24px;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  text-align: center;

  // & > div:nth-child(2){
  //   order: 2;
  // }
  p{
    color: #B6B6B6;
    font-size:.9rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;

    & > div:nth-child(2){
    order: 0;
    }
  }
`;

const Logo = styled(Link)`
  color:#B6B6B6;
  letter-spacing: 0.2em;
  font-size: 1.2rem;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;

const MessageLink = styled.a`
  color: #B6B6B6;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
  svg{
    height:20px;
    }
  &:hover {
    text-decoration: underline;
  }
  // &:nth-child(3){
  //   order: 3;
  // }
`;

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: .5px solid #B6B6B6;

  & > p{
    color:#B6B6B6;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Center>
        <FlexContainer>
          <div>
            <p>
              <Logo href={'/'}>G Y H</Logo>
            </p>
          </div>
          <div>
            <MessageLink>
              <Insta />
            </MessageLink>
            <MessageLink>
              <Telephone />
            </MessageLink>
            <MessageLink href="mailto:your-email@example.com">
              <Mail/>
            </MessageLink>
          </div>
          <div>
            <p>
              Designed by Tanya Ivat
            </p>
          </div>
        </FlexContainer>
        <YearContainer>
            <p>© 2021-2023. GYH</p>
        </YearContainer>
      </Center>
    </FooterContainer>
  );
};

export default Footer;