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
        _map(cards, ({_id, author_name, author_image, item_image, item_name, price, currency, likes_number, comments_number, item_description, tags, is_favourite}) => (
          <CardWrapper key={_id}>
            <Author authorName={author_name} authorImage={author_image}/>
            <Image itemImage={item_image} itemName={item_name} price={price} currency={currency} isFavourite={is_favourite}/>
            <Content 
              likesNumber={likes_number}
              commentsNumber={comments_number}
              itemDescription={item_description}
              tags={tags}
            />
          </CardWrapper>
        ))
      }
    </CardsList>
  )
}

export default Card
