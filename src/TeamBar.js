import React from 'react';
import ReactDOM from 'react-dom';
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';

class Teammate extends React.Component {
    constructor(){
      super();
    }

    // removeTeammate(unit){
    //   this.props.removeTeammate(unit);
    // }

    removeTeammate = (unitname) => {
      this.props.removeTeammate(unitname);
    }
    render() {
      var unitname = this.props.unit
      return <div>
          <h2>{this.props.unit}</h2>
          <button type='button' onClick={() => this.removeTeammate(unitname)}> -x- </button>
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
        teammates:[<Teammate key='Byleth' unit='Byleth' removeTeammate={this.removeTeammate}/>,]
      }
    );
  }

  changeSelectedUnit(e){
    this.setState({selectedUnit:e.target.value});
  }

  removeTeammate(value){
    console.log('removeteammate');
    var currentTeam = this.state.teammates;
    this.setState({
        teammates: currentTeam.filter(unit => unit.props.unit != value)
    });
  }

  addTeammate(){
    console.log('add mate' + this.state.selectedUnit);
    var currentTeam = this.state.teammates;
    currentTeam.push(<Teammate key={this.state.selectedUnit} unit={this.state.selectedUnit} removeTeammate={this.removeTeammate}/>);
    this.setState({teammates:currentTeam});
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
      <button type='button' onClick={this.addTeammate.bind(this)}>Add Teammate </button>
    </div>
  }

}

export default TeamBar;
