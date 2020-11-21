import React from 'react';
// components
import Tags from './Tags';

// styles
import {
  ContentLikeBtn,
  CardContent,
  LikesWrapper,
  LikeText,
  Description,
  Comments,
} from '../styles';

interface Props {
    card: {
        likes_number: string, 
        comments_number: string,
        item_description: string,
        tags: Array<string>
    },
  }

const Content: React.FC<Props> = ({card}) => {
    const { likes_number, comments_number, item_description, tags } = card;
    return (
        <CardContent>
            <LikesWrapper>
                <ContentLikeBtn size={15} />
                <LikeText>{likes_number} likes</LikeText>
            </LikesWrapper>
            <Description>{item_description}</Description>
            <Tags tags={tags} />
            <Comments>View {comments_number} comments</Comments>
        </CardContent>
    )
}

export default Content;
