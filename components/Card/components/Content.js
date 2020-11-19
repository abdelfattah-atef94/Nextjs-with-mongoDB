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

const Content = ({ likesNumber, commentsNumber, itemDescription, tags }) => {
    return (
        <CardContent>
            <LikesWrapper>
                <ContentLikeBtn size={15} />
                <LikeText>{likesNumber} likes</LikeText>
            </LikesWrapper>
            <Description>{itemDescription}</Description>
            <Tags tags={tags} />
            <Comments>View {commentsNumber} comments</Comments>
        </CardContent>
    )
}

export default Content;
