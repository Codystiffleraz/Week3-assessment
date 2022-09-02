let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

function favColor (evt){
    evt.preventDefault()

    alert('My Favorite Color is Teal/Turquoise')
}

function favPlace (evt){
    evt.preventDefault()

    alert('My Favorite Place is my home')
}

function favRitual (evt){
    evt.preventDefault()

    alert('My Favorite Ritual is listening to music at the Jim')
}

color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)