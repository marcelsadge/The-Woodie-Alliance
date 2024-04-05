import React, { useState, useEffect } from "react";

import { GoSearch } from 'react-icons/go';
import { SearchBarContainer, SearchForm, SearchInput, WoodieTeam, WoodieList } from "./styles";

//import { getTeamList } from "../api";
import teamList from "../data/team_search.json"

function WoodieSearchBar() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');
    const [loading, setLoading] = useState(true);

    const handleSubmit = (val) => {
        setLoading(true);
        if (val == "") {
            return;
        }

        const query = Object.keys(teamList).filter((team) => team.startsWith(val));

        const filteredTeams = Object.keys(teamList)
            .filter(key => query.includes(key))
            .reduce((obj, key) => {
                obj[key] = teamList[key];
                return obj;
            }, {});

        let topFive = [];
        let count = 0;

        for (const team in filteredTeams) {
            if (count == 5) {
                break;
            }
            topFive.push({team: team, name: filteredTeams[team]});
            count++;
        }

        console.log(topFive);

        setResults(topFive);
        setLoading(false);
    };

    /*
    const Results = results.map((key, val) => (
        <WoodieTeam>
            {key}:{val}
        </WoodieTeam>
    ));
    */
    
    
    useEffect(() => {
        if (search.length == 0) {
            setLoading(true);
        }
        
    }, [results]);

    return (
        <SearchBarContainer>
            <GoSearch size={'20px'} style={{ position: 'absolute', marginLeft: '15px' }} />
            <SearchForm>
                <SearchInput 
                    value={search} 
                    onChange={(e) => {
                        setSearch(e.target.value);
                        handleSubmit(e.target.value);
                    }}
                />
            </SearchForm>
            {loading ? (
                <></>
            ) : (
                <WoodieTeam>
                    {results.map((element) => (
                        <WoodieList>
                            {element.team}:{element.name}
                        </WoodieList>
                    ))};
                </WoodieTeam>
            )}
        </SearchBarContainer>
    );
}

export default WoodieSearchBar;

//<WoodieResultsPage> {results} </WoodieResultsPage>