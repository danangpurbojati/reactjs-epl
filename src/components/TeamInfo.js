import React from 'react';
import './TeamInfo.css';

function TeamInfo({team}) {
    return (
        <div>
            <h1>Team Profile</h1>
            <div className="team-info">
                <img src={team.crestUrl} alt="team"/>
                <div className="team-info-text">
                    <h1>{team.name}</h1>
                    <p><strong>Website:</strong> <a target="_black" href={team.website}>{team.website}</a></p>
                    <p><strong>Venue:</strong> {team.venue }</p>
                    <p><strong>Founded:</strong> {team.founded}</p>
                    <p><strong>Phone:</strong> {team.phone }</p>
                    <p><strong>Address:</strong> {team.address}</p>
                    <p><strong>Email:</strong> {team.email}</p>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Position</th>
                            <th>Nationality</th>
                        </tr>
                    </thead>
                    <tbody className="player-table">
                        {
                            team.squad.map(player => (
                                <tr key={player.id}>
                                    <td>{player.name}</td>
                                    <td>{player.position}</td>
                                    <td>{player.nationality}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TeamInfo
