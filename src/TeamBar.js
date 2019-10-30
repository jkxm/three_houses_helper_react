import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from './CharacterSheet.js';
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';
import {spells, combat_arts, universal_arts, allabilities, universal_abilities} from './spells.js';


class Teammate extends React.Component {
    constructor(){
      super();
    }

    removeBtnHandler(unit){
      this.props.removeBtnHandler(unit);
    }

    changeHilightedUnit(unit){
      this.props.changeHilightedUnit(unit);
    }

    render() {
      var unitname = this.props.unit;
      return <span>
          <p><h2 onClick={() => this.changeHilightedUnit(unitname)}>{this.props.unit}</h2>
          <button type='button' onClick={() => this.removeBtnHandler(unitname)}> - </button></p>
        </span>
    }
}



class TeamBar extends React.Component {
  constructor(){
    super();
    this.state = {
        units:[],
        teammates:[],
        selectedUnit:'Byleth',
        hilightedUnit:'Byleth',
        charactersheets:[],
        'Byleth':{
          intendedClass:'Noble',
          abilities:[],
          combatArts:[],
        },
    }


    this.removeTeammate = this.removeTeammate.bind(this);
    this.bindClassToSheet = this.bindClassToSheet.bind(this);
    this.setArray = this.setArray.bind(this);
    this.removeElementFromArray = this.removeElementFromArray.bind(this);
  }

  componentDidMount(){
    var unit_options = []
    unit_list.forEach(function(item, index){
      unit_options.push(<option key={index} value={item}>{item}</option>);
    });

    this.setState(
      {
        units:unit_options,
        teammates:[<Teammate key='Byleth' unit='Byleth' removeTeammate={this.removeTeammate} changeHilightedUnit={this.changeHilightedUnit}/>,],
        charactersheets:[<CharacterSheet
          key='Byleth'
          unit = 'Byleth'
          intendedClass={this.state['Byleth'].intendedClass}
          bindClassToSheet={this.bindClassToSheet}
        />],
      }
    );

  }

  changeSelectedUnit(e){
    this.setState({selectedUnit:e.target.value});
  }

  removeCharacterSheet = (value) => {
    var currentSheets = this.state.charactersheets;
    this.setState({
      charactersheets: currentSheets.filter(unit => unit.props.unit != value)
    });
  }

  removeTeammate(value){
    console.log('removeteammate');
    var currentTeam = this.state.teammates;
    this.setState({
        teammates: currentTeam.filter(unit => unit.props.unit != value)
    });
  }

  removeBtnHandler = (value) =>{
    this.removeTeammate(value);
    this.removeCharacterSheet(value);
  }

  createCharacterSheet = (unit) => {
    var current_charactersheets = this.state.charactersheets;
    var intendedClass = this.state[unit].intendedClass;
    current_charactersheets.push(<CharacterSheet
      key={unit}
      unit={unit}
      intendedClass={intendedClass}
      bindClassToSheet={this.bindClassToSheet}
      />);
    this.setState({
      charactersheets:current_charactersheets
    })
  }

  changeHilightedUnit = (unit) =>{
    // this is where current unit changes and character sheet selection is displayed
    console.log('change hilight unit', unit);
    var charsheets = this.state.charactersheets;

    this.setState({
      hilightedUnit:unit,

      // current_unit:unit,
      // current_charactersheet:currCS,
    });

    console.log(this.state[unit]);
  }

  addTeammate = () =>{
    console.log('add mate' + this.state.selectedUnit);
    var currentTeam = this.state.teammates;
    var unit = this.state.selectedUnit
    currentTeam.push(<Teammate key={unit}
                               unit={unit}
                               removeBtnHandler={this.removeBtnHandler}
                               removeCharacterSheet={this.removeCharacterSheet}
                               changeHilightedUnit={this.changeHilightedUnit}/>
                     );
    this.setState({teammates:currentTeam});

    this.state[unit] = {
      intendedClass:'Noble',
      abilities:[],
      combatArts:[],
    };

    // createCharacterSheet(this.state.selectedUnit);
  }

  addBtnHandler = () =>{
    this.addTeammate();
    this.createCharacterSheet(this.state.selectedUnit);
    this.state[this.state.selectedUnit] = {
      intendedClass:'Noble',
      abilities:[],
      combatArts:[],
    };
  }

  bindClassToSheet = (intendedClass) => {
    var current_unit = this.state.hilightedUnit;
    this.state[current_unit]['intendedClass'] = intendedClass;
    console.log(current_unit, this.state[current_unit]['intendedClass']);
  }

  setArray = (field, abilityOrCombatArtArray) =>{
    var unit = this.state.hilightedUnit;
    this.state[unit][field] = abilityOrCombatArtArray;
    console.log(this.state[unit][field]);
    // console.log(this.state[unit][field]);
  }

  removeElementFromArray = (field, element) =>{
    var unit = this.state.hilightedUnit;
    this.state[unit][field] = element;
  }


  render(){
    var teammate_components = this.state.teammates.map(function(unitname){
      return unitname
    })
    var unit = this.state.hilightedUnit;
    // var currCS = this.state.charactersheets.find(function(element){
    //   if(element.props.unit == unit){
    //     console.log(element.props.intendedClass);
    //     return element;
    //   }
    // });

    return <div>
      <div className="col-lg-4">
        {teammate_components}
        <select value={this.state.selectedUnit} onChange={this.changeSelectedUnit.bind(this)}>
          <option defaultValue disabled>select unit</option>
          {this.state.units}
        </select>
        <button type='button' onClick={this.addBtnHandler}>Add Teammate </button>
      </div>
      <CharacterSheet
        key={unit}
        unit={unit}
        intendedClass={this.state[unit].intendedClass}
        bindClassToSheet={this.bindClassToSheet}
        characterStateObject = {this.state[unit]}
        setArray = {this.setArray}
        removeElementFromArray = {this.removeElementFromArray}

      />
    </div>
  }

}

export default TeamBar;
