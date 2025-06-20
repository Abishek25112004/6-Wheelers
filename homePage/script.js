//    Login display

let loginBtn = document.querySelector('.loginBtn')
let loginOutline = document.querySelector('.login-outline');
let overlay = document.querySelector('.overlay')
let body = document.querySelector('.body')

loginBtn.addEventListener('click',()=>{
   loginOutline.classList.add("login-outline-display");
   overlay.style.display = 'block';
   body.classList.add("scroll");
})

let xBtn = document.querySelector('.x-btn');

xBtn.addEventListener('click',()=>{
    loginOutline.classList.remove("login-outline-display");
    overlay.style.display = "none";
    body.classList.remove("scroll")
})

//  Forget Password displayfor

let forgetPassBtn = document.querySelector('.forgetPass-btn-in-signin')
let forgetOutline = document.querySelector('.forget-outline')

forgetPassBtn.addEventListener('click',()=>{
    forgetOutline.classList.add("forget-outline-display");
    overlay.style.display = 'block';
    loginOutline.classList.remove("login-outline-display");

})

let forgetXBtn = document.querySelector('.forget-x-btn');

forgetXBtn.addEventListener('click',()=>{
    forgetOutline.classList.remove("forget-outline-display");
    overlay.style.display = 'none';
})

let forgetBackToLogin = document.querySelector('.forget-back-to-login')

forgetBackToLogin.addEventListener('click',()=>{
    forgetOutline.classList.remove("forget-outline-display");
    loginOutline.classList.add("login-outline-display");
})


