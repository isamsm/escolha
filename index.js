var p = document.getElementById('answer')

function choose() {
    var firstOption = document.getElementById('first').value
    var secondOption = document.getElementById('second').value

    var random = Math.floor(Math.random() * 2)

    if (random === 1) {
        p.textContent = firstOption
    } else {
        p.textContent = secondOption
    }
}

function reset() {
    document.getElementById('first').value = ''
    document.getElementById('second').value = ''
    p.textContent = ''
}

