//Mascara do telefone
//Linkar o parâmetro do confirm password com a password

const required = document.querySelectorAll('input[required]');


required.forEach((required) => {
    required.onblur = function(){ this.classList.add('visitado')}
});
