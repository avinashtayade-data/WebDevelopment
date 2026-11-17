// square operations
let sides =[1,3,5,7,9,11];

// higher order function
function iterateOnSidesArray(sidesArray, squareOperationalLogic) {
  let squareOperatedArray = [];
  for (let sidesArrayIndex = 0; sidesArrayIndex <= sidesArray.length - 1; sidesArrayIndex++) {
    squareOperatedArray.push(`${squareOperationalLogic(sidesArray.at(sidesArrayIndex))}`);
  }
  return squareOperatedArray.join(" | ");
}

// callback functions
document.getElementById("squares_area_values").innerHTML = `[${iterateOnSidesArray(sides, side => `${side**2}cm<sup>2</sup>`)}]`;
document.getElementById("squares_perimeter_values").textContent = `[${iterateOnSidesArray(sides, side => `${side*4}cm`)}]`;
