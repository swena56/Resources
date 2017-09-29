import React, { Component } from 'react';
import './w3.css';

/*

// Initalization
import SideBar from './components/SideBar/SideBar.js';

//Example

<SideBar numbers={[
  { id: 1, name : 'Name1', content: 'content1'},
  { id: 2, name : 'Name2', content: 'content2'},
  { id: 3, name : 'Name3', content: 'content3'},
  { id: 4, name : 'Name4', content: 'content4'},
  { id: 5, name : 'Name5', content: 'content5'}
  ]} 
/>

*/

class Footer extends Component {


}

export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
       content: null
    };
  }

  changePage(index){

    if( index ){
      console.log(this.props.numbers[index]);  
       console.log("Page Change");
      this.setState({content: index});
    }
  }
 
  render(){

      var divStyle = {
        width: '25%',
      
      };
      const numbers = this.props.numbers;
      const listItems = numbers.map((number, index) =>
          
          <a key={index} onClick={ () => this.changePage(index)} className="w3-bar-item w3-button">{number.name}</a>
      );

      var content = null;
      if( this.props.numbers ){

          if( this.props.numbers[this.state.content] ){
               content = this.props.numbers[this.state.content].content;
          } else {
                 content = this.props.numbers[0].content;
          }
      }
      
      var margin = {  'width': '100%', 'margin-left':'-25%'};
    return(<div>

      <div className="w3-sidebar w3-light-grey w3-bar-block"  >
        <h3 className="w3-bar-item">Menu</h3>
        <div className="w3-sidebar w3-bar-block" style={divStyle}> 
           {listItems}
        </div>
      </div>

      <div className="w3-container" >

        <div className="w3-teal">
          <h1>{this.props.title || "Page"}</h1>
        </div> 
          <div style={margin}>
          {content}
          </div>   
          
      </div>

      </div>);
  }

}

