// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


let panacek, panacekX, panacekY, panacekW, panacekH, panacekPozice;
let mince, minceX, minceY, minceW, minceH;

/**
 * nastaveni po nacteni stranky
 */

function priNacteni() {
    panacek = document.getElementById('panacek');
    mince = document.getElementById('mince');
    score = document.getElementById('score');
    panacekW = panacek.width;
    panacekH = panacek.height;
    panacekPozice = umisti_panacka(window.innerWidth/2, window.innerHeight/2);
    minceW = mince.width
    minceH = mince.height
    mincePozice = umisti_minci()
    console.log(panacekPozice)
}

/**
 * Funkce pro stisk klavesy
 */

function stiskKlavesy(udalost) {
    console.log(udalost)
     hraj('#hudba');

    if (udalost.key == 'ArrowUp') {
     panacek.src = "obrazky/panacek-nahoru.png";
     panacekPozice = umisti_panacka( panacekPozice[0], panacekPozice[1] - 10);
     console.log(udalost.key,  panacekPozice[0], panacekPozice[1]);
    	}

    if (udalost.key == 'ArrowDown') {
    panacek.src = "obrazky/panacek.png";
    panacekPozice = umisti_panacka( panacekPozice[0], panacekPozice[1] + 10);

    }
    if (udalost.key == 'ArrowLeft') {
    panacek.src = "obrazky/panacek-vlevo.png";
    panacekPozice = umisti_panacka( panacekPozice[0] - 10, panacekPozice[1]);

    }

    if (udalost.key == 'ArrowRight'){
    panacek.src = "obrazky/panacek-vpravo.png";
    panacekPozice = umisti_panacka( panacekPozice[0] + 10, panacekPozice[1]);

    }

    otestujKolizi(panacekPozice)

}

/**
 * Funkce pro umisteni mince
 *
 * vraci aktualni pozici
 */

function umisti_minci() {
    let poz_l = mince.style.left = Math.floor(Math.random() * window.innerWidth)  + "px";
    let poz_t = mince.style.top =  Math.floor(Math.random() * window.innerHeight) + "px";
    return [parseInt(poz_l), parseInt(poz_t)];
}


/**
 * Funkce pro umisteni panacka
 *
 * @param x{int} na pozici x
 * @param y{int} na pozici y
 * vraci aktualni pozici
 */

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

/**
 * fuknce pro otestování kolize panáčka s mincí
 */

function otestujKolizi(panacekPozice) {
	if (!( panacekPozice[0] + panacekW < mincePozice[0] || mincePozice[0] + minceH < panacekPozice[0] || panacekPozice[1] + panacekH < mincePozice[1] || mincePozice[1] + minceH < panacekPozice[1])) {
        	// panacek a mince se prekryvaji
        mincePozice = umisti_minci()
        score.innerHTML = parseInt(score.innerHTML) + 1;
        if (score.innerHTML == 5) {
            hraj('#zvukfanfara');
        }
        else {
            hraj('#zvukmince');
        }
    }
}

// funkce  spusti hudbu
function hraj(elementSelector) {
    let zvuk;
    zvuk = document.querySelector(elementSelector);
    zvuk.play();
}
