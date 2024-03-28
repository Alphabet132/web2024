const nameInput = document.querySelector("#name-input");
inppass = document.querySelector('#name-input');
btn = document.querySelector('#submit-form');
let inputValue;
let form = document.querySelector('form');
nameInput.addEventListener("input", ()=> {
    inputValue = nameInput.value
    console.log(inputValue);
})

btn.setAttribute('disabled', true);
inppass.oninput = function () {
    if (inppass.value.length < 4) {
        btn.setAttribute('disabled', true);
    } else {
        btn.removeAttribute('disabled');
    }
}
nameInput.addEventListener("blur", ()=> {
    if (!inputValue || inputValue.length < 4) {
        nameInput.className = "input-error"
        const p = document.createElement("p")
        }
})

