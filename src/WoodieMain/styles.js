import styled from "styled-components";

const WoodieMainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: black;
    justify-content: center;
    align-items: center;
`;

const WoodieStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WoodieYear = styled.div`
    display: flex;
    font-size: 75px;
    font-weight: bold;
    font-family: Nunito;
    color: white;
`;


const WoodieTitle = styled.div`
    display: flex;
    font-size: 150px;
    font-weight: bold;
    font-family: Nunito;
    color: white;
`;

export {
    WoodieMainContainer,
    WoodieTitle,
    WoodieStack,
    WoodieYear
}