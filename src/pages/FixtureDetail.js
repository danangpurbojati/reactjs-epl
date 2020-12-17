import React,{useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';

const FixtureDetail = (props) => {
    const [match, setMatch] = useState(null)
    
    useEffect(() => {
        let id = props.match.params.match_id;
        console.log(id)
        axios.get(`http://api.football-data.org/v2/matches/${id}`, {
            headers: {
                'X-Auth-Token': "02ffa5aef17d43358b36e86b2e9d5012"
            }
        })
        .then(result=> {
            console.log(result)
            setMatch(result.data)
        })
    },[])

    return (
        match ? (
            <div>
                <div className="time-place">
                    <p>{moment(match.match.utcDate).format("dddd, MMMM Do YYYY")}</p>
                    <p>|</p>
                    <p>{match.match.venue}</p>
                </div>
                <div className="versus-image">
                    <img src={`https://crests.football-data.org/${match.match.homeTeam.id}.svg`} alt="home-team"/>
                    <img src={`https://crests.football-data.org/${match.match.awayTeam.id}.svg`} alt="away-team"/>
                </div>
                <div className="match-detail">
                    <div className="home-team">
                        <h3>{match.match.homeTeam.name}</h3>
                    </div>
                    <div className="match-time-detail">
                        <h2>Versus</h2>
                    </div>
                    <div className="away-team">
                        <h3>{match.match.awayTeam.name}</h3>
                    </div>
                </div>
                <p style={{textAlign: "center"}}>kick off</p>
                <p style={{textAlign: "center"}}>{moment(match.match.utcDate).format("HH:mm")}</p>
            </div>
        ) : (
            <p style={{padding: 50}}>Loading</p>
        )
    )
}

export default FixtureDetail
