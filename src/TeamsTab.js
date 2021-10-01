import React from 'react';
import {USERS} from './data/users';




class TeamRow extends React.Component {
    render() {
        const team = this.props.team;
        const name = team.name;
        
        return (
            <tr className='tab-row'>
                <td>{name}</td>
                <td>{team.value}</td>
            </tr>
        );    
    }
}

class TeamTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const rows = [];

        this.props.teams.forEach((team) => {
            if (team.name.search(new RegExp(filterText, 'i')) === -1) {
                return;
            }
        
            rows.push(
                <TeamRow
                    team={team}
                    key={team.name}
                />
            );
        });

        return (
            <table style={{border: '1px black solid'}}>
                <thead>
                    <tr className='tab-header'>
                        <td>Equipes</td>
                        <td>Nombre</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}


class SearchBarTeam extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    
    render() {
        return (
            <form>
                <input
                    type = "text"
                    placeholder = "Search by Team"
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}     
                    />
            </form>
        );
    }
}

class FilterableTeamTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>
                <SearchBarTeam
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange} />
                <TeamTable
                    teams={this.props.teams}
                    filterText={this.state.filterText}
                />
            </div>
        );
    }
}


const TEAMTAB = () => {
    const usersRole = USERS.map(function(USERS) {
        return [USERS.role, USERS.name]
        } 
    );
    const filterAdmin = USERS.filter(function(newarr1) {
        return newarr1.role === 'Admin';
    });
    const filterEditor = USERS.filter(function(newarr2) {
        return newarr2.role === 'Editor';
        });
    const filterViewer = USERS.filter(function(newarr3) {
        return newarr3.role === 'Viewer';
        });
   
    const teamTab =  [
        {
            name: 'Total',
            value: `${usersRole.length}`
        },
        {
            name: 'Admins',
            value: `${filterAdmin.length}`
        },
        {
            name: 'Editors',
            value: `${filterEditor.length}`
        },
        {
            name: 'Viewers',
            value: `${filterViewer.length}`
        },
    
    ]
    return (teamTab)
   
}

const TEAMTABLE = new TEAMTAB;


export default class Team extends React.Component {
    render() {
        return (
            <FilterableTeamTab teams={TEAMTABLE} />
        )
    }
}