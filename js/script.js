function areaSent() {
  //declaring variables
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let sumOfSides = sideA + sideB;
  let area = sumOfSides / 2 * height;
  //displaying calculations to screen
  document.getElementById("display-results").innerHTML = "The area of the trapezoid is " + area.toFixed(2) + " cm<sup>2</sup>."
}