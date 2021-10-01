import React from 'react';
import {USERS} from './data/users';


class UserRow extends React.Component {
  render() {
    const user = this.props.user;
    const name = user.name;
    const username = user.username; 

    return (
      <tr className='tab-row'>
        <td>{name}</td>
        <td>{username}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>{user.grafanaAdmin === true && 'yes'}</td>
      </tr>
    );
  }
}

class UserTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const rows = [];
    
          
    this.props.users.forEach((user) => {
      if (
        ((user.name.search(new RegExp(filterText, 'i')) === -1) &&
        ((user.username.search(new RegExp(filterText, 'i')) === -1) &&
        ((user.email.search(new RegExp(filterText, 'i')) === -1) &&
        ((user.role.search(new RegExp(filterText, 'i')) === -1))
        ))))
        {
        return;
      }
      
      rows.push(
        <UserRow
          user={user}
          key={user.name, user.username} 
        />
      );
    });

    return (
      <table style={{border: '1px black solid'}}>
        <thead>
          <tr className='tab-header'>
            <th>Nom</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Role</th>
            <th>Administrateur</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
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
          type="text"
          placeholder="Search by Name, Username, Email or Role"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          style={{width: '400px'}}
        />
      </form>
    );
  }
}

class FilterableUserTable extends React.Component {
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
        <div className = 'searchBare'>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
         
        />
        </div>
        <div className = 'userTab'>
        <UserTable
          users={this.props.users}
          filterText={this.state.filterText}
        />
        </div>
      </div>
    );
  }
}


export default class User extends React.Component {
  render() {
    return(
      <FilterableUserTable users={USERS} />
    )
  }
}

