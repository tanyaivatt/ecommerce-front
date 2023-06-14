import styled from "styled-components";
import Center from "@/components/Center";
import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Category = styled.div`
  height: 60vh;
  margin: 10px;
  background-color: #eee;
`;

const StyledDivCategory = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  //border-radius: 10px;
  height:50vh;
  max-width:99%;
`;
  
const ButtonCategory = styled.button`
  position: absolute;
  min-width: 80px;
  width: fit-content;
  height: 5vh;
  padding: 5px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: white;
  text-transform: uppercase;
  opacity: .4;
`;  

const ButtonLink = styled(Link)`
  display: block;
  color:#191919;
  text-decoration:none;
  min-width:30px;
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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  return (
    <Center>
      <Title>Categories</Title>
      <Category>
      <Slider {...settings}>
      <StyledDivCategory>
          <ImgCategory
            src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live2.jpg"
            alt=""
          />
          <ButtonCategory>
            <ButtonLink href={'/categories'}>
              Підвіски
            </ButtonLink>
        </ButtonCategory>
        </StyledDivCategory>
        <StyledDivCategory>
          <ImgCategory
            src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live4.jpg"
            alt=""
          />
          <ButtonCategory>
            <ButtonLink href={'/categories'}>
              Сережки
            </ButtonLink>
        </ButtonCategory>
        </StyledDivCategory>
          <StyledDivCategory>
          <ImgCategory
            src="https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/live5.PNG"
            alt=""
          />
          <ButtonCategory>
            <ButtonLink href={'/categories'}>
              Колечка
            </ButtonLink>
        </ButtonCategory>
          </StyledDivCategory>
          </Slider>
      </Category>
      
  </Center>
  );
}