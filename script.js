const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const currentYear = new Date().getFullYear();

function cheakInputs(input, max, dom) {
    if (input < 0 || input > max || input == "" || !Number.isInteger(Number(input))) {
        dom.classList.add("card__input--error");
        return false;
    } else {
        dom.classList.remove("card__input--error");
        return true;
    }
}

document.querySelector(".card__button").addEventListener("click", () => {
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    const dayValidate = cheakInputs(day, 31, dayInput);
    const monthValidate = cheakInputs(month, 12, monthInput);
    const yearValidate = cheakInputs(year, currentYear, yearInput);

    if (dayValidate && monthValidate && yearValidate) {
        const birthDay = new Date(`${year}-${month}-${day}`);
        const dateNow = new Date();

        const ageMS = dateNow - birthDay;

        const msInYear = 1000 * 60 * 60 * 24 * 365.25;

        const ageYear = ageMS / msInYear;

        document.querySelector(".card__result-age").textContent =
            Math.round(ageYear);
    } else {
        document.querySelector(".card__result-age").textContent = "--";
    }
});
