const dayInput = document.querySelector("#day");
function checkDay(day) {
    if(day < 0 || day > 31) {
        dayInput.classList.add("card__input--error")
    } else {
        dayInput.classList.remove("card__input--error")
    }
}

document.querySelector(".card__button").addEventListener("click", () => {
    const day = dayInput.value;
    const month = document.querySelector("#month").value;
    const year = document.querySelector("#year").value;

    checkDay(day);
    const birthDay = new Date(`${year}-${month}-${day}`);
    const dateNow = new Date();

    const ageMS = dateNow - birthDay

    const msInYear = 1000 * 60 * 60 * 24 * 365.25

    const ageYear = ageMS / msInYear
    
    console.log(birthDay)
    document.querySelector(".card__result-age").textContent = Math.round(ageYear)
})