const PATH = `http://localhost:3000`
const xhttp = new XMLHttpRequest()
const select = document.getElementById('challengeSlct')

const inputArea = document.getElementById('inputArea')
const resultArea = document.getElementById('resultArea')

const textInput = document.createElement('input')
textInput.setAttribute('type', 'text')
textInput.setAttribute('placeholder', 'Enter some text')
textInput.classList.add('form-control')

const numInput = document.createElement('input')
numInput.setAttribute('type', 'number')
numInput.setAttribute('placeholder', 'Enter a number')
numInput.classList.add('form-control')

select.addEventListener('change', () => { update(select.value) })

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = document.createElement('div')
        if (this.responseText) {
            response.innerHTML = this.responseText
            response.setAttribute('class', 'alert alert-success')
            resultArea.appendChild(response)
        }
    }
}

function update(selected) {
    switch (selected) {
        case 'Longest Word':
            run('longest-word', textInput)
            append('text')
            break
        case 'First Factorial':
            run('first-factorial', numInput)
            append('number')
            break
        case 'First Reverse':
            run('first-reverse', textInput)
            append('text')
            break
        case 'Letter Changes':
            run('letter-changes', textInput)
            append('text')
            break
        case 'Simple Adding':
            run('simple-adding', numInput)
            append('number')
            break
        case 'Letter Capitalise':
            run('letter-capitalise', textInput)
            append('text')
            break
        default:
            break
    }
}

function append(type) {
    clear('all')
    switch (type) {
        case 'text':
            textInput.value = ''
            inputArea.appendChild(textInput)
            break
        case 'number':
            numInput.value = ''
            inputArea.appendChild(numInput)
            break
        default:
            break
    }
}

function clear(e) {
    if (e === 'all') {
        while (inputArea.firstChild) {
            inputArea.removeChild(inputArea.firstChild)
        }

        while (resultArea.firstChild) {
            resultArea.removeChild(resultArea.firstChild)
        }
    } else {
        while (resultArea.firstChild) {
            resultArea.removeChild(resultArea.firstChild)
        }
    }
}

function run(challenge, input) {
    input.addEventListener(
        'input',
        _.debounce(() => {
            clear()
            xhttp.open('POST', `${PATH}/${challenge}?input=${input.value}`, true)
            xhttp.send()
        }, 300)
    )
}
