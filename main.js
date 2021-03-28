// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
// po spusteni yacne hrat hudba
// onkeydown podminka sipky nahoru, dolu...

let center_left = window.innerWidth;
let center_up = window.innerHeight;




function stiskKlavesy(udalost) {

    //console.log(udalost.key);


    hraj('#hudba');
    // umis
    umisti_panacka(window.innerWidth/2, window.innerHeight/2)
    umisti_minci()

    if (udalost.key == 'ArrowUp') {
     umisti_panacka(window.innerWidth/2, window.innerHeight/2)
     console.log(udalost.key);

    	}

    else if (udalost.key == 'ArrowDown') {
    console.log(udalost.key);
    // jsi ještě děťátko
    }
    else if (udalost.key == 'ArrowLeft') {
    console.log(udalost.key);
    // důchodce nebo cokoliv jiného
    }

    else if (udalost.key == 'ArrowRight'){
    console.log(udalost.key);
    // důchodce nebo cokoliv jiného
    }

}

function umisti_minci() {
    let poz_l = document.getElementById('mince').style.left = Math.floor(Math.random() * window.innerWidth)  + "px";
    let poz_t = document.getElementById('mince').style.top =  Math.floor(Math.random() * window.innerHeight) + "px";
    console.log(poz_l, poz_t);
    return poz_l, poz_t;
}

function umisti_panacka(x,y) {
    let poz_l = document.getElementById('panacek').style.left = x + "px";
    let poz_t = document.getElementById('panacek').style.top = y + "px";
    return poz_l, poz_t;
}

function hraj(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.play();
}
