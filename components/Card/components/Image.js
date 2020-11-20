import React, {useState} from 'react';
// styles
import {
  ImageWrapper,
  ItemImage,
  ImageContent,
  Name,
  Price,
  ImageLikeBtn,
  ImageLikeBtnFilled
} from '../styles';

const Image = ({ itemName, itemImage, price, currency, isFavourite }) => {
  const [isLiked, setIsLiked] = useState(isFavourite);
  
  return (
    <ImageWrapper>
        <ItemImage src={itemImage} />
        <ImageContent>
            <div>
                <Name>{itemName}</Name>
                <Price>{currency} {price}</Price>
            </div>
            {
              isLiked ? 
              <ImageLikeBtnFilled size={20} onClick={() => setIsLiked(false)}/> :
              <ImageLikeBtn size={20} onClick={() => setIsLiked(true)}/> 
            }
        </ImageContent>
    </ImageWrapper>
  )
}

export default Image;
