function convertTemperature() {
    var tempType = document.getElementById("temp-type").value;
    var tempValue = document.getElementById("temp-value").value;
    var celsius = 0, fahrenheit = 0, kelvin = 0;

    if (tempType == "celsius") {
      celsius = parseFloat(tempValue);
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
    } else if (tempType == "fahrenheit") {
      fahrenheit = parseFloat(tempValue);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = (fahrenheit + 459.67) * 5/9;
    } else if (tempType == "kelvin") {
      kelvin = parseFloat(tempValue);
      celsius = kelvin - 273.15;
      fahrenheit = (kelvin * 9/5) - 459.67;
    }

    document.getElementById("celsius-output").innerHTML = celsius.toFixed(2);
    document.getElementById("fahrenheit-output").innerHTML = fahrenheit.toFixed(2);
    document.getElementById("kelvin-output").innerHTML = kelvin.toFixed(2);
  }