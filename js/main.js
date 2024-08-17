document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const message = document.getElementById('message');

    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const name = nameInput.value;
        const age = parseInt(ageInput.value);

        if (name && !isNaN(age)) {
            let personalizedMessage = `Bonjour, ${name}! Vous avez ${age} ans.`;

            if (age < 18) {
                personalizedMessage += ' Vous êtes mineur.';
            } else {
                personalizedMessage += ' Vous êtes majeur.';
            }

            message.textContent = personalizedMessage;
        } else {
            message.textContent = 'Veuillez entrer un nom et un âge valides.';
        }
    });
});