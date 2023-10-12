const myInput = document.querySelector('#favchap')
const myButton = document.querySelector('#myButton')
const myList = document.querySelector('#list')

myButton.addEventListener('click', () => {
    if (myInput.value == ''){
        myInput.focus()
        return
    }
    let listItem = document.createElement('li')

    let deleteButton = document.createElement('button')

    listItem.textContent = myInput.value

    deleteButton.textContent = '❌'

    listItem.appendChild(deleteButton)

    myList.appendChild(listItem)

    deleteButton.addEventListener('click', () => {
        listItem.remove()
    })

    myInput.focus()

    myInput.value = ''
})