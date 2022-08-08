const signInBtn  = document.querySelector('.signin-btn');
const signInBtng  = document.querySelector('.signing-btn');
const formBox = document.querySelector('.form-box');
const body = document.querySelector('.block');
const buttonColor = document.querySelector('.block-item__btn')



signInBtng.addEventListener('click', function() {
    formBox.classList.add('active'); 
    body.classList.add('active');
    buttonColor.classList.add('active'); 
});

signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
    buttonColor.classList.remove('active');
});


