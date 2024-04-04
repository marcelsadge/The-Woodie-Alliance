import React, { useState, useEffect } from "react";

import { GoSearch } from 'react-icons/go';
import { SearchBarContainer, SearchForm, SearchInput } from "./styles";

import { getTeamList } from "../api";
import WoodieResultsPage from "../WoodieResultsPage";

function WoodieSearchBar() {
    const [teamList, setTeamList] = useState(localStorage.getItem('teams'));
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');

    const handleSubmit = () => {
        setResults(search);
    };

    useEffect(() => {
        const fetchTeams = async (val) => {
            const teams = await getTeamList(val);
            localStorage.setItem('teams', JSON.stringify(teams));
            setTeamList(teams);
        };

        if (localStorage.getItem('teams') == null) {
            fetchTeams(19);
        };
        console.log(teamList);
    },[]);

    return (
        <SearchBarContainer>
            <GoSearch size={'20px'} style={{ position: 'absolute', marginLeft: '15px' }} />
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </SearchForm>
        </SearchBarContainer>
    );
}

export default WoodieSearchBar;

//<WoodieResultsPage> {results} </WoodieResultsPage>