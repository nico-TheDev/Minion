const head = document.querySelector('.head');
const mouth = document.querySelector('.mouth');
const body = document.querySelector('.body');
const leftArm = document.querySelector('.arm-left');
const rightArm = document.querySelector('.arm-right');
const evilHair = document.querySelector('.evil-hair');
const tooth = document.querySelectorAll('.tooth');
const eyeSkin = document.querySelector('.eye .eye-skin');
const hairs = document.querySelectorAll('.hair');
let btn = document.querySelector('.magic');

let skin = '#ab71c9 !important';

btn.addEventListener('click',()=>{
    head.classList.toggle('badMinionSkin');
    console.log(mouth);
    mouth.classList.toggle('badMinionSkin');
    eyeSkin.classList.toggle('badMinionSkin');
    evilHair.classList.toggle('grow');
    leftArm.classList.toggle('badMinionSkin');
    rightArm.classList.toggle('badMinionSkin');
    leftArm.classList.toggle('extendLeftArm');
    rightArm.classList.toggle('extendRightArm');
    body.classList.toggle('badMinionSkin');
    tooth.forEach(item=>{
        item.classList.toggle('grow');
    });
    hairs.forEach(item=>{
        item.classList.toggle('hairRemove');
    });
});