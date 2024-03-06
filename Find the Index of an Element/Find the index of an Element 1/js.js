function findIndex() {
    let inputArray = document.getElementById('inputArray').value;
    let targetElement = document.getElementById('targetElement').value;
    
    let array = inputArray.split(',').map(item => item.trim());
    let index = array.indexOf(targetElement);
    
    if (index !== -1) {
      document.getElementById('result').innerText = `Index of ${targetElement}: ${index}`;
    } else {
      document.getElementById('result').innerText = `${targetElement} not found in the array.`;
    }
  }