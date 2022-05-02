/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
window.addEventListener( "load", function () {
    const btn__element = document.getElementById( "btn__element" );
    btn__element.addEventListener( "click", function ( event ) {
      event.preventDefault();
      var state = document.getElementById( "btn__state" ).textContent;
      state++;
    document.getElementById( "btn__state" ).textContent=state;
      console.log(state);
    } );
  } );