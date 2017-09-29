import React, { Component } from 'react';
import Loading from './Loading/Loading.js';
import $ from 'jquery';

/*

import Weather from './components/Weather.js';


 npm install --save jquery
*/
class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
       is_loading: true,
       data: null

    };

    this.getData();
  }


  callback(){

  }

  getData(){
      // var url = "https://crossorigin.me/https://metaweather.com/api/location/2452078";
      // $.ajaxSetup({ dataType: "jsonp" });
      // $.getJSON(url +'?callback=?',function(data){
      // console.log(data);
      // });

      //  var callback = 'c'+Math.floor((Math.random()*100000000)+1);
  }

  render() {
    

    <Loading show={true} />

    return (
      <div>
          The Whether for Golden Valley, MN


        
      </div>
    );
  }
}

export default Weather;
