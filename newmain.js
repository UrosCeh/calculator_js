const number_buttons = document.getElementsByName("number")
const operator_buttons = document.getElementsByName("operator")
const display = document.getElementById("display")
const display_result = document.getElementById("display-result")
const calculator = document.getElementById("calculator")
var result = 0
var values = new Array()

for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener("click", () => {
        display_number(number_buttons[i].value)   
    })
}

for (let i = 0; i < operator_buttons.length; i++) {
    operator_buttons[i].addEventListener("click", () => {
        // operator_buttons[i].style.backgroundColor = "red"
        const action = operator_buttons[i].dataset.action
        operation_in_progress(action)
    })
}

function display_number(value) {
    if(display.value == "0") {
        display.value = ""
    }
    if(value == ".") {
        if(display.value.includes(value)){
            return
        }
    }
    display.value += value
}

function operation_in_progress(action) {
    values.push(display.value)
    if (action == "sum") {
        sum()
    }
    display.value = "0"
}

function sum() {
    console.log(values)
    result = parseFloat(result) + parseFloat(values[values.length-1])
    display_result.value = result
}
