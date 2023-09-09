function addRedBorder(id){
    element = document.querySelector(`#${id}`)
    element.style.border = '5px solid red'
}

function highlightCard(selector){
    var elemento = document.querySelector(selector);
    elemento.classList.toggle('card-highlight');
}

function checkKeyboardCode() {
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    alert(`Key pressed ${name} \r\n Key code value: ${code}`)
}, false)}

function addKeyboardEventListener() {
    document.addEventListener('keydown', (event) => {
        let ingresso1 = document.getElementById('quinta')
        let ingresso2 = document.getElementById('sexta')
        let ingresso3 = document.getElementById('sabado')
        let ingresso4 = document.getElementById('domingo')

        let code = event.code;
        if (code == 'Digit1') {
            ingresso1.classList.toggle('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.remove('card-highlight')
        }

        if (code == 'Digit2') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.toggle('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.remove('card-highlight')
        }

        if (code == 'Digit3') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.toggle('card-highlight')
            ingresso4.classList.remove('card-highlight')
        }

        if (code == 'Digit4') {
            ingresso1.classList.remove('card-highlight')
            ingresso2.classList.remove('card-highlight')
            ingresso3.classList.remove('card-highlight')
            ingresso4.classList.toggle('card-highlight')
        }
    })
}

// checkKeyboardCode()
addKeyboardEventListener()