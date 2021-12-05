const pageName = document.getElementsByClassName('page-name')[0]
pageName.addEventListener("dblclick",rename)

function rename() {
    const input = document.createElement('input')
    input.value = pageName.innerHTML

    pageName.innerHTML=""
    pageName.append(input)
    input.focus()

    input.addEventListener("focusout",function(e){
        pageName.removeChild(input)
        pageName.innerHTML = e.target.value
    })
}