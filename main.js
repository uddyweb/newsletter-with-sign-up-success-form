const form = document.querySelector('.sign-up');
const inValide = document.querySelector('.invalid');
const input = document.querySelector('.email');
const card = document.querySelector('.content');
const disMiss = document.querySelector('.dismiss');
const reSet = document.querySelector('btn-2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inValidation = form.email.value;
    const regEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if(regEX.test(inValidation)){
        card.style.display = 'none';
        disMiss.style.display = 'block';
        email.style.border = '1px sold black';
    }else{
        inValide.textContent = 'Valid email required!';
        email.style.border = '1px solid red';
    }
})