import React from 'react';
import ReactDOM from 'react-dom'
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';
import {spells, combat_arts, universal_arts, abilities} from './spells.js';


class CharacterPortrait extends React.Component{
    // for the future, find a way to switch portraits

    render(){
      var unit = this.props.unit;
      var portrait_path = '/images/'+unit+'_ts.png';
      return <div>
        <img src={process.env.PUBLIC_URL+portrait_path} />
      </div>
    }
}

class GrowthRates extends React.Component{

    render(){
      var intendedClass = this.props.intendedClass;
      var previewclass = this.props.previewclass;
      var currunit = this.props.unit;
      const stats = ['HP', 'Str', 'Mag', 'Dex', 'Spd', 'Lck', 'Def', 'Res' , 'Cha'];
      var classrate_intendedclass = class_rates[intendedClass][0];
      var classrate_previewclass = class_rates[previewclass][0]
      var baserate = base_stats[currunit][0];
      var tabledata = [];
      for(var i = 0; i< stats.length; i++){
        tabledata.push(<tr>
          <td>{stats[i]}</td>
          <td>{baserate[i]}</td>
          <td>{classrate_intendedclass[i]}</td>
          <td>{baserate[i] + classrate_intendedclass[i]}</td>
        </tr>);
      }
      var preview = [];
      for(var i = 0; i< stats.length; i++){
        preview.push(<tr>
          <td>{stats[i]}</td>
          <td>{baserate[i]}</td>
          <td>{classrate_previewclass[i]}</td>
          <td>{baserate[i] + classrate_previewclass[i]}</td>
        </tr>);
      }
      return <div>
          <h3>Growth Rates for {intendedClass}</h3>
          <table>
            <tbody>
              {tabledata}
            </tbody>
          </table>
          <h3>Preview Growth Rates for {previewclass}</h3>
          <table>
            <tbody>
              {preview}
            </tbody>
          </table>
      </div>
    }
}

class LikedAndLostItems extends React.Component{
    render(){
      var unit = this.props.unit;
      // var liked_items = base_stats[unit][2];
      // var lost_items = base_stats[unit][1];

      var likeditems = []
      var lostitems = []
      base_stats[unit][2].forEach(function(element){
        likeditems.push(<li>{element}</li>);
      });

      base_stats[unit][1].forEach(function(element){
        lostitems.push(<li>{element}</li>);
      });
      return <div>
          <h3>Liked Items</h3>
          <ul>{likeditems}</ul>
          <h3>Lost Items</h3>
          <ul>{lostitems}</ul>
      </div>
    }
}

class Ability extends React.Component{
    constructor(){
      super();

      this.state ={

      }
    }
}

class AbilityBar extends React.Component{
    constructor(){
      super();

      this.state = {
        abilities:[],

      }
    }
    // will render all skill components
    render(){
      return <div>

      </div>
    }
}

class Abilities extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      abilities:[],
    }
  }

  render(){


    return <div>

    </div>
  }
}

class Spells extends React.Component{

  render(){
    var black = spells[this.props.unit][0];
    var white = spells[this.props.unit][1];

    var blackarr = [];
    var whitearr = [];

    black.forEach(function(element){
      blackarr.push(<li>{element}</li>);
    });
    white.forEach(function(element){
      whitearr.push(<li>{element}</li>);
    });


    return <div>
      <h3>Dark/Black Magic</h3>
        <ul>{blackarr}</ul>
      <h3>White Magic</h3>
        <ul>{whitearr}</ul>
    </div>
  }
}



class CombatArts extends React.Component{
  constructor(props){
    super(props);
    var maxset = false;
    if (this.props.combatArts.length == 3){
    // if (!maxset){
      maxset = true;
    }
    this.state = {
      // options that have been saved already to parent state
      currentArt:'',
      maxset:maxset,
      arts:this.props.combatArts,
      art_options:[],
    };
  };

  componentDidMount(){
    var art_options = [];
    var all_arts = base_stats[this.props.unit][4].concat(universal_arts);

    // combat art options for specific unit
    all_arts.forEach(function(element){
      art_options.push(<option value={element}>{element}</option>);
    });

    this.setState({
      art_options:art_options,
    })
  }

  changeCurrentArt = (e) =>{
    console.log(e.target.value);
    this.setState({
      currentArt:e.target.value,
    })
  }

  setArray = () =>{
    var newartlist = this.state.arts.slice();
    // var currentArts = this.state.arts;
    var currentart = this.state.currentArt;
    newartlist.push(currentart)
    this.setState({
      arts:newartlist
    })

    this.props.setArray('combatArts', newartlist);
    console.log(newartlist);
  }

  //
  removeElementFromArray = (element) =>{
    console.log('remove ', element);
  }

  render(){
    let button;
    if(this.state.arts.length == 3){
      button = <button type='button'  disabled>Add Combat Art</button>;
    }
    else{
      button = <button type='button' onClick={this.setArray}>Add Combat Art</button>;
    }
    var arts = this.state.arts;
    var selectedCombatArts = [];
    arts.forEach(function(element){
      selectedCombatArts.push(<li>{element} <button value={element} onClick={this.removeElementFromArray.bind(this)}>x</button></li>);
    });


    return <div>
      <h3>Selected Combat Arts</h3>
      <ul>
        {selectedCombatArts}
      </ul>
      <select onChange={this.changeCurrentArt.bind(this)}>
        {this.state.art_options}
      </select>
      {button}
    </div>
  }


}

class CharacterSheet extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        class_options:[],
        intendedClass:props.intendedClass,
        current_class:'Noble',
      };

      this.bindClassToSheet = this.bindClassToSheet.bind(this);
    }

   componentDidMount(){
      var class_options = []
      var class_head = Object.keys(class_groups);
      class_head.forEach(function(key){
        var class_arr = class_groups[key];
        // var optgroup = document.createElement('OPTGROUP');
        // class_options.push(<optgroup label={key}>);

        class_arr.forEach(function(element){
          class_options.push(<option value={element}>{element}</option>);
        });
        // class_options.push(</optgroup>);
      });

      this.setState({
          class_options:class_options,
      });
    }

    bindClassToSheet = () =>{
      // var cc = this.state.current_class;
      // this.setState({
      //   stored_class:cc,
      // })
      //
      // console.log('bound' + this.props.unit + 'to' + this.state.stored_class);
      var newclass = this.state.current_class
      this.props.bindClassToSheet(newclass);
      this.setState({
        intendedClass:newclass
      })
    }

    changeCurrentClass = (e) =>{
      this.setState({
        current_class:e.target.value
      })
    }

    setArray = (field, array) =>{
      this.props.setArray(field, array);
    }

    render(){
      var unit = this.props.unit
      return <div>

        <CharacterPortrait unit={unit} />
        <select onChange={this.changeCurrentClass.bind(this)}>{this.state.class_options}</select>
        <button type='button' onClick={this.bindClassToSheet}>Bind Class to {this.props.unit}</button>

        <LikedAndLostItems unit={unit} />
        <Spells unit={unit} />
        <GrowthRates unit={unit}
          previewclass={this.state.current_class}
          intendedClass={this.state.intendedClass}
        />

        <CombatArts unit={unit}
          combatArts={this.props.characterStateObject['combatArts']}
          setArray={this.setArray}
        />
        // <Abilities unit={unit} />
        <h2>Character sheet for {unit}</h2>
      </div>
    }
}

export default CharacterSheet;
