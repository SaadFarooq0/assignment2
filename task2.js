// Get elements by their IDs
const textParagraph = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');
const changeStyleButton = document.getElementById('changeStyleButton');

// Change text content when the "Change Text" button is clicked
changeTextButton.addEventListener('click', () => {
  textParagraph.textContent = 'The text has been changed!';
});

// Change background color when the "Change Background Color" button is clicked
changeStyleButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightblue'; // Change background color
});
