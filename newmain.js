const number_buttons = document.getElementsByName("number")
const operator_buttons = document.getElementsByName("operator")
const display = document.getElementById("display")
const display_result = document.getElementById("display-result")
const calculator = document.getElementById("calculator")
// var result = 0
var values = new Array()


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
    if (action == "sum") {
        sum()
    }
    if (action == "subtract") {
        sub()
    }
    if (action == "multiply") {
        mul()
    }
    if (action == "divide") {
        div()
    }
    if (action == "equals") {
        eq()
    }
    display.value = "0"
}

function sum() {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        values.push(val)
    }
    else {
        let res = values[values.length-1] + val
        values.push(res)
        console.log(values)
    }
    display_result.value = values[values.length-1]
}

function sub() {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        values.push(val)
    }
    else {
        let res = values[values.length-1] - val
        values.push(res)
        console.log(values)
    }
    display_result.value = values[values.length-1]
}

function mul() {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        values.push(val)
    }
    else {
        let res = values[values.length-1] * val
        values.push(res)
        console.log(values)
    }
    display_result.value = values[values.length-1]
}

function div() {
    let val = parseFloat(display.value)
    if (values.length == 0) {
        values.push(val)
    }
    else {
        let res = values[values.length-1] / val
        values.push(res)
        console.log(values)
    }
    display_result.value = values[values.length-1]
}

function eq() {
    result = parseFloat(result) - parseFloat(values[values.length-1])
    display_result.value = result
}

function backspace() {
    display.value = display.value.slice(0, -1)
    if (display.value == "") {
        display.value = "0"
    }
}
