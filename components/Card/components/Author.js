// styles
import {
  AuthorWrapper,
  AuthorImage,
  AuthorName,
} from '../styles';

const Author = ({ authorName, authorImage }) => {
  return (
    <AuthorWrapper>
        <AuthorImage src={authorImage} />
        <AuthorName>{authorName}</AuthorName>
    </AuthorWrapper>
  )
}

export default Author;
