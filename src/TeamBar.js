import React from 'react';
import ReactDOM from 'react-dom';
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
        teammates:[<Teammate key='Byleth' unit='Byleth' removeTeammate={this.removeTeammate} changeHilightedUnit={this.props.changeHilightedUnit}/>,]
      }
    );
  }

  changeSelectedUnit(e){
    this.setState({selectedUnit:e.target.value});
  }


  removeCharacterSheet(value){
    this.props.removeCharacterSheet(value);
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

  createCharacterSheet = (value) =>{
    this.props.createCharacterSheet(value);
  }

  addTeammate = () =>{
    console.log('add mate' + this.state.selectedUnit);
    var currentTeam = this.state.teammates;
    currentTeam.push(<Teammate key={this.state.selectedUnit}
                               unit={this.state.selectedUnit}
                               removeBtnHandler={this.removeBtnHandler}
                               removeCharacterSheet={this.removeCharacterSheet}
                               changeHilightedUnit={this.props.changeHilightedUnit}/>
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
    return <div>
      {teammate_components}

      <select value={this.state.selectedUnit} onChange={this.changeSelectedUnit.bind(this)}>
        <option defaultValue disabled>select unit</option>
        {this.state.units}
      </select>
      <button type='button' onClick={this.addBtnHandler}>Add Teammate </button>
    </div>
  }

}

export default TeamBar;
