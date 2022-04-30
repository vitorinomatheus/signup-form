const required = document.querySelectorAll('input[required]');


required.forEach((required) => {
    required.onblur = function(){ this.classList.add('visitado')}
});
