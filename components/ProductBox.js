import styled from "styled-components";
import Button, {ButtonStyle} from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import FlyingButton from "@/components/FlyingButton";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon";
import HeartSolidIcon from "@/components/icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div`
  margin: 10px;
  button{
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  //padding: 20px;
  height: 180px;
  text-align: center;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  position: relative;
  overflow: hidden;
  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:#191919;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  //display: block;
  display: flex;
  color: #191919;
  @media screen and (min-width: 768px) {
    gap: 5px;
    align-items: flex-start;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  display: flex;
  font-size: .8rem;
  font-weight: 200;
  text-align: right;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    font-size: .9rem;
    font-weight: 400;
    text-align: right;
  }
  & > div:nth-child(1){
    margin-right: -15px;
  }
`;

const WishlistButton = styled.button`
  border:0;
  width: 40px !important;
  height: 40px;
  padding: 10px;
  position: absolute;
  top:0;
  right:0;
  background:transparent;
  cursor: pointer;
  ${props => props.wished ? `
    color:red;
  ` : `
    color:white;
  `}
  svg{
    width: 16px;
  }
`;

export default function ProductBox({
  _id,title,description,price,images,wished=false,
  onRemoveFromWishlist=()=>{},
}) {
  const url = '/product/'+_id;
  const [isWished,setIsWished] = useState(wished);
  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    if (nextValue === false && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
    axios.post('/api/wishlist', {
      product: _id,
    }).then(() => {});
    setIsWished(nextValue);
  }
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={isWished} onClick={addToWishlist}>
            {isWished ? <HeartSolidIcon /> : <HeartOutlineIcon />}
          </WishlistButton>
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <PriceRow>
        <Title href={url}>{title}</Title>
        <Price>
          <FlyingButton noborder={1} _id={_id} src={images?.[0]}><CartIcon /></FlyingButton>
          ₴{price}
        </Price>
        {/* <PriceRow>
          <Price>
            ₴{price}
          </Price>
          <FlyingButton _id={_id} src={images?.[0]}><CartIcon /></FlyingButton>
        </PriceRow> */}
      </PriceRow>
    </ProductWrapper>
  );
}