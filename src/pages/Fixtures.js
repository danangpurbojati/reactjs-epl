import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FixtureContent from '../components/FixtureContent';


function Fixtures() {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        axios.get(`http://api.football-data.org/v2/competitions/2021/matches?status=SCHEDULED`, {
            headers: {
                'X-Auth-Token': "02ffa5aef17d43358b36e86b2e9d5012"
            }
        })
        .then(result=> {
            // console.log(result.data.matches)
            setMatches(result.data.matches)
        })
    }, [])

    const scheduleMatches = data => {
        const groups = data.reduce((groups, game) => {
            // console.log(moment(game.utcDate).toLocaleString())
            const date = game.utcDate.split('T')[0];
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(game);
            return groups;
            }, {});
        
        // Edit: to add it in the array format instead
        const groupArrays = Object.keys(groups).map((date) => {
            return {
                date,
                games: groups[date]
            };
        });
        return groupArrays;
    }   
    
    // console.log(matches)

    return (
        <FixtureContent 
            matches={matches}
            scheduleMatches={scheduleMatches}
        />        
    )
}

export default Fixtures
