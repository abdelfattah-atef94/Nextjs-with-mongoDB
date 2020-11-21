import React, {useState} from 'react';
import { useRouter } from "next/router";

import fetch from 'isomorphic-unfetch';

// styles
import {
  ImageWrapper,
  ItemImage,
  ImageContent,
  Name,
  Price,
  ImageLikeBtn,
  ImageLikeBtnFilled,
  DeleteBtn
} from '../styles';

interface Props {
  card: {
    _id: string,
    item_image: string,
    item_name: string,
    currency: string
    price: number,
    is_favourite: boolean
  },
  pathname: string,
}

const Image: React.FC<Props> = ({ card, pathname}) => {
  const router = useRouter();
  const {_id, item_image, item_name, currency, price, is_favourite} = card;
  const [isLiked, setIsLiked] = useState(is_favourite);
  const id = _id;
  const handleRemove = async () => {
    handleUpdate(false);
    await fetch(`http://localhost:3000/api/favourites/${id}`, {
      method: 'DELETE',
    });
    router.push('/favourites');
  };

  const handleLike = async(like) => {
    setIsLiked(like);
    if(like) {
      await fetch('http://localhost:3000/api/favourites', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(card),
      });
    }
    handleUpdate(like);
  };

  const handleUpdate = async(like) => {
    const payload = {
      ...card,
      is_favourite: like,
    }
    await fetch(`http://localhost:3000/api/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });
  }

  const renderIcon = () => {
    if(pathname.includes('favourites')){
      return <DeleteBtn size={20} onClick={handleRemove}/>;
    } else {
      if(isLiked) {
        return <ImageLikeBtnFilled size={20} onClick={() => handleLike(false)}/>
      }
      return <ImageLikeBtn size={20} onClick={() => handleLike(true)}/>;
    }
  };

  return (
    <ImageWrapper>
        <ItemImage src={item_image} />
        <ImageContent>
            <div>
                <Name>{item_name}</Name>
                <Price>{currency} {price}</Price>
            </div>
            {
              renderIcon()
            }
        </ImageContent>
    </ImageWrapper>
  )
}

export default Image;
