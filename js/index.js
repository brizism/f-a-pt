import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

//Fetch animals from API
function fetchAnimals(e){
  e.preventDefault();

  // Get user input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // Fetch Pets
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=3228c2ad9cfafdbebc8f43e0e2b17955&animal=${animal}&location=${zip}&callback=callback`, {
    jsonpCallbackFunction: 'callback'
  })
    .then(res => res.json())
    .then(data => showAnimals(data.petfinder.pets.pet))
    .catch(err => console.log(err))
}

// Show listings of pets
function showAnimals(pets) {
  const results = document.querySelector('#results');

  //Clear first
  results.innerHTML = '';

  //Loop through pets
  pets.forEach(pet => {
    console.log(pet)
  })

}