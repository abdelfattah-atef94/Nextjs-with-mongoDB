// lodash
import _map from 'lodash/map';

// styles
import {
    TagsWrapper,
    Tag
} from '../styles';

const Tags = ({ tags }) => {
    return (
        <TagsWrapper>
            {
                _map(tags, tag => (
                    <Tag key={tag}>#{tag}</Tag>
                ))
            }
        </TagsWrapper>
    )
}

export default Tags;
