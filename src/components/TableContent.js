import React from 'react';
import {Link} from "react-router-dom";
import './TableContent.css';

function TableContent({tables, displayWin, changeLastMatches}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Club</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th className="small-hide">GF</th>
                    <th className="small-hide">GA</th>
                    <th className="small-hide">GD</th>
                    <th>Points</th>
                    <th className="med-hide">Form</th>
                </tr>
            </thead>
            <tbody>
                {
                    tables ? (
                        tables.map(table => (
                            <tr className="table-row">
                                <td className="table-value">{table.position}</td>
                                <td>
                                    <Link className="club-name" to={`/tables/${table.team.id}`}>
                                        <img className="club-image" src={table.team.crestUrl} alt="tot"/>
                                        <p className="club-text">{table.team.name}</p>
                                    </Link>
                                </td>
                                <td className="table-value">{table.playedGames}</td>
                                <td className="table-value">{table.won}</td>
                                <td className="table-value">{table.draw}</td>
                                <td className="table-value">{table.lost}</td>
                                <td className="table-value small-hide">{table.goalsFor}</td>
                                <td className="table-value small-hide">{table.goalsAgainst}</td>
                                <td className="table-value small-hide">{table.goalDifference}</td>
                                <td className="table-value">{table.points}</td>
                                <td className="table-form med-hide">
                                    {changeLastMatches(table.form).map(match => (
                                        <div className="form-container" style={displayWin(match)}>
                                            <p className="form-content" >{match}</p>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <p style={{padding: 50}}>Loading</p>
                    )
                }
            </tbody>
        </table>
    )
}

export default TableContent
