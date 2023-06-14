import styled from "styled-components";

const StyledVideo = styled.div`
  margin: 0 0;
  background-image: url('https://ivat-next-ecommerce.s3.eu-north-1.amazonaws.com/jewelry.gif');
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function Video(props) {
  return <StyledVideo/>
}