import styled, {css} from "styled-components";
import {primaryBlack} from "@/lib/colors";

export const ButtonStyle = css`
  border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poiret One', cursive;
  font-weight:500;
  font-size: 15px;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  ${props => props.noborder && css`
    border-color: transparent;
    color: #B6B6B6;
  `}
  ${props => props.white && !props.outline && css`
    background-color: #B6B6B6;
    color: #191919;
  `}
  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #B6B6B6;
    border: 1px solid #B6B6B6;
  `}
  ${props => props.black && !props.outline && css`
    background-color: #191919;
    color: #B6B6B6;
  `}
  ${props => props.black && props.outline && css`
    background-color: transparent;
    color: #191919;
    border: 1px solid #191919;
  `}
  ${props => props.primaryBlack && !props.outline && css`
    background-color: ${primaryBlack};
    border: 1px solid ${primaryBlack};
    color:#fff;
  `}
  ${props => props.primaryBlack && props.outline && css`
    background-color: transparent;
    border: 1px solid ${primaryBlack};
    color:${primaryBlack};
  `}
  ${props => props.size === 'l' && css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}