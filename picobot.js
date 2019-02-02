let left = document.querySelector('input[name="West"]');
let right = document.querySelector('input[name="East"]');
let up  =  document.querySelector('input[name="North"]');
let down = document.querySelector('input[name="South"]');
let goo = document.querySelector('input[name="Go"]');
let reset = document.querySelector('input[name="Reset"]');


window.onkeydown= function(event) {
    switch (event.keyCode) {
        case 37 : left.click(); break;
        case 38 : up.click(); break;
        case 39 : right.click(); break;
        case 40 : down.click(); break;
        case  82: reset.click(); break;
        case 71: goo.click();break;
        default:break;
    }
}



