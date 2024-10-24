const darkModeInput = document.querySelector('#dark_mode');
darkModeInput.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('dark');
});

const habIn = document.getElementById("habIn");
const habOut = document.getElementById("habOut");
const hablemos2 = document.getElementById("hablemos2")
const crossClose = document.getElementById("crossClose")

habIn.addEventListener("click", () => {
    hablemos2.checked = true;
})

crossClose.addEventListener("click", () => {
    hablemos2.checked = false;
})

