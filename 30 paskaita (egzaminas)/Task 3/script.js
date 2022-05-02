/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

window.addEventListener( "load", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
      XHR.addEventListener( "load", function(event) {
        var responseArray = JSON.parse(event.target.responseText);
        responseArray.forEach(display);
        console.log( event.target.responseText );
      } );
      XHR.addEventListener( "error", function( event ) {
        alert( 'Oops! Something went wrong.' );
      } );
      XHR.open( "get", ENDPOINT,false );
      XHR.send();
    }
    function display(user) {
        document.getElementById( "output" ).textContent+="\n"+user.login + "\n" + user.avatar_url+"\n";
    }
    const button = document.getElementById( "btn" );
    button.addEventListener( "click", function ( event ) {
      event.preventDefault();
     document.getElementById( "message" ).remove();
     sendData();
    } );
  } );