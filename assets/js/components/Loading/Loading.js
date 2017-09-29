import React, { Component } from 'react';

import style1 from './svg/style1.svg';
import style2 from './svg/style2.svg';
import style3 from './svg/style3.svg';
import style4 from './svg/style4.svg';
import style5 from './svg/style5.svg';
import style6 from './svg/style6.svg';
import style7 from './svg/style7.svg';
import style8 from './svg/style8.svg';
import './CSS/loading.css';
import './CSS/spinning_globes.css';
import './CSS/columns.css';

/*

// Initalize 
import Loading from './components/Loading/Loading.js';

useage:
<Loading show={true} />

*/

class Loading extends Component {
	constructor () {
		super();
		this.state = {
		  show: true
		};

	    this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ show: true });
  }
  
  handleCloseModal () {
    this.setState({ show: false });
  }
  
  render() {


    if( this.props.show == false || this.state.show == false ){
      return null;
    }

    
    var color = { color: '#79bbb5',
      width: '200px',
      height: '100px',
      overflow:'hidden'
    };

  // return (
  //   <div>
  //     <div id="backdrop"></div>
  //     <div className="modal">
  //       <div style={color} className="la-ball-square-clockwise-spin la-2x">
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //           <div></div>
  //        </div>
  //     </div>
  //   </div>

  // );

//
    var size =  {
      width: "80px", height: "80px", 
      'padding-top': '10px',
      'line-width': '100px'
    };
    return (

      <div>
      	  <div id="backdrop"></div>
  	      <div className="modal popup show">
            <div className="w3-row-padding">
              <div className="w3-half"> 
              <img style={size} src="https://media3.giphy.com/media/9wbzlCmiTbIwU/giphy.gif"  />  
               </div>
              <div className="w3-half"> 
              <img src={style8} className="loader loader--style1" alt="loading"/>  
              <span className="popuptext"> 
              <em>
                <b>Loading</b>
              </em> 
            </span>
             </div>
            </div>
      </div>
      </div>
    );
  }
}

export default Loading;