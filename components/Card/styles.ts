// icons
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';
import {Heart} from '@styled-icons/bootstrap/Heart';
import {Delete} from '@styled-icons/material/Delete';
import styled from 'styled-components';

export const CardsList = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const CardWrapper = styled.div`
    width: 30%;
    background-color: #fff;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    margin-right: 5%;
    &:nth-child(3) {
        margin-right: 0;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 20px;
        margin-right: 0
    }
`;

export const AuthorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 16px;
`;

export const AuthorImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const AuthorName = styled.span`
    color: #486EE0;
    font-weight: 500;
    font-size: 14px;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    
`;
export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const ImageContent = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 8px 16px;
    position: absolute;
    width: calc(100% - 32px);
    height: calc(100% - 16px);
    bottom: 0;
    background-color: rgba(0,0,0, 0.5);
`;

export const Name = styled.p`
    color: #FB619C;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 14px;
`;

export const Price = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

export const ImageLikeBtn = styled(Heart)`
    color: #fff;
    cursor: pointer;
`;

export const ImageLikeBtnFilled = styled(HeartFill)`
    color: #fff;
    cursor: pointer;
`;

export const DeleteBtn = styled(Delete)`
    color: #fff;
    cursor: pointer;
`;

export const ContentLikeBtn = styled(HeartFill)`
    color: #486EE0;
`;

export const CardContent = styled.div`
    padding: 8px 16px;
`;

export const LikesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px;
`;

export const LikeText = styled.span`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 500;
`;

export const Description = styled.p`
    color: #999;
    font-size: 14px;
    margin: 0 0 2px;
`;

export const Comments = styled.p`
    color: #999;
    margin: 0;
    font-size: 12px;
`;

export const TagsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 5px;
`;

export const Tag = styled.span`
    margin-right: 5px;
    font-size: 14px;
    color: #486EE0;
`;