const locationText = document.querySelector(".location"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".location-new"),
    checkBtn = document.querySelector(".location-check");

let correctlocation, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Times Up! ${correctlocation.toUpperCase()} was the correct location.`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = locations[Math.floor(Math.random() * locations.length)];
    let locationArray = randomObj.location.split("");
    for (let i = locationArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [locationArray[i], locationArray[j]] = [locationArray[j], locationArray[i]];
    }
    locationText.innerText = locationArray.join("");
    hintText.innerText = randomObj.hint;
    correctlocation = randomObj.location.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctlocation.length);
}
initGame();

const checklocation = () => {
    let userlocation = inputField.value.toLowerCase();
    if (!userlocation) return alert("Please enter the location to check!");
    if (userlocation !== correctlocation) return alert(`Oops! ${userlocation} is not the correct location`);
    alert(`Congrats! ${correctlocation.toUpperCase()} is the correct location`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checklocation);