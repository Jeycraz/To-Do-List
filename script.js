// Setting Up Variables For Each Element // 
const body = document.body
const mainContainer = document.querySelector('.main-container')
const taskContainer = document.querySelector('.task-container');
const addBtn = document.querySelector('.add-container');
const input = document.getElementById('input-task')
//setting variables//

addBtn.addEventListener('click', () => {
    let div = document.createElement('div');
    div.classList.add("accordian-task")

    let ul = document.createElement('ul');
    ul.classList.add("task-list");
    div.appendChild(ul)

    let li = document.createElement('li');
    li.classList.add('task')
    li.innerText = `${input.value}`;
    ul.appendChild(li)

    let task = document.createElement('div')
    task.classList.add('btn')
    div.appendChild(task)

    let doneIcon = document.createElement('i')
    doneIcon.classList.add('fa-solid', 'fa-check')
    doneIcon.id = 'done'
    task.appendChild(doneIcon)

    let removeIcon = document.createElement('i')
    removeIcon.classList.add('fa-solid', 'fa-trash-can')
    removeIcon.id = 'remove'
    task.appendChild(removeIcon)

    if (input.value === "") {
        window.alert("Please Write Down Your Tasks!")
    } else {
        input.value = ""
        mainContainer.appendChild(div)
    }

    doneIcon.addEventListener('click', () => {
        if (doneIcon.classList.contains('active')) {
            doneIcon.classList.remove("active")
            li.classList.remove('active')
        } else {
            doneIcon.classList.add("active")
            li.classList.add('active')
        }
    })

    removeIcon.addEventListener('click', () => {
        div.remove()
    })

})


    //     accordianEl.addEventListener('click', () => {
    //         console.log('hi')
    //         doneBtn.classList.add('active')
    //     })
    // });
// for (let i = 0; i < liTask.length; i++) {
//     if (doneBtn.classList.contains('active')) {
//         liTask[i].classList.add('active')
//     }
// }





























// const div = document.createElement('div');
// div.classList.add("accordian-task")
// const ul = document.createElement('ul');
// ul.classList.add("task-list");
// const li = document.createElement('li');
// li.classList.add('task')
// li.innerText = input.value;
// input.value = null;
// const btn = document.createElement('div')
// btn.classList.add('btn')
// mainContainer.appendChild(div)
// div.appendChild(ul)
// ul.appendChild(li)
// div.appendChild(btn)
// btn.append(doneIcon, removeIcon)
// const doneIcon = document.createElement('i')
// doneIcon.classList.add('fa-solid', 'fa-check')
// doneIcon.id = 'done'
// const removeIcon = document.createElement('i')
// removeIcon.classList.add('fa-solid', 'fa-trash-can')
// removeIcon.id = 'remove'
// btn.append(doneIcon, removeIcon)

