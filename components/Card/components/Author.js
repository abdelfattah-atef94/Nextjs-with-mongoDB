// styles
import {
  AuthorWrapper,
  AuthorImage,
  AuthorName,
} from '../styles';

const Author = ({ card }) => {
  const { author_name, author_image } = card;
  return (
    <AuthorWrapper>
        <AuthorImage src={author_image} />
        <AuthorName>{author_name}</AuthorName>
    </AuthorWrapper>
  )
}

export default Author;
