window.onload = function() {
    emailjs.init("a5rbV4xMUmfpeQTh6");

    if (localStorage.getItem('MAILED')) {
        document.getElementById('alert-error-01').style.display = 'block';
        document.getElementById('submit-button').disabled = 'true';
    }
};

function sendMail() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        if (localStorage.getItem('MAILED')) {
            event.preventDefault();
        } else {
            localStorage.setItem('MAILED', 'YES')
            emailjs.sendForm('service_qsyt7js', 'template_efs7zzr', '#contact-form')
                .then(function(response) {
                    document.getElementById('alert-success-01').style.display = 'block';
                }, function(error) {
                    document.getElementById('alert-error-01').textContent = 'Ocorreu um erro desconhecido, tente novamente em breve.';
                });
            form.reset();
            event.preventDefault();
        }
    });
}