/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
window.addEventListener( "load", function () {
    const form = document.getElementById( "forma" );
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      const weight = form.search.value;
      console.log(weight);
      var svarai = weight * 2.2046;
      var gramai = weight / 0.0010000;
      var Uncijos = weight * 35.274;
      console.log(svarai, gramai, Uncijos);
      document.getElementById("svarai").innerHTML = svarai;
      document.getElementById("gramai").innerHTML = gramai;
      document.getElementById("Uncijos").innerHTML = Uncijos;
    } );
  } );