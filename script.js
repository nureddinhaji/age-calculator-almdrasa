const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

function checkDay(day) {
    if(day < 0 || day > 31) {
        dayInput.classList.add("card__input--error")
    } else {
        dayInput.classList.remove("card__input--error")
    }
}

function checkMonth(month) {
    if(month < 0 || month > 12) {
        monthInput.classList.add("card__input--error")
    } else {
        monthInput.classList.remove("card__input--error")
    }
}

document.querySelector(".card__button").addEventListener("click", () => {
    const day = dayInput.value;
    const month = document.querySelector("#month").value;
    const year = yearInput.value;

    checkDay(day);
    checkMonth(month);
    const birthDay = new Date(`${year}-${month}-${day}`);
    const dateNow = new Date();

    const ageMS = dateNow - birthDay

    const msInYear = 1000 * 60 * 60 * 24 * 365.25

    const ageYear = ageMS / msInYear
    
    document.querySelector(".card__result-age").textContent = Math.round(ageYear)
})