import React,{useEffect, useState} from 'react';
import axios from 'axios';
import TeamInfo from '../components/TeamInfo';

const TeamDetail = (props) => {
    const [team, setTeam] = useState(null);
    
    useEffect(() => {
        let id = props.match.params.team_id;
        console.log(id)
        axios.get(`http://api.football-data.org/v2/teams/${id}`, {
            headers: {
                'X-Auth-Token': "02ffa5aef17d43358b36e86b2e9d5012"
            }
        })
        .then(result=> {
            setTeam(result.data)
        })
    }, [])

    return (
        team ? (
            <TeamInfo team={team} />
        ) : (
            <p style={{padding: 50}}>Loading</p>
        )
    )
}

export default TeamDetail
