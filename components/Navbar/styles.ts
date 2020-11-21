import styled from 'styled-components';

export const TopHeader = styled.header`
    padding: 10px;
    background-color: #FB619C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: calc(100% - 20px);
    z-index: 99;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const BottomHeader = styled.div`
    padding: 10px;
    background-color: #FB619C;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: calc(100% - 20px);
    z-index: 99;
    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const HyperLink = styled.a`
    text-decoration: none;
    color: ${props => props.isSelected ? '#FB619C' : '#fff'}; ;
    padding: 6px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 2px;
    margin-right: 20px;
    background-color: ${props => props.isSelected ? '#fff' : 'transparent'};
    &:last-child{
        margin-right: 0;
    }
    &:hover {
        background-color: #fff;
        color: #FB619C;
    };
`;

export const Logo = styled.h3`
    color: #fff;
    margin: 0;
`;