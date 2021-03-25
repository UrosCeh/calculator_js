const number_buttons = document.getElementsByName("number")
const equation = document.getElementById("equation-first")


for(let i = 0; i<number_buttons.length; i++) {
    let btn = number_buttons[i]
    btn.addEventListener('click', () => {
        print_to_equation(btn.innerText, equation)
    })
}

function print_to_equation(num, dest) {
    let val = dest.value
    if (val == "0") {
        val = ""
    }
    if(num == "."){
        if (!val.includes(".")) {
            val += num
        }
    }
    else {
        val += num
    }
    dest.value = val
}

function backspace() {
    equation.value = equation.value.slice(0, -1)
}

function sum() {
    
}

// function change_output() {
//     make_second_equation()
//     const equation = document.getElementById("equation-second")
// }

// function make_second_equation() {
//     const input = document.createElement("input")
//     input.type = "button"
//     input.id = "equation-second"
//     input.classList.add("equation")
//     input.value = "0"
//     document.getElementById("arguments").appendChild(input)
// }