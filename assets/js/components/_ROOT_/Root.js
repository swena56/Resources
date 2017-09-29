import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import SideBar from './../SideBar/SideBar.js';
import './App.css';


/*

// Initalize 
import Root from './components/_ROOT_/Root.js';

*/
class Root extends Component {

  callback1(){


  }
  render() {

    var title = "test"; 

    var content = {

        docs: (<iframe className="embed-responsive" src="https://laravel.com/docs"></iframe>),
        lara: (<iframe className="embed-responsive" src="https://laracasts.com"></iframe>),
        laranews: (<iframe src="https://laravel-news.com"></iframe>),
        forge: (<iframe src="https://forge.laravel.com"></iframe>),
        github: (<iframe src="https://github.com/laravel/laravel"></iframe>)
    };

    return (
      

      <div>
      
          <SideBar numbers={[
              { name : 'Documentation', content: content.docs   },
              { name : 'Laracasts', content: content.lara},
              { name : 'News', content: content.laranews},
              { name : 'Forge', content: content.forge},
              { name : 'Github', content: content.github}
              ]} />
      </div>
    );
  }
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
