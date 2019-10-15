import React from 'react';
import ReactDOM from 'react-dom'
import {class_rates, class_groups, base_stats, houses, unit_list} from './growth_rates.js';





class CharacterPortrait extends React.Component{
    // for the future, find a way to switch portraits

    render(){
      var unit = this.props.unit;
      var portrait_path = '/images/'+unit+'_ts.png';
      return <div>
        <img src={process.env.PUBLIC_URL+portrait_path}  height="100" width="100" />
      </div>
    }
}


class CharacterSheet extends React.Component {
    constructor(){
      super();

      this.state = {
        unit:'Byleth',
      };
    }
    render(){
      return <div>
        // add char stuff HERE
        <CharacterPortrait unit={this.props.unit} />
        <h2>Character sheet for {this.props.unit}</h2>
      </div>
    }
}

export default CharacterSheet;
