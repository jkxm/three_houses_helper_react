import React from 'react';
import ReactDOM from 'react-dom';
import TeamBar from './TeamBar.js';
import CharacterSheet from './CharacterSheet.js';
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';
import './TeamBuilder.css';

class TeamBuilder extends React.Component {
  constructor(){
    super();
    this.state = {
      current_unit:'Byleth',
      current_charactersheet:<CharacterSheet unit='Byleth'/>,
      charactersheets:[<CharacterSheet unit='Byleth'/>],

    }
    this.updateCurrentUnit = this.updateCurrentUnit.bind(this);
    this.changeHilightedUnit = this.changeHilightedUnit.bind(this);
    this.createCharacterSheet = this.createCharacterSheet.bind(this);
  }

  updateCurrentUnit = (unit) =>{
    // probably have to update current character sheet as well here
    this.setState({
      current_unit:unit
    });
  }

  changeHilightedUnit = (unit) =>{
    // this is where current unit changes and character sheet selection is displayed
    console.log('change hilight unit', unit);
    // this.state = {
    //   current_unit:unit,
    // }
    this.setState({
      current_unit:unit
    });
  }

  createCharacterSheet = (unit) =>{
    var current_charactersheets = this.state.charactersheets;
    current_charactersheets.push(<CharacterSheet unit={unit} />)
    this.setState({
      charactersheets:current_charactersheets
    })
  }

   render(){

     return <div>
      <TeamBar changeHilightedUnit={this.changeHilightedUnit} createCharacterSheet={this.createCharacterSheet}/>
      <CharacterSheet unit={this.state.current_unit}/>
     </div>
   }
}


export default TeamBuilder;
