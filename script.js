// Write your JavaScript code here!

window.addEventListener('load', function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
  
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
      })
      .then(function () {
        let pickedPlanet = pickPlanet(listedPlanets);
        let name = pickedPlanet.name;
        let diameter = pickedPlanet.diameter;
        let star = pickedPlanet.star;
        let distance = pickedPlanet.distance;
        let moons = pickedPlanet.moons;
        let imageUrl = pickedPlanet.image;
        addDestinationInfo(
          document,
          name,
          diameter,
          star,
          distance,
          moons,
          imageUrl
        );
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      });
    this.window.addEventListener('submit', function () {
      event.preventDefault();
      let list = document.getElementById('faultyItems');
      let pilot = document.querySelector('input[name=pilotName]').value;
      let copilot = document.querySelector('input[name=copilotName]').value;
      let fuelLevel = document.querySelector('input[name=fuelLevel]').value;
      let cargoLevel = document.querySelector('input[name=cargoMass]').value;
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
  });
  