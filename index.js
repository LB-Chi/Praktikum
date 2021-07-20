
let button 

window.onload = function() {
    button = document.getElementById("alertButton")

    console.log(button)

    if(button) {
        button.addEventListener('click', onClick)
    }

}

function onClick() {
    alert('Achtung! Dieser Button ist gefährlich :D')
}