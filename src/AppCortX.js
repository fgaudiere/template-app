import React from 'react';
import NavTab from './NavTab';
import Tab from './Tab';
import Corps from './Corps';
import CorpsTeams from './CorpsTeams';




export default class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      selected: 'Home'
    }
  }
setSelected = (tab) => {
    this.setState({ selected: tab });
  }
render() {
    return (
        <NavTab tabs={['Users', 'Teams']} selected={ this.state.selected } setSelected={ this.setSelected }>
          <Tab isSelected={ this.state.selected === 'Users' }>
              <h1>Liste des Utilisateurs</h1>
             <Corps />
          </Tab> 
          <Tab isSelected={ this.state.selected === 'Teams' }>
            <h1>Liste des Equipes</h1>
            <CorpsTeams/>
          </Tab>
        </NavTab>
   
    );
  }
}
