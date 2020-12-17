import React, {useState, useEffect} from 'react';

import axios from 'axios';
import ResultContent from '../components/ResultContent';

const Results = () => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        axios.get(`http://api.football-data.org/v2/competitions/2021/matches?status=FINISHED`, {
            headers: {
                'X-Auth-Token': "02ffa5aef17d43358b36e86b2e9d5012"
            }
        })
        .then(result=> {
            // console.log(result.data.matches)
            setResults(result.data.matches)
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

    return (
        <ResultContent 
            results={results}
            scheduleMatches={scheduleMatches}
        />
    )
}

export default Results
