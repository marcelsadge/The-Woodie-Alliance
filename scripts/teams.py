import os
import requests
import json

from dotenv import load_dotenv

load_dotenv()

## The Blue Alliance API Key
GLOBAL_API_KEY = os.getenv('GLOBAL_API_KEY')

## Max number of team pages
MAX_PAGES = 20


## Gets a list of all FRC teams and exports them to teams.txt
def get_team_list_export_to_file():
    page_count = 0
    teams = []

    f = open("../data/teams.json", "w")

    while (page_count < MAX_PAGES) :
        response = requests.get('https://www.thebluealliance.com/api/v3/teams/' + str(page_count),
                                headers={"X-TBA-Auth-Key": GLOBAL_API_KEY})
        
        api_data = response.json()

        for team in api_data:
            teams.append(team)

        page_count += 1
    
    json.dump(teams, f)
    f.close()

    
# Run the program
get_team_list_export_to_file()