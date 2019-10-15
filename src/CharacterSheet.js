import React from 'react';
import ReactDOM from 'react-dom'
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';





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
      var currclass = this.props.currentclass;
      var currunit = this.props.unit;
      const stats = ['HP', 'Str', 'Mag', 'Dex', 'Spd', 'Lck', 'Def', 'Res' , 'Cha'];
      var classrate = class_rates[currclass][0];
      var baserate = base_stats[currunit][0];
      var tabledata = [];
      for(var i = 0; i< stats.length; i++){
        tabledata.push(<tr>
          <td>{stats[i]}</td>
          <td>{baserate[i]}</td>
          <td>{classrate[i]}</td>
          <td>{baserate[i] + classrate[i]}</td>
        </tr>);
      }
      return <div>
          <table>
            {tabledata}
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
          <ul>{likeditems}</ul>
          <ul>{lostitems}</ul>
      </div>
    }
}



class SkillBar extends React.Component{
    constructor(){
      super();

      this.state = {
        skills:[],

      }
    }
    // will render all skill components
    render(){
      return <div>

      </div>
    }
}

class CharacterSheet extends React.Component {
    constructor(){
      super();

      this.state = {
        unit:'Byleth',
        class_options:[],
        current_class:'Noble',
      };
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
          unit:this.props.unit,
          class_options:class_options,
      });
    }

    changeCurrentClass = (e) =>{
      this.setState({
        current_class:e.target.value
      })
    }

    render(){
      return <div>

        <CharacterPortrait unit={this.props.unit} />
        <select onChange={this.changeCurrentClass.bind(this)}>{this.state.class_options}</select>

        <LikedAndLostItems unit={this.props.unit} />

        <GrowthRates unit={this.props.unit} currentclass={this.state.current_class} />

        <h2>Character sheet for {this.props.unit}</h2>
      </div>
    }
}

export default CharacterSheet;
