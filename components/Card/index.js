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

const Card = ({ cards }) => {
  return (
    <CardsList>
      {
        _map(cards, ({id, authorName, authorImage, itemImage, itemName, price, currency, likesNumber, commentsNumber, itemDescription, tags, isFavourite}) => (
          <CardWrapper key={id}>
            <Author authorName={authorName} authorImage={authorImage}/>
            <Image itemImage={itemImage} itemName={itemName} price={price} currency={currency} isFavourite={isFavourite}/>
            <Content 
              likesNumber={likesNumber}
              commentsNumber={commentsNumber}
              itemDescription={itemDescription}
              tags={tags}
            />
          </CardWrapper>
        ))
      }
    </CardsList>
  )
}

export default Card
