// UI Logic
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
// import { Animal } from './../src/tamagotchi.js'
// ("<p>Your current age on Mercury is: "+ newAge.all[0] +"</p>");
$(document).ready(function() {

  $('#giphyButton').click(function() {

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=dragon&api_key=${process.env.GIPHY_KEY}&limit=1&rating=G&lang=en`;

    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $('.showGif').append("<img src='" +`${response.data[0].images.downsized_large.url}` + "'>")
      console.log(response);
      // $('.showGif').html("<img src = '${response.data[0].url}'  + "alt='dragon'>"");
      // data[""0""].images.downsized_large.url
    }
  });
});