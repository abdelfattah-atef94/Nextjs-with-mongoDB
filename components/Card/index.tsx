import React from 'react';
import { useRouter } from "next/router";

// lodash
import _map from 'lodash/map';
import _range from 'lodash/range';


// components
import Author from './components/Author';
import Image from './components/Image';
import Content from './components/Content';

// styles
import { 
  CardsList,
  CardWrapper,
} from './styles';

interface Props {
  cards: Array<string | number>,
};


const Card: React.FC<Props> = ({ cards }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <CardsList>
      {
        _map(cards, card => (
          <CardWrapper key={card._id}>
            <Author card={card}/>
            <Image card={card} pathname={pathname}/>
            <Content card={card}/>
          </CardWrapper>
        ))
      }
    </CardsList>
  )
}

export default Card;
