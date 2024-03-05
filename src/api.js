const auth_key = 'XsI4GBeICFeDWqNXh7C4t7S3Drw1mIHabnf8xYHFZoegndDByDdVFQuFJwKNvERS'

export async function getTeamList(pages) {
    const result = {};
    let count = 0;
    while (count < pages) {
        const teamList = await fetch(`https://www.thebluealliance.com/api/v3/teams/${count}`, {
            method: 'GET',
            headers: {
                'X-TBA-Auth-Key' : auth_key
            }
        })
        .then((response) => {
            return response.json()
        });
        console.log(teamList);

        for (const team in teamList) {
            const teamNum = teamList[team]['key'];
            result[teamNum.replace(/\D/g,'')] = teamList[team];
        }
        count++;
    }
    console.log(result);
    return result;
}