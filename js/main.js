"use strict";

const CARD = document.querySelector(".card");


CARD.addEventListener("mousemove", function(e) {
    const MOUSE_POS_X = e.offsetX;
    const MOUSE_POS_Y = e.offsetY;

    //formula para sacar el angulo dependiendo de la posicion
    const ANGLE_X = ((MOUSE_POS_Y - CARD.height / 2) / (CARD.height / 2) * -15); 
    const ANGLE_Y = ((MOUSE_POS_X - CARD.width / 2) / (CARD.width / 2)) * 15;

    CARD.style.transform = `rotateX(${ANGLE_X}deg) rotateY(${ANGLE_Y}deg)`;
});

CARD.addEventListener("mouseout", function(e) {
    CARD.style.transform = ``;
});