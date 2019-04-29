/*eslint-disable no-unused-vars*/
import React, {Component} from 'react';
import Dragula from 'react-dragula';
/*eslint-enable no-unused-vars*/
import  '../../../node_modules/dragula/dist/dragula.css';

class Dragular extends Component{
  constructor(...args){
    super(...args);

  }



  render(){
    return (
      <ul id="items">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    );
  }

}

export default Dragular;
