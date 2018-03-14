$(document).ready(function() {
   initializeApp();
});

function initializeApp() {
   leftToRightFlip();
}

function leftToRightFlip() {
    let screenWidth = window.innerWidth;
    let tileWidth = $('.flip-container').css('width');
    for (let i = 0; i < tileWidth.length; i++) {
        if (tileWidth[i] === 'p') {
            tileWidth = tileWidth.slice(0, i);
        }
    }
    let multiplier = Math.ceil(screenWidth / tileWidth);

    //column iterator
    let row = 0;
    let timer = 0;
    for (let column = 0; column < multiplier; column++) {
        setTimeout(function() {
            $($('.flipper')[row * 40 + column]).css('transform', 'rotateY(180deg)');
        }, timer);
        timer += 50;
    }
}

// function createTile(tileCount) {
//     for (let i = 0; i < tileCount; i++) {
//
//     }
// }