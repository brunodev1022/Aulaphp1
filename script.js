document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;
        
        if (nomeInput.value.trim() === '') {
            alert('Por favor, insira seu nome.');
            nomeInput.focus();
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            alert('Por favor, insira seu e-mail.');
            emailInput.focus();
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert('Por favor, insira um e-mail válido.');
            emailInput.focus();
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});