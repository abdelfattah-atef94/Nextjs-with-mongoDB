import React from 'react';
// lodash
import _map from 'lodash/map';

// styles
import {
    TagsWrapper,
    Tag
} from '../styles';

interface Props {
    tags: Array<string>
}

const Tags: React.FC<Props> = ({ tags }) => {
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
