import React, { Component } from 'react';
import './SideBar.css';

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
          
          <li key={index} 
            onClick={ () => this.changePage(index)} 
            className="sidebar-item">  

              <b> {number.name} </b>
          </li>
      );

      var content = null;
      if( this.props.numbers ){

          if( this.props.numbers[this.state.content] ){
               content = this.props.numbers[this.state.content].content;
          } else {
                 content = this.props.numbers[0].content;
          }
      }
      
      var margin = {  'width': '100%', 'marginLeft':'-25%'};

      /*
      
      
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading sidebar">

                              {listItems}
                            </div>

                            <div className="sidebar-content" >


                                {content}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


       */
      return(
        <div className="container-fluid">

          <div id="sidebar" className="row content">

              <div className="col-sm-3">
              <div id="sidebar-title">
                    Laravel
                </div>
                <ul className="nav nav-pills nav-stacked">
                  {listItems}
                </ul>
              </div>

              <div id="sidebar-content" className="col-sm-9">
                  {content}
              </div>
          </div>  
          

          <div class="row content">
          <footer id="sidebar-footer" className="container-fluid">
            <p>Footer Text</p>
          </footer>
          </div>

        </div>

      );
  }

}

