import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from './CharacterSheet.js';
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';

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
      var unitname = this.props.unit
      return <div>
          <h2 onClick={() => this.changeHilightedUnit(unitname)}>{this.props.unit}</h2>
          <button type='button' onClick={() => this.removeBtnHandler(unitname)}> -x- </button>
        </div>
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
    }


    this.removeTeammate = this.removeTeammate.bind(this);

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
        charactersheets:[<CharacterSheet key='Byleth' unit = 'Byleth' />],
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
    current_charactersheets.push(<CharacterSheet key={unit} unit={unit} />)
    this.setState({
      charactersheets:current_charactersheets
    })
  }

  changeHilightedUnit = (unit) =>{
    // this is where current unit changes and character sheet selection is displayed
    console.log('change hilight unit', unit);
    // this.state = {
    //   current_unit:unit,
    // }
    var charsheets = this.state.charactersheets;

    // var currCS = charsheets.find(function (element){
    //   if(element.props.unit == unit){
    //     // console.log(element.props.unit, element.state.unit);
    //
    //     return element.props.unit === unit;
    //   })
    // })
    // // console.log(currCS.state.class_options);
    this.setState({
      hilightedUnit:unit,

      // current_unit:unit,
      // current_charactersheet:currCS,
    });
  }

  addTeammate = () =>{
    console.log('add mate' + this.state.selectedUnit);
    var currentTeam = this.state.teammates;
    currentTeam.push(<Teammate key={this.state.selectedUnit}
                               unit={this.state.selectedUnit}
                               removeBtnHandler={this.removeBtnHandler}
                               removeCharacterSheet={this.removeCharacterSheet}
                               changeHilightedUnit={this.changeHilightedUnit}/>
                     );
    this.setState({teammates:currentTeam});
    // createCharacterSheet(this.state.selectedUnit);
  }

  addBtnHandler = () =>{
    this.addTeammate();
    this.createCharacterSheet(this.state.selectedUnit);
  }



  render(){
    var teammate_components = this.state.teammates.map(function(unitname){
      return unitname
    })
    var unit = this.state.hilightedUnit;
    var currCS = this.state.charactersheets.find(function(element){
      if(element.props.unit == unit){
        console.log(element.props.unit);
        return element;
      }
    });

    return <div>
      {teammate_components}

      <select value={this.state.selectedUnit} onChange={this.changeSelectedUnit.bind(this)}>
        <option defaultValue disabled>select unit</option>
        {this.state.units}
      </select>
      <button type='button' onClick={this.addBtnHandler}>Add Teammate </button>

      {currCS}
    </div>
  }

}

export default TeamBar;
