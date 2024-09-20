// DOM Intro
console.log(document); // Affiche l'objet document dans la console

// DOM Methods
const loadingIndicator = document.createElement('div'); // Crée un nouvel élément div pour l'indicateur de chargement
loadingIndicator.classList.add('loading'); // Ajoute la classe 'loading' au div
document.body.appendChild(loadingIndicator); // Ajoute le div au corps du document

// DOM Document
console.log(document.title); // Affiche le titre de la page
document.title = 'Updated Interactive Web Page'; // Change le titre de la page

// DOM Elements
const form = document.querySelector('#contact-form'); // Sélectionne le formulaire
const nameInput = document.querySelector('#name'); // Sélectionne le champ de saisie pour le nom
const emailInput = document.querySelector('#email'); // Sélectionne le champ de saisie pour l'email
const messageInput = document.querySelector('#message'); // Sélectionne le champ de saisie pour le message

// DOM HTML
const container = document.querySelector('.container'); // Sélectionne l'élément avec la classe container
const successMessage = document.createElement('p'); // Crée un nouvel élément p pour le message de succès
successMessage.innerHTML = 'Thank you for your message!'; // Définit le contenu HTML du paragraphe
successMessage.style.display = 'none'; // Masque le message de succès initialement
container.appendChild(successMessage); // Ajoute le paragraphe au container

// Gestionnaires d'événements
function handleFormSubmit(event) {
  event.preventDefault(); // Empêche la soumission du formulaire
  loadingIndicator.style.display = 'block'; // Affiche l'indicateur de chargement
  setTimeout(() => {
    loadingIndicator.style.display = 'none'; // Masque l'indicateur de chargement après 2 secondes
    successMessage.style.display = 'block'; // Affiche le message de succès
    form.reset(); // Réinitialise le formulaire
  }, 2000);
}

function handleThemeToggle() {
  document.body.classList.toggle('dark-mode'); // Change le thème de la page
}

function handleNameInput(event) {
  console.log(`Name: ${event.target.value}`); // Affiche la valeur du champ de saisie pour le nom dans la console
}

function handleEmailInput(event) {
  console.log(`Email: ${event.target.value}`); // Affiche la valeur du champ de saisie pour l'email dans la console
}

function handleMessageInput(event) {
  console.log(`Message: ${event.target.value}`); // Affiche la valeur du champ de saisie pour le message dans la console
}

function handleThemeToggleLog() {
  console.log('Theme toggled'); // Affiche un message dans la console lorsque le bouton est cliqué
}

// DOM Forms
form.addEventListener('submit', handleFormSubmit);

// DOM CSS
const themeToggleBtn = document.querySelector('.theme-toggle'); // Sélectionne le bouton pour changer le thème
themeToggleBtn.addEventListener('click', handleThemeToggle);

// DOM Animations
const animatedDiv = document.querySelector('.loading'); // Sélectionne l'élément avec la classe loading
animatedDiv.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 1000, // Durée de l'animation en millisecondes
  iterations: Infinity // Nombre de répétitions de l'animation
});

// DOM Events
nameInput.addEventListener('input', handleNameInput);
emailInput.addEventListener('input', handleEmailInput);
messageInput.addEventListener('input', handleMessageInput);

// DOM Event Listener
themeToggleBtn.addEventListener('click', handleThemeToggleLog);

// DOM Navigation
const firstChild = container.firstElementChild; // Sélectionne le premier enfant de l'élément container
console.log(firstChild); // Affiche le premier enfant dans la console

// DOM Nodes
console.log(nameInput.nodeType); // Affiche le type de nœud de l'élément nameInput

// DOM Collections
const allInputs = document.getElementsByTagName('input'); // Sélectionne tous les éléments input
console.log(allInputs.length); // Affiche le nombre d'éléments input

// DOM Node Lists
const allDivs = document.querySelectorAll('div'); // Sélectionne tous les éléments div
allDivs.forEach(div => {
  console.log(div.textContent); // Affiche le contenu de chaque élément div
});
