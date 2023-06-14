import styled from "styled-components";
import Center from "@/components/Center";
import Link from "next/link";
import Slider from 'react-slick';
import ButtonLink from "@/components/ButtonLink";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {RevealWrapper} from 'next-reveal'


const Instagram = styled.div`
  //height: 70vh;
  padding-bottom: 40px;
  //background-color: #191919;
`;


const StyledImageInstagram = styled(Link)`
  max-height: 50vh;
  padding: 5px;
  cursor: pointer;
  border: none;
  //border-radius: 25px;
  //overflow: hidden;
  background-color: #eee;
  //max-width:95%;
`;
  

const ImgCategory = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
  

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
  color: #B6B6B6;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export default function Catalog() {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            //dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            //dots: true,
          },
        },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     initialSlide: 2,
        //   },
        // },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
  <Instagram>
        <Center>
          <RevealWrapper>
      <Title>Instagram</Title>
            <Slider {...settings}>
                  <StyledImageInstagram href="/">
                      <ImgCategory src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live2.jpg"/>
                  </StyledImageInstagram>

                  <StyledImageInstagram href="/">
                      <ImgCategory src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live4.jpg"/>
                  </StyledImageInstagram>

                  <StyledImageInstagram href="/">
                      <ImgCategory src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live2.jpg"/>
                  </StyledImageInstagram>

                  <StyledImageInstagram href="/">
                      <ImgCategory src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live4.jpg"/>
                  </StyledImageInstagram>
            
                  <StyledImageInstagram href="/">
                      <ImgCategory src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live2.jpg"/>
                  </StyledImageInstagram>
            </Slider>
            <ButtonWrapper>
            <ButtonLink href={'/categories'} outline={1} black={1}>Побачити більше</ButtonLink>
          </ButtonWrapper>
          </RevealWrapper>
        </Center>
      </Instagram>
  );
}