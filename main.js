// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
// po spusteni yacne hrat hudba
// onkeydown podminka sipky nahoru, dolu...

let panacek, panacekX, panacekY, panacekW, panacekH, panacekPozice;
let mince, minceX, minceY, minceW, minceH;


function priNacteni() {
    panacek = document.getElementById('panacek');
    mince = document.getElementById('mince');
    panacekW = panacek.width;
    panacekH = panacek.height;
    panacekPozice = umisti_panacka(window.innerWidth/2, window.innerHeight/2);
    minceW = mince.width
    minceH = mince.height
    minceX, minceY = umisti_minci()
    console.log(panacekPozice)
}

function stiskKlavesy(udalost) {

    //console.log(udalost.key);

     hraj('#hudba');


    if (udalost.key == 'ArrowUp') {
     panacek.src = "obrazky/panacek-nahoru.png";
     panacekPozice = umisti_panacka( panacekPozice[0], panacekPozice[1] - 10);
     console.log(udalost.key,  panacekPozice[0], panacekPozice[1]);
    	}

    else if (udalost.key == 'ArrowDown') {
    panacek.src = "obrazky/panacek.png";
    panacekPozice = umisti_panacka( panacekPozice[0], panacekPozice[1] + 10);
    console.log(udalost.key);
    // jsi ještě děťátko
    }
    else if (udalost.key == 'ArrowLeft') {
    panacek.src = "obrazky/panacek-vlevo.png";
    panacekPozice = umisti_panacka( panacekPozice[0] - 10, panacekPozice[1]);
    console.log(udalost.key);
    // důchodce nebo cokoliv jiného
    }

    else if (udalost.key == 'ArrowRight'){
    panacek.src = "obrazky/panacek-vpravo.png";
    panacekPozice = umisti_panacka( panacekPozice[0] + 10, panacekPozice[1]);
    console.log(udalost.key);
    // důchodce nebo cokoliv jiného
    }

}

function umisti_minci() {
    let poz_l = mince.style.left = Math.floor(Math.random() * window.innerWidth)  + "px";
    let poz_t = mince.style.top =  Math.floor(Math.random() * window.innerHeight) + "px";
    console.log(poz_l, poz_t);
    return poz_l, poz_t;
}

function umisti_panacka(x,y) {
    if (x < 0) {
    x = 0;
    }
    if (y < 0) {
        y = 0;
        }
    if (x > window.innerWidth-panacekW) {
        x = window.innerWidth-panacekW ;
    }
    if (y > window.innerHeight-panacekH) {
            y = window.innerHeight-panacekH;
        }
    let poz_l = panacek.style.left = x + "px";
    let poz_t = panacek.style.top = y + "px";

    return [parseInt(poz_l), parseInt(poz_t)];
}

function hraj(elementSelector) {
  let zvuk;
  zvuk = document.querySelector(elementSelector);
  zvuk.play();
}
