import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";

const FixtureContent = ({matches, scheduleMatches}) => {
    return (
        <div>            
            {
                matches ? (
                    scheduleMatches(matches).map((match,index) => {
                        return (
                            <div style={{marginTop: 40}} key={index}>
                                <div className="date-container">
                                    <h2 className="date-content">{moment(match.date).format("dddd, MMMM Do YYYY")}</h2>
                                    <h3 className="right-logo">EplFix</h3>
                                </div>
                                <div className="fixture-container">
                                    {
                                        match.games.map(game=>(
                                            <Link className="match-link" to={`/fixtures/${game.id}`}>
                                                <div className="match">
                                                    <div className="home-team">
                                                        <p>{game.homeTeam.name}</p>
                                                        <img className="team-logo" src={`https://crests.football-data.org/${game.homeTeam.id}.svg`} alt=""/>
                                                    </div>
                                                    <div className="match-time">
                                                        <p>{moment(game.utcDate).format('HH:mm')}</p>
                                                    </div>
                                                    <div className="away-team">
                                                        <img className="team-logo" src={`https://crests.football-data.org/${game.awayTeam.id}.svg`} alt=""/>
                                                        <p>{game.awayTeam.name}</p>
                                                    </div>
                                                </div>
                                                <div className="arrow">
                                                    <p>&#8594;</p>                                            
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p style={{padding: 50}}>loading...</p>
                )
            }            
        </div>
    )
}

export default FixtureContent
