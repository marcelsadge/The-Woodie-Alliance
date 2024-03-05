import styled from "styled-components";

const WoodieFooterContainer = styled.div`
    display: flex;
    position: fixed;
    background: #1a1a1a;
    height: 55px;
    bottom: 0;
    align-items: center;
`;

const FooterBox = styled.div`
    display: flex;
    width: 100vw;
    left: 0;
    font-size: 20px;
    justify-content: center;
    color: gray;
`;

export {
    WoodieFooterContainer,
    FooterBox
};