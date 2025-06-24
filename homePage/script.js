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
     body.classList.add("scroll");
})

let setPassXBtn = document.querySelector('.set-pass-x-btn')

setPassXBtn.addEventListener('click',()=>{
    setPassOutline.classList.remove("set-pass-outline-display");
    overlay.style.display = 'none';
    body.classList.remove("scroll");
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

//   verification success

let setPassConfirmBtn = document.querySelector('.set-pass-confirm-btn')
let verifySuccessOutline = document.querySelector('.verify-success-outline')

setPassConfirmBtn.addEventListener('click',()=>{
    verifySuccessOutline.classList.add("verify-success-outline-display")
    overlay.style.display = 'block';
    body.classList.add("scroll");
    setPassOutline.classList.remove("set-pass-outline-display");
})

let verifySuccessXBtn = document.querySelector('.verify-success-x-btn')

verifySuccessXBtn.addEventListener('click',()=>{
     verifySuccessOutline.classList.remove("verify-success-outline-display")
     overlay.style.display = 'none';
    body.classList.remove("scroll");
})

let verifySuccessContinueBtn = document.querySelector('.verify-success-continue-btn')

verifySuccessContinueBtn.addEventListener('click',()=>{
    verifySuccessOutline.classList.remove("verify-success-outline-display")
    loginOutline.classList.add("login-outline-display");
})

//    create a new account 

let createAccOutline = document.querySelector('.create-acc-outline')
let createNewAccBtn = document.querySelector('.createNewAcc-btn-in-signin')

createNewAccBtn.addEventListener('click',()=>{
    createAccOutline.classList.add('create-acc-outline-display')
    overlay.style.display = 'block';
     body.classList.add("scroll");
     loginOutline.classList.remove("login-outline-display");
})

let createAccXBtn = document.querySelector('.create-acc-x-btn')

createAccXBtn.addEventListener('click',()=>{
     createAccOutline.classList.remove('create-acc-outline-display')
    overlay.style.display = 'none';
     body.classList.remove("scroll");
})

//   create account OTP

let createAccContinueBtn = document.querySelector('.create-acc-continue-btn')
let createAccOtpOutline = document.querySelector('.create-acc-OTP-outline')

createAccContinueBtn.addEventListener('click',()=>{
    createAccOtpOutline.style.display="block"
     overlay.style.display = 'block';
     body.classList.add("scroll");
      createAccOutline.classList.remove('create-acc-outline-display')
})

let createAccOtpContinueBtn = document.querySelector('.create-acc-OTP-continue-btn')
let createAccVerifyOutline = document.querySelector('.create-acc-verify-outline')

createAccOtpContinueBtn.addEventListener('click',()=>{
    createAccVerifyOutline.style.display='block'
     overlay.style.display = 'block';
     body.classList.add("scroll");
     createAccOtpOutline.style.display="none"
})

let createAccOtpXBtn = document.querySelector('.create-acc-OTP-x-btn')

createAccOtpXBtn.addEventListener('click',()=>{
    createAccOtpOutline.style.display='none'
     overlay.style.display = 'none';
     body.classList.remove("scroll");
})

let creatAccOtpBackBtn = document.querySelector('.create-acc-OTP-back-btn')

creatAccOtpBackBtn.addEventListener('click',()=>{
      createAccOtpOutline.style.display='none'
       createAccOutline.classList.add('create-acc-outline-display')
    overlay.style.display = 'block';
     body.classList.add("scroll");
})
