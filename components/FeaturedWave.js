import styled from "styled-components";
import Wave from "@/components/Wave";
import WaveBottom from "@/components/WaveBottom";
import Featured from "@/components/Featured";

const ContentWrapper = styled.div`
  

`;

export default function FeaturedWave({products,wishedProducts=[]}) {
  return (
    <ContentWrapper>
      <Wave />
      <Featured/>
      <WaveBottom />
    </ContentWrapper>
  );
}