import styled from "styled-components";

const WoodieMainNav = styled.div`
    display: flex;
    position: fixed;
    background: #282828;
    border-bottom: 1px solid #464646;
    height: 50px;
    width: 100vw;
    top: 0;
    align-items: center;
    z-index: 99;
`;
const WoodieTitle = styled.div`
    font-family: 'Nunito';
    font-size: 20px;
    font-weight: bold;
    color: white;
    width: 200px;
    margin-left: 10px;
`;

const WoodieOption = styled.div`
    display: flex;
    width: 50px;
    font-size: 18px;
    color: #a6a4a4;
    margin-left: 50px;
    transition: 0.3s;
    margin-top: 4px;

    &:hover {
        cursor: pointer;
        color: white;
        transition: 0.3s;
    }
`;

const WoodieGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

export {
    WoodieMainNav,
    WoodieTitle,
    WoodieOption,
    WoodieGroup
}