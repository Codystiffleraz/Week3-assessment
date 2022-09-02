console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Successfully Submitted');
}

function catCompliment(evt){
	evt.preventDefault()

	alert('You\'re an awesome person')
}

let form = document.querySelector('#contact');
let pic = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', catCompliment);