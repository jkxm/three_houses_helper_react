import React from 'react';
import ReactDOM from 'react-dom'
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';
import {spells, combat_arts, universal_arts, allabilities, universal_abilities} from './spells.js';


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
      for(i = 0; i< stats.length; i++){
        preview.push(<tr>
          <td>{stats[i]}</td>
          <td>{baserate[i]}</td>
          <td>{classrate_previewclass[i]}</td>
          <td>{baserate[i] + classrate_previewclass[i]}</td>
        </tr>);
      }
      return <div>
        <table>
        <tr>
          <td>
            <div>
              <h4>Growth Rates for {intendedClass}</h4>
              <table>
                <tbody>
                  {tabledata}
                </tbody>
              </table>
            </div>
          </td>
          <td>
            <div>
                <h4>Preview Growth Rates for {previewclass}</h4>
                <table>
                  <tbody>
                    {preview}
                  </tbody>
                </table>
            </div>
          </td>
        </tr>
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
      return <div className='col-lg-2'>
          <h4>Liked Items</h4>
          <ul>{likeditems}</ul>
          <h4>Lost Items</h4>
          <ul>{lostitems}</ul>
      </div>
    }
}

class Abilities extends React.Component{
    constructor(props){
      super(props);
      var maxset = false;
      if(this.props.abilities.length === 5){
        maxset = !maxset;
      };
      this.state ={
        currentAbility:'',
        maxset:maxset,
        abilities:this.props.abilities,
        ability_options:[],

      }

      this.removeElementFromArray = this.removeElementFromArray.bind(this);
    }

    componentDidMount(){
      var ability_options = [];
      var all_abilities = base_stats[this.props.unit][3][1].concat(universal_abilities);

      all_abilities.forEach(function(element){
        ability_options.push(<option value={element}>{element}</option>);
      });
      this.setState({
        currentAbility:all_abilities[0],
        ability_options:ability_options,
      });

    };

    changeCurrentAbility = (e) =>{
      // console.log(e.target.value);
      this.setState({
        currentAbility:e.target.value,
      })
    };

    setArray = () =>{
      var abilities = this.state.abilities;
      var currentability = this.state.currentAbility;
      abilities.push(currentability)
      this.setState({
        abilities:abilities
      })
      this.props.setArray('abilities', abilities);
    };

    removeElementFromArray = (element) =>{
      // console.log(element.target.value);
      var abilities = this.state.abilities.filter(el => el !== element.target.value)
      this.setState({
        abilities:abilities
      });
      this.props.removeElementFromArray('abilities', abilities);
      // console.log('remove', element.target.value);
    };

    createAbiltiesList = () =>{
      var abilities = this.state.abilities;
      var selectedabilities = [];
      var remove = (element) => this.removeElementFromArray;
      // console.log(arts);
      abilities.forEach(function(element){
        // console.log(element);
        var li =  <li>{element} : {allabilities[element][0]}
                    <button  type='button' onClick={remove(element)} value={element} > x </button>
                  </li>
        selectedabilities.push(li);
      });

      return selectedabilities;
    };

    render(){
      let button;
      // if(this.state.abilities){
      if(this.state.abilities.length === 5){
        button = <button type='button'  disabled>+</button>;
      }
      else{
        button = <button type='button' onClick={this.setArray}>+</button>;
      }

      var listcontent = this.createAbiltiesList();

      return <div className='col-lg-2'>
          <h4>Selected Abilities</h4>
          <ul>
            {listcontent}
          </ul>
          <select onChange={this.changeCurrentAbility.bind(this)}>
            {this.state.ability_options}
          </select>
          {button}
      </div>
    };
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


    return <div className='col-lg-2'>
      <h4>Dark/Black Magic</h4>
        <ul>{blackarr}</ul>
      <h4>White Magic</h4>
        <ul>{whitearr}</ul>
    </div>
  }
}

class CombatArts extends React.Component{
  constructor(props){
    super(props);
    var maxset = false;
    if (this.props.combatArts.length === 3){
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

    this.removeElementFromArray = this.removeElementFromArray.bind(this);
  };

  componentDidMount(){
    var art_options = [];
    var all_arts = base_stats[this.props.unit][4].concat(universal_arts);

    // combat art options for specific unit
    all_arts.forEach(function(element){
      art_options.push(<option value={element}>{element}</option>);
    });

    this.setState({
      currentArt:all_arts[0],
      art_options:art_options,
    })
  }

  changeCurrentArt = (e) =>{
    // console.log(e.target.value);
    this.setState({
      currentArt:e.target.value,
    })
  }

  setArray = () =>{
    // var newartlist = this.state.arts.slice();
    var arts = this.state.arts;
    // var currentArts = this.state.arts;

    var currentart = this.state.currentArt;
    arts.push(currentart)
    // newartlist.push(currentart)
    this.setState({
      arts:arts
    })
    this.props.setArray('combatArts', arts);
  };

  removeElementFromArray = (element) =>{
    // console.log(element.target.value);
    var arts = this.state.arts.filter(el => el !== element.target.value)
    this.setState({
      arts:arts
    });
    this.props.removeElementFromArray('combatArts', arts);
    // console.log('remove', element.target.value);
  };

  createCombatArtList = () =>{
    var arts = this.state.arts;
    var selectedCombatArts = [];
    var remove = (element) => this.removeElementFromArray;
    // console.log(arts);
    arts.forEach(function(element){
      // console.log(element);
      var li =  <li>{element} : {combat_arts[element][1]}
                  <button  type='button' onClick={remove(element)} value={element} > x </button>
                </li>
      selectedCombatArts.push(li);
    });

    return selectedCombatArts;
  };

  render(){
    let button;
    if(this.state.arts.length === 3){
      button = <button type='button'  disabled>+</button>;
    }
    else{
      button = <button type='button' onClick={this.setArray}>+</button>;
    }

    var listcontent = this.createCombatArtList();

    return <div className='col-lg-3'>
      <h4>Selected Combat Arts</h4>
      <ul>
        {listcontent}
      </ul>
      <select onChange={this.changeCurrentArt.bind(this)}>
        {this.state.art_options}
      </select>
      {button}
    </div>
  };

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

    removeElementFromArray = (field, array) =>{
      this.props.removeElementFromArray(field, array);
    }

    render(){
      var unit = this.props.unit
      return <div>

        <h3>Character sheet for {unit}</h3>
        <div>
          <div className='col-lg-4'>
            <CharacterPortrait unit={unit} />
            <div>
              <select onChange={this.changeCurrentClass.bind(this)}>{this.state.class_options}</select>
              <button type='button' onClick={this.bindClassToSheet}>Bind Class to {this.props.unit}</button>
            </div>
          </div>
          <div className='col-lg-8'>
            <GrowthRates unit={unit}
              previewclass={this.state.current_class}
              intendedClass={this.state.intendedClass}
              removeElementFromArray={this.removeElementFromArray}
            />
          </div>
        </div>

        <div className='col-lg-12'>
            <LikedAndLostItems unit={unit} />
            <Spells unit={unit} />
            <CombatArts unit={unit}
              combatArts={this.props.characterStateObject['combatArts']}
              setArray={this.setArray}
              removeElementFromArray={this.removeElementFromArray}
            />
            <Abilities unit={unit}
                abilities={this.props.characterStateObject['abilities']}
                setArray={this.setArray}
                removeElementFromArray={this.removeElementFromArray}
              />
        </div>


      </div>
    }
}

export default CharacterSheet;
