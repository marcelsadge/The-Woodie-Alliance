import React, { useState, useEffect } from "react";

function WoodieResultsPage({ props }) {
    const results = props.results;

    const getData = async () => {
        const data = await fetch(`https://www.thebluealliance.com/api/v3/team/frc${results}`, {
            method: "POST",
            headers: {
                "X-TBA-Auth-Key": "XsI4GBeICFeDWqNXh7C4t7S3Drw1mIHabnf8xYHFZoegndDByDdVFQuFJwKNvERS"
            }
        })
        .then((response) => {
            return response.json()
        });

    };

    return (
        <></>
    );
}

export default WoodieResultsPage;