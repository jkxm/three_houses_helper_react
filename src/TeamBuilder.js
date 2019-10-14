import React from 'react';
import ReactDOM from 'react-dom';
import TeamBar from './TeamBar.js';
import CharacterSheet from './CharacterSheet.js';
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';


class TeamBuilder extends React.Component {
  constructor(){
    super();


  }

   render(){
     return <div>
      <TeamBar />
      <CharacterSheet />
     </div>
   }
}


export default TeamBuilder;
