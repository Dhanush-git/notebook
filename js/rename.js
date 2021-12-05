const pageName = document.getElementsByClassName('page-name')[0]
pageName.addEventListener("dblclick",function(e){rename(e.target.id)})

const addPageButton = document.getElementById('add-page-button')
addPageButton.addEventListener("click",addPage)

const pageNav = document.getElementsByClassName('nav-bar')[0]
const pages = Array.from(pageNav.children)

pages.forEach(e=>{
    e.addEventListener("click",function(){
        const i = pages.indexOf(e)
        localStorage.setItem("current_index",i)
        location.reload()
    })
})

function rename(id) {
    var mydata = JSON.parse(localStorage.getItem('db'))
    
    const input = document.createElement('input')
    input.value = pageName.innerHTML

    pageName.innerHTML=""
    pageName.append(input)
    input.focus()
    
    input.addEventListener("focusout",function(e){
        pageName.removeChild(input)
        pageName.innerHTML = e.target.value

        for (let i=0; i < mydata.length; i++) {
            if (mydata[i]['page-id']==id) {
                mydata[i]['page-name']=e.target.value
                localStorage.setItem('db',JSON.stringify(mydata))
                location.reload()
            }
        }
    })


}


function addPage() {
    const mydata = JSON.parse(localStorage.getItem('db'))
    var new_page = '';
    if (mydata == null) {
        new_page = {'page-id':1,'page-name':'New Page','page-data':[{'task-id':1,'task-name':'new task','status':false}]}
        
    }else{
        new_page = {'page-id':mydata.at(-1)['page-id']+1,'page-name':'New Page','page-data':[{'task-id':1,'task-name':'new task','status':false}]}
    }

    mydata.push(new_page)
    localStorage.setItem('db',JSON.stringify(mydata))
    location.reload()
}

