document.querySelector("#calculate").addEventListener("click", function () {
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let output = document.querySelector("#result");
  //BMI calculation
  let result = (weight / (Math.pow(height, 2) / 10000)).toFixed(1);
//   console.log(result);
  if (result >= 30.0) {
    output.textContent = "overweight" + result
    // console.log("over weight" + result);
  } else if (result >= 18.5) {
    output.textContent = "normal weight" + result
    // console.log("normal weight" + result);
  } else if (result < 18.5) {
    output.textContent = "underweight" + result
    // console.log("under weight" + result);
  }
});
