import styled from "styled-components";

const BgWaveBottom = styled.div`
  background-color: #eee;
  left: 0;
  width: 100%;
  height: 100px;
  margin-top: -15px;
  background-image: url("https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/wave+(3).png");

`;

export default function Wave({products,wishedProducts=[]}) {
  return (
    <BgWaveBottom/>
  );
}