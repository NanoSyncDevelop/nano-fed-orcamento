let dataAtual = new Date();

let dia = dataAtual.getDate().toString();
let mes = (dataAtual.getMonth() + 1).toString();
let ano = dataAtual.getFullYear().toString();

window.onload = function() {
    emailjs.init("a5rbV4xMUmfpeQTh6");
    if (localStorage.getItem('MAILED_AT')) {
        const storageDate = localStorage.getItem('MAILED_AT').split('/');
        if (storageDate[0].includes(dia) && storageDate[1].includes(mes) && storageDate[2].includes(ano)) {
            document.getElementById('alert-error-01').style.display = 'block';
            document.getElementById('submit-button').disabled = 'true';
        } else {
            localStorage.removeItem('MAILED_AT')
        }
    }
};

function sendMail() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        if (localStorage.getItem('MAILED_AT')) {
            event.preventDefault();
        } else {
            localStorage.setItem('MAILED_AT', dia + '/' + mes + '/' + ano)
            emailjs.sendForm('service_qsyt7js', 'template_efs7zzr', '#contact-form')
                .then(function() {
                    document.getElementById('alert-success-01').style.display = 'block';
                }, function() {
                    document.getElementById('alert-error-01').textContent = 'Ocorreu um erro desconhecido, tente novamente em breve.';
                });
            form.reset();
            event.preventDefault();
        }
    });
}