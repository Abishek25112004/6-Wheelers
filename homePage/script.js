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

//  Forget Password display

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
    body.classList.remove("scroll")
})

let forgetBackToLogin = document.querySelector('.forget-back-to-login')

forgetBackToLogin.addEventListener('click',()=>{
    forgetOutline.classList.remove("forget-outline-display");
    loginOutline.classList.add("login-outline-display");
})

let forgetBackBtn = document.querySelector('.forget-back-btn')

forgetBackBtn.addEventListener('click',()=>{
    forgetOutline.classList.remove("forget-outline-display");
    loginOutline.classList.add("login-outline-display");
})

//    OTP Verification

let resetBtn =  document.querySelector('.reset-btn')
let OtpOutline = document.querySelector('.OTP-outline')

resetBtn.addEventListener('click',()=>{
   OtpOutline.style.display = "block"
   forgetOutline.classList.remove("forget-outline-display");
   overlay.style.display = 'block';
})

let OtpXBtn = document.querySelector('.OTP-x-btn')

OtpXBtn.addEventListener('click',()=>{
    OtpOutline.style.display = "none"
    overlay.style.display = 'none';
    body.classList.remove("scroll")
})

let OptBackToLogin = document.querySelector('.OTP-back-to-login')

OptBackToLogin.addEventListener('click',()=>{
    OtpOutline.style.display = "none"
    loginOutline.classList.add("login-outline-display");
})

let OtpBackBtn = document.querySelector('.OTP-back-btn')

OtpBackBtn.addEventListener('click',()=>{
    OtpOutline.style.display = "none"
    forgetOutline.classList.add("forget-outline-display");
})

//     Confirm password

let OtpContinueBtn = document.querySelector('.OTP-continue-btn')
let setPassOutline = document.querySelector('.set-pass-outline')

OtpContinueBtn.addEventListener('click',()=>{
    setPassOutline.classList.add("set-pass-outline-display");
    overlay.style.display = 'block';
     OtpOutline.style.display = "none"
})

let setPassXBtn = document.querySelector('.set-pass-x-btn')

setPassXBtn.addEventListener('click',()=>{
    setPassOutline.classList.remove("set-pass-outline-display");
    overlay.style.display = 'none';
})

let setPassBackToLoginBtn = document.querySelector('.set-pass-back-to-login-btn')

setPassBackToLoginBtn.addEventListener('click',()=>{
    setPassOutline.classList.remove("set-pass-outline-display");
    loginOutline.classList.add("login-outline-display");
})

let setPassBackBtn = document.querySelector('.set-pass-back-btn')

setPassBackBtn.addEventListener('click',()=>{
    setPassOutline.classList.remove("set-pass-outline-display");
     OtpOutline.style.display = "block"
})

