(function(){
    emailjs.init("a5rbV4xMUmfpeQTh6");
})();

function sendMail() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        if (localStorage.getItem('MAILED')) {
            document.getElementById('alert-enviou-orcamento').style.display = 'block';
            event.preventDefault();
        } else {
            localStorage.setItem('MAILED', 'YES')
            emailjs.sendForm('service_qsyt7js', 'template_efs7zzr', '#contact-form')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                });
            form.reset();
        }
    });
}