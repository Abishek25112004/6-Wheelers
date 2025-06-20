let loginBtn = document.querySelector('.loginBtn')
let loginOutline = document.querySelector('.login-outline');
let overlay = document.querySelector('.overlay')

loginBtn.addEventListener('click',()=>{
   loginOutline.style.display = 'block';
   overlay.style.display = 'block';
})

let xBtn = document.querySelector('.x-btn');

xBtn.addEventListener('click',()=>{
    loginOutline.style.display = "none";
    overlay.style.display = "none";

})