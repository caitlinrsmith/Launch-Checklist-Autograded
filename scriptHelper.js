// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget= document.getElementById('missionTarget');
  missionTarget.innerHTML = ` <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">`;
}

function validateInput(input) {
  if (input === '') {
    return 'Empty';
  }
  if (isNaN(input)) {
    return 'Not a Number';
  } else {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.getElementById('launchStatus');
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');

  if (
    validateInput(pilot) === 'Empty' ||
    validateInput(copilot) === 'Empty' ||
    validateInput(fuelLevel) === 'Empty' ||
    validateInput(cargoLevel) === 'Empty'
  ) {
    alert('All fields are required!');
  }
  if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    list.style = 'visibility: visible';
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = 'green';
  }
  if (validateInput(pilot) === 'Not a Number') {
    list.style = 'visibility: visible';
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;}
//   else {
//     alert('Pilot Name must be letters!');
//     list.style = 'visibility: visible';
//     pilotStatus.innerHTML = `Pilot not ready for launch`;
//     launchStatus.innerHTML = 'Shuttle Not ready for Launch';
//     launchStatus.style.color = 'red';
//   }
  if (validateInput(copilot) === 'Not a Number') {
    list.style = 'visibility: visible';
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;}
//   else {
//     alert('Co-pilot Name must be letters!');
//     list.style = 'visibility: visible';
//     copilotStatus.innerHTML = `Co-pilot not ready for launch`;
//     launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
//     launchStatus.style.color = 'red';

    if (validateInput(fuelLevel) === 'Not a Number') {
      alert('Fuel Level must be a number!');
    }
    if (validateInput(cargoLevel) === 'Not a Number') {
      alert('Cargo Mass must be a number!');
    }
    if (fuelLevel < 10000) {
      list.style = 'visibility: visible';
      console.log(fuelLevel);
      fuelStatus.innerHTML = 'Fuel level too low for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'red';
    } else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
    }
    if (cargoLevel > 10000) {
      list.style = 'visibility: visible';
      cargoStatus.innerHTML =
        'Cargo mass too heavy for launch';
      launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
      launchStatus.style.color = 'red';
    }
    else {
      cargoStatus.innerHTML =
        'Cargo mass low enough for launch';
    }
  }


async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let pickedPlanetIndex = Math.floor(Math.random() * planets.length);
  return planets[pickedPlanetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;