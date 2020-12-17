import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TableContent from '../components/TableContent';

const Tables = () => {
    const [tables, setTable] = useState(null)

    useEffect(() => {
        axios.get(`http://api.football-data.org/v2/competitions/2021/standings`, {
            headers: {
                'X-Auth-Token': "02ffa5aef17d43358b36e86b2e9d5012"
            }
        })
        .then(result=> {
            setTable(result.data.standings[0].table)
        })
    }, [tables])

    const changeLastMatches = (string) => {
        return string.split(",").reverse();
    }

    const displayWin = string => {
        let background = {
            backgroundColor: "grey"
        }
        if(string === "W"){
            background.backgroundColor = "green"
        } else if( string === "L"){
            background.backgroundColor = "red"
        }

        return background;
    }

    return (
        <div>
            <h1 style={{padding: 50}}>Epl Tables</h1>

            <TableContent 
                tables={tables} 
                displayWin={displayWin}
                changeLastMatches={changeLastMatches}
            />            
        </div>
    )
}

export default Tables