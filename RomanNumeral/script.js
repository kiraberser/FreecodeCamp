const button = document.getElementById("convert-btn");
const numberinput = document.getElementById("number")
const output = document.getElementById("output")

const romanNumerals = {
    "IX": 9,
    "XVI": 16,
    "DCXLIX": 649,
    "MXXIII": 1023,
    "MMMCMXCIX": 3999
};

const checkInput = () => {
  const inputInt = parseInt(numberinput.value);

  if (!inputInt || isNaN(inputInt)) {
    return result.textContent = "Please enter a valid number"
  }  

  if (inputInt >= 4000) {
    return result.textContent = "Please enter a number less than or equal to 3999"
  }
  
  if (inputInt === -1){
    return result.textContent = "Please enter a number greater than or equal to 1"
  } else {
    romanNumber(inputInt);
  }
} 

const romanNumber = () => {
  const inputInt = parseInt(numberinput.value);
  for(let key in romanNumerals) {
    if (romanNumerals[key] === inputInt){
      return result.textContent = key 
    } else {
        return result.textContent = "Number Not Found"
    }
  }
}

button.addEventListener("click", checkInput);

numberinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});