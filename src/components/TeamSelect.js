import React from "react";

export default class TeamSelect extends React.Component {
  state = {
    Teams: [
        'Arizona Cardinals',
        'Alanta Falcons',
        'Baltimore Ravens',
        'Buffalo Bills',
        'Carolina Panthers',
        'Chicago Bears',
        'Cincinnati Bengals',
        'Cleveland Browns',
        'Dallas Cowboys',
        'Denver Broncos',
        'Detriot Lions',
        'Green Bay Packers',
        'Houston Texans',
        'Indianapolis Colts',
        'Jacksonville Jaguars',
        'Kansas City Chiefs',
        'Los Angeles Chargers',
        'Los Angeles Rams',
        'Miami Dolphins',
        'Minnesota Vikings',
        'New England Patriots',
        'New Orleans Saints',
        'New York Giants',
        'New York Jets',
        'Oakland Raiders',
        'Philidelphia Eagles',
        'Pittsburgh Steelers',
        'San Francisco 49ers',
        'Seattle Seahawks',
        'Tampa Bay Buccaneers',
        'Tennessee Titans',
        'Washington Redskins'
    ]
  };
}

render() {
    const teamList = this.state.Teams.map(team => {
        return team;
    })
    return (
        <section className="teamSelectForm">
            <form>
                <select>
                    <option>{team}</option>
                </select>
            </form>
        </section>
    )
}