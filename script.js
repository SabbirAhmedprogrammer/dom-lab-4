let buttonContainer = document.querySelector(".button-container");
let total = document.querySelector(".total");
let currentTotal = 0;

//not efficient way
// buttonContainer.addEventListener("click", (e) => {
//     if (e.target.classList.contains("cola")) {
//         currentTotal += 2.00;
//         total.innerText = `Total:$${currentTotal}`
//     } else if (e.target.classList.contains("peanuts")) {
//         currentTotal += 3.00;
//         total.innerText = `Total:$${currentTotal}`
//     } else if (e.target.classList.contains("chocolate")) {
//         currentTotal += 4.00;
//         total.innerText = `Total:$${currentTotal}`
//     } else {
//         currentTotal += 6.00;
//         total.innerText = `Total:$${currentTotal}`
//     }
// })

//data-amount was put in the html so the getAttribute got it
buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount);
        currentTotal += amount;
        total.innerText = `Total:$${currentTotal.toFixed(2)}`;
    }
});


let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container");


coinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(coinForm);
    let amount = data.get("amount");
    let coin = data.get("coin");
    console.log(amount, coin);


    //loop
    for (let i = 0; i < amount; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        //set inner text for the div
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);

    }
    coinForm.reset();

});

coinContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }

});


//3
let lightBulb = document.querySelector(".light-buttons");
let bulb = document.querySelector(".bulb")
lightBulb.addEventListener("click", (event) => {
    if (event.target.classList.contains("on")) {
        bulb.classList.add("light");
    } else if (event.target.classList.contains("off")) {
        bulb.classList.remove("light");
    } else if (event.target.classList.contains("light-toggle")) {
        bulb.classList.toggle("light");
    } else {
        bulb.remove();
        let bulbButtons = document.querySelectorAll(".btn");
        //review-changes buttons to be disabled!
        bulbButtons.forEach((button) => {
            button.disabled = true;
        })
    }
});

