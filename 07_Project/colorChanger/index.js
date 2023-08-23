const button = document.querySelectorAll('.button');
const body = document.querySelector("body")

button.forEach(function (button) {
    button.addEventListener( 'click', function (event) {
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'pink'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
    })
})