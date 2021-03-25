const number_buttons = document.getElementsByName("number")
const equation = document.getElementById("equation")

function display_function() {
    for(let i = 0; i<number_buttons.length; i++) {
        let btn = number_buttons[i]
        btn.addEventListener('click', () => {
            print_to_equation(btn.innerText, equation)
        })
    }

}
display_function()

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