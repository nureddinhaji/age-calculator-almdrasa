const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const currentYear = new Date().getFullYear();

function checkDay(day) {
    if(day < 0 || day > 31 || day == "") {
        dayInput.classList.add("card__input--error")
        return false;
    } else {
        dayInput.classList.remove("card__input--error")
        return true;
    }
}

function checkMonth(month) {
    if(month < 0 || month > 12 || month == "") {
        monthInput.classList.add("card__input--error")
        return false;
    } else {
        monthInput.classList.remove("card__input--error")
        return true;
    }
}

function checkYear(year) {
    if(year < 0 || year > currentYear || year == "") {
        yearInput.classList.add("card__input--error")
        return false;
    } else {
        yearInput.classList.remove("card__input--error")
        return true;
    }
}

document.querySelector(".card__button").addEventListener("click", () => {
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    checkDay(day);
    checkMonth(month);
    checkYear(year);

    if(checkDay(day) && checkMonth(month) &&  checkYear(year)) {
        const birthDay = new Date(`${year}-${month}-${day}`);
    const dateNow = new Date();

    const ageMS = dateNow - birthDay

    const msInYear = 1000 * 60 * 60 * 24 * 365.25

    const ageYear = ageMS / msInYear
    
    document.querySelector(".card__result-age").textContent = Math.round(ageYear)
    }
})