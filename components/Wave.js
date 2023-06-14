import styled from "styled-components";

const BgWaveTop = styled.div`
  background-color: #eee;
  left: 0;
  width: 100%;
  height: 70px;
  background-image: url("https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/wave+(2).png");

`;

export default function Wave({products,wishedProducts=[]}) {
  return (
    <BgWaveTop/>
   
  );
}