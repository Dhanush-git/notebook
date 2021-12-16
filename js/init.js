var mydb = JSON.parse(localStorage.getItem('db'))
const navBar = document.getElementsByClassName('nav-bar')[0]


if (mydb == null) {

    const data = [{"page-id":1,"page-name":"Personal","page-data":[{"task-id":1,"task-name":"create new task","status":false}]}]

    localStorage.setItem("db",JSON.stringify(data))
    localStorage.setItem("current_index",0)
    location.reload()
}else{

    if (mydb.length != 0) {
        populateNav()
        populatePage()
    }
}


function populateNav() {
    mydb.forEach(e => {
        const new_button = document.createElement("div")
        new_button.className = "button"
        new_button.id = e['page-id']
    
        const new_title = document.createElement("div")
        new_title.className = "button-page-title"
        new_title.innerHTML = e['page-name']
    
        //const new_page_notification = document.createElement('div')
        // new_page_notification.className = "button-page-notification"
        // new_page_notification.innerHTML = "0"
    
        new_button.appendChild(new_title)
        //new_button.appendChild(new_page_notification)
    
        navBar.appendChild(new_button)
    });
}

function populatePage() {
    const id = localStorage.getItem("current_index")
    const page = document.getElementsByClassName('page-content-wrapper')[0]
    const mydata = JSON.parse(localStorage.getItem('db'))

    page.innerHTML = " "

    const page_name = document.createElement("div")
    page_name.className = "page-name"
    page_name.id = mydata[id]['page-id']
    page_name.innerHTML = mydata[id]['page-name']

    const page_options = document.createElement("div")
    page_options.className = "page-options"

    const delete_page = document.createElement("div")
    delete_page.id = "delete-page"
    delete_page.className = "button-small"
    delete_page.innerHTML = "Delete Page"

    page_options.appendChild(delete_page)

    const task_input = document.createElement("input")
    task_input.id = "task-input"
    task_input.type = "text"
    task_input.placeholder = "add new task here"

    const todo_list = document.createElement("div")
    todo_list.classList = "todo-list"
    
    mydata[id]['page-data'].forEach(e=>{
        const new_li = document.createElement('li')
        const new_input = document.createElement('input')
        new_input.type = "checkbox"
        new_input.name = e['task-id']
        new_input.className = "check-box"
        new_input.checked = e['status']

        new_li.appendChild(new_input)
        new_li.append(" "+e['task-name'])
        todo_list.appendChild(new_li)
    })

    page.appendChild(page_name)
    page.appendChild(page_options)
    page.appendChild(task_input)
    page.appendChild(todo_list)
}

