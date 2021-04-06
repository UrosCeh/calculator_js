const number_buttons = document.getElementsByName("number")
const operator_buttons = document.getElementsByName("operator")
const display = document.getElementById("display")
const display_result = document.getElementById("display-result")
var values = new Array()
var operator = ""


for (let i = 0; i < number_buttons.length; i++) {
    number_buttons[i].addEventListener("click", () => {
        display_number(number_buttons[i].value)   
    })
}

for (let i = 0; i < operator_buttons.length; i++) {
    operator_buttons[i].addEventListener("click", () => {
        operator_buttons[i].style.border = "1px solid black"
        for (let j = 0; j < operator_buttons.length; j++) {
            if (i != j) {
                operator_buttons[j].style.border = "none"
            }
        }
        const action = operator_buttons[i].dataset.action
        operation_in_progress(action)
    })
}

function display_number(value) {
    if(value == "." && display.value.includes(value)) {
        return
    }
    display.value += value
}

function operation_in_progress(action) {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        operator = action
        calculate(val)
    }
    else {
        calculate(val)
        operator = action
    }
    display.value = ""
}

function equals() {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        return
    }
    else {
        calculate(val)
        display.value = display_result.value
        display_result.value = ""
        values = new Array()
    }
}

function backspace() {
    display.value = display.value.slice(0, -1)
}

function calculate(val) {
    let res
    if (Number.isNaN(val)) {
        return
    }
    if (values.length == 0) {
        res = val
    }
    else {
        let num = values[values.length-1]
        if (operator == "add") {
            res = num + val
        }
        if (operator == "subtract") {
            res = num - val
        }
        if (operator == "multiply") {
            res = num * val
        }
        if (operator == "divide") {
            res = num / val
        }
    }
    values.push(res)
    display_result.value = res
}
