import styled from "styled-components";
import Center from "@/components/Center";
//import ProductsGrid from "@/components/ProductsGrid";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductBox from "@/components/ProductBox";
import { RevealWrapper } from 'next-reveal'
import ButtonLink from "@/components/ButtonLink";

const Bg = styled.div`
  //background-image: url("https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/backgr.jpg");
  //background-color: #121212;
  //color:#fff;
  //margin-top: -60px;
  padding: 5vh;
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
  text-align: center;
  color: #B6B6B6;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function NewProducts({ products, wishedProducts }) {
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            
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
     <Bg>
      <Center>
        <RevealWrapper delay={100}>
        <Title>Новинки</Title>
        <Slider {...settings}>
          {products?.length > 0 && products.map(product => (
          <ProductBox key={product._id} {...product} />
        ))}
          </Slider>
          <ButtonWrapper>
            <ButtonLink href={'/products'} outline={1} black={1}>Побачити більше</ButtonLink>
          </ButtonWrapper>
          </RevealWrapper>
      </Center>
     </Bg>
  );
}