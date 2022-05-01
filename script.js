//Fazer aviso de não igualdade entre senhas

//Masks phone number
const phoneNum = document.querySelector('#phone');
phoneNum.addEventListener('keydown', () => {
    num = phoneNum.value;
    if(num.length == 1)
    {
        num = '(' + num;
    }
    else if(num.length == 4)
    {
        num = num + ')' + ' ';
    }
    else if(num.length == 9)
    {
        num = num + '-';
    }

    phoneNum.value = num;
});

//Allows invalid style only after input loses focus
const required = document.querySelectorAll('input[required]');
required.forEach((required) => {
    required.onblur = function(){ this.classList.add('visited')}
});

//Match passwords
const password = document.querySelector('#pwd');
const check = document.querySelector('#checkPwd');
const msg = document.querySelector('.errorMsg');

check.addEventListener('keyup', () => {
    if(check.value === '')
    {
        msg.textContent='Enter a password';
    }
    else if(check.value == password.value)
    {
        check.classList.remove('error');
        check.classList.add('ok');
        password.classList.remove('error');
        password.classList.add('ok');
        msg.setAttribute('id', 'match');
        msg.textContent= "OK!";
    }
    else if(check.value != password.value)
    {
        check.classList.add('error');
        check.classList.remove('ok');
        password.classList.add('error');
        password.classList.remove('ok');
        msg.removeAttribute('id', 'match');
        msg.textContent= "Passwords do not match";
    }
});

