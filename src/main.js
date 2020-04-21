// UI Logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { Animal } from './../src/tamagotchi.js';

$(document).ready(function() {
    //API NIGHT FURY 
  let request = new XMLHttpRequest();
  let url = `https://api.giphy.com/v1/gifs/search?q=happy-cute-dragon-sticker&api_key=${process.env.GIPHY_KEY}&limit=25&offset=12`

 
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  };

  request.open("GET", url, true);
  request.send();


  let getElements = function(response) {
    $('.night-fury').append("<img class='icon' src='" +`${response.data[0].images.downsized_large.url}` + "' alt='night-fury'>");
  };
    
  // LIGHT FURY API 
  let request2 = new XMLHttpRequest();
  let url2 = `https://api.giphy.com/v1/gifs/search?q=light-fury-sticker&api_key=${process.env.GIPHY_KEY}&limit=3&offset=2&rating=G&lang=en`

  request2.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response2 = JSON.parse(this.responseText);
      getElements2(response2);
    }
  };

  request2.open("GET", url2, true);
  request2.send();

  let getElements2 = function(response2) {
    $('.light-fury').append("<img class='icon' src='" +`${response2.data[0].images.downsized_large.url}` + "' alt='light-fury'>");
  };


  // API OTHER FURY 
  let request3 = new XMLHttpRequest
  let url3 = `https://api.giphy.com/v1/gifs/search?q=happy-cute-dragon-sticker&api_key=${process.env.GIPHY_KEY}&limit=25&offset=9`

  request3.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response3 = JSON.parse(this.responseText);
      getElements3(response3);
    }
  };

  request3.open("GET", url3, true);
  request3.send();

  let getElements3 = function(response3) {
    $('.other-fury').append("<img class='icon' src='" +`${response3.data[0].images.downsized_large.url}` + "' alt='other-fury'>");
  };

  console.log("response2 :", response2)
  console.log("response :", response)
  
});

  // // $('#night-fury').click(function() {
  //   const nightFury = new Animal(10, 10, 10);
  //   nightFury.timedDecrease();
  //   // });