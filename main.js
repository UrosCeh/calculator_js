const number_buttons = document.getElementsByClassName("button-number")
const arguments = document.getElementById("arguments")

function display_function() {
    for(let i = 0; i<number_buttons.length; i++) {
        let btn = number_buttons[i]
        btn.addEventListener('click', () => {
            console.log(btn.innerText)
        })
    }

}
display_function()
// function nwtf() {

//     number_buttons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             console.log(btn.innerText)
//         })
//     });
// }
// nwtf()