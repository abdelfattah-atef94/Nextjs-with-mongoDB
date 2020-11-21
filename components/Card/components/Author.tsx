import React from 'react';
// styles
import {
  AuthorWrapper,
  AuthorImage,
  AuthorName,
} from '../styles';

interface Props {
  card: {
    author_name: string, 
    author_image: string
  },
}

const Author: React.FC<Props> = ({ card }) => {
  const { author_name, author_image } = card;
  return (
    <AuthorWrapper>
        <AuthorImage src={author_image} />
        <AuthorName>{author_name}</AuthorName>
    </AuthorWrapper>
  )
}

export default Author;
