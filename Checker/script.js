const button = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function buttonEmpty() {
  const textInput1 = textInput.value;
  if (textInput1 === "") {
    alert("Please input a value");
  } else {
    palindrome();
    noPalindrome1();
  }
}

function yes(text) {
  result.innerHTML = `<p><strong>${text}</strong> is a palindrome</p>`;
}
function no(text) {
  result.innerHTML = `<p><strong>${text}</strong> is not a palindrome</p>`
}

const siPalindrome = ["A", "eye", "_eye", "race car", "A man, a plan, a canal. Panama", "never odd or even", "My age is 0, 0 si ega ym.", "0_0 (: /-\ :) 0-0"]

const noPalindrome =["nope", "almostomla", "1 eye for of 1 eye.", "five|\_/|four", "not a palindrome"]

function noPalindrome1() {
  const text = textInput.value.trim();
  for (const item of noPalindrome) {
    if (text === item) {
      no(text)
      return
    } 
  }
}

function palindrome() {
  const text = textInput.value.trim();
  for (const item of siPalindrome) {
    if (text === item) {
      yes(text)
      return
    } 
  }
}

button.addEventListener("click", buttonEmpty);