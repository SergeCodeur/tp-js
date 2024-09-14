const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const message = document.getElementById('message');
const eventBox = document.querySelector('.eventBox');
const boxText = document.querySelector('.box-text');

// function submitEvent(e) {
//     e.preventDefault();
//     const name = nameInput.value;
//     const age = parseInt(ageInput.value);

//     if (name && !isNaN(age)) {
//         let personalizedMessage = `Bonjour, ${name}! Vous avez ${age} ans.`;

//         if (age < 18) {
//             personalizedMessage += ' Vous êtes mineur.';
//         } else {
//             personalizedMessage += ' Vous êtes majeur.';
//         }

//         message.textContent = personalizedMessage;
//         nameInput.value = '';
//         ageInput.value = '';
//     } else {
//         message.textContent = 'Veuillez entrer un nom et un âge valides.';
//     }

// }
// submitButton.addEventListener('click', submitEvent);

function clickFunction() {
    eventBox.style.backgroundColor = 'green';
    eventBox.style.color = 'white';
    boxText.textContent = 'Vous avez cliqué sur moi !';
    eventBox.classList.add('click');
    setTimeout(() => {
        eventBox.classList.remove('click');
    }, 2000);
}

function doubleClickFunction() {
    eventBox.style.backgroundColor = 'yellow';
    eventBox.style.color = 'black';
    boxText.textContent = 'Vous avez double-cliqué sur moi !';
}

function mouseOverFunction() {
    eventBox.style.backgroundColor = 'orange';
    eventBox.style.color = 'white';
    boxText.textContent = 'Vous êtes sur moi !';
}

function mouseOutFunction() {
    eventBox.style.backgroundColor = 'blue';
    eventBox.style.color = 'white';
    boxText.textContent = 'Je suis sorti !';
}

function mouseDownFunction() {
    eventBox.style.backgroundColor = 'purple';
    eventBox.style.color = 'white';
    boxText.textContent = 'Vous avez appuyé sur moi !';
}

eventBox.addEventListener('click', clickFunction);

eventBox.addEventListener('dblclick', doubleClickFunction);

eventBox.addEventListener('mouseover', mouseOverFunction);

eventBox.addEventListener('mouseout', mouseOutFunction);

eventBox.addEventListener('mousedown', mouseDownFunction);