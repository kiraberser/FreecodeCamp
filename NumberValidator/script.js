const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');
const userInput = document.getElementById('user-input');

const phoneRegex = [
  /^1\s\d{3}-\d{3}-\d{4}$/,                 
  /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,             
  /^1\(\d{3}\)\d{3}-\d{4}$/,                 
  /^1\s\d{3}\s\d{3}\s\d{4}$/,                
  /^\d{10}$/,                               
  /^\d{3}-\d{3}-\d{4}$/,                     
  /^\(\d{3}\)\d{3}-\d{4}$/                    
];

checkBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  
  if(!userInput.value){
    alert("Please provide a phone number")
    return;
  } 
  const isValid = phoneRegex.some(regex => regex.test(userInputValue));
  

   let currentContent = `<div class="${isValid ? 'valid' : 'invalid'}">${isValid ? 'Valid US number:' : 'Invalid US number:'} ${userInputValue}</div>`;
      
  
  
  resultDiv.innerHTML += currentContent;
})

clearBtn.addEventListener('click', () => {
  userInput.value = "";
  resultDiv.innerText = "";
})
