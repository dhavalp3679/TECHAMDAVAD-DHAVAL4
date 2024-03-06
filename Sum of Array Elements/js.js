function createPerson() {
    // Get values from input fields
    let name = document.getElementById('nameInput').value;
    let age = document.getElementById('ageInput').value;
    let country = document.getElementById('countryInput').value;
    
    // Create person object
    let person = {
      name: name,
      age: age,
      country: country
    };
    
    // Display created person object
    document.getElementById('personDetails').innerHTML = "Person Object: " + JSON.stringify(person);
  }n