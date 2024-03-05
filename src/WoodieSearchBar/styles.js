import styled from "styled-components";
import InputBase from '@mui/material/InputBase';

const SearchBarContainer = styled.div`
    display: flex;
    background: white;
    border-radius: 20px;
    width: 350px;
    height: 30px;
    margin-left: 6vw;
    transition: 0.3s;
    align-items: center;
    &:hover {
        background-color: #e9e8e8;
        transition: 0.3s;
    }
`;

const SearchInput = styled(InputBase)`
    font-family: Nunito !important;
    color: black !important;
    padding-left: 50px;
    font-size: 16px;
    width: 343px;
`;

const SearchForm = styled.form``;

export {
    SearchBarContainer,
    SearchForm,
    SearchInput
}