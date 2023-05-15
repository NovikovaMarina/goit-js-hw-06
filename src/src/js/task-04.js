const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEL = document.querySelector("#value");

let counterValue = 0;

buttonDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
})

buttonIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEL.textContent = counterValue;
})


