/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Zach Wetsel';
let currentYear = '2024';
let profilePicture = 'images/profile.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile picture of ${fullName}`);





/* Step 5 - Array */
const foods = ["Spicy", "Indian", "Chinese", "Mexican"];
foodElement.textContent = foods.join(', ');

const newFood = 'Tikka Masala';
foods.push(newFood);
foodElement.innerHTML += `<br>${foods.join(', ')}`;

foods.shift();
foodElement.innerHTML += `<br>${foods.join(', ')}`;

foods.pop();
foodElement.innerHTML += `<br>${foods.join(', ')}`;






