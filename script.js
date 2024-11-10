function parseOperation (operation, num1, num2) {
    if (operation === "+") {
        return num1 + num2;
    }
    else if (operation === "-") {
        return num1 - num2;
    }
    else if (operation === "÷") {
        return Math.round(num1 / num2);
    }
    else if (operation === "×") {
        return num1 * num2;
    }
}

let number = "";
let save = "";
let operation = "";
let inOp = false;

const numberBtns = document.querySelectorAll(".number");
const output = document.querySelector(".output");
const backspace = document.querySelector(".backspace");
const del = document.querySelector(".delete");
const opsBtns = document.querySelectorAll(".operation")
const equal = document.querySelector(".equal");

for (const btn of numberBtns) {
    btn.addEventListener("click", () => {
        number += btn.innerHTML;
        output.innerHTML = number;
    });
}

backspace.addEventListener("click", () => {
    number = number.substring(0, number.length - 1);
    output.innerHTML = number;
    if (output.innerHTML === "") {
        output.innerHTML = "0";
    }
})

del.addEventListener("click", () => {
    number = "";
    output.innerHTML = "0";
    inOp = false;
    save = ""
})

for (const btn of opsBtns) {
    btn.addEventListener("click", () => {
        if (inOp) {
            let result = parseOperation(btn.innerHTML, parseInt(save), parseInt(number));
            number = "";
            output.innerHTML = number;
            inOp = false;
        }
        else {
            save = output.innerHTML;
            operation = btn.innerHTML;
            output.InnerHTML = "0"
            inOp = true;
            number = "";
        }
    })
}

equal.addEventListener("click", () => {
    if (inOp) {
        let result = parseOperation(operation, parseInt(save), parseInt(number));
        number = "";
        output.innerHTML = result;
        inOp = false;
    }
})


