var mydb = JSON.parse(localStorage.getItem('db'))

if (mydb == null) {

    const data = [{"page-id":1,"page-name":"Personal","page-data":[{"task-id":1,"task-name":"create new task","status":"false"}]}]

    localStorage.setItem("db",JSON.stringify(data))
}else{

    if (mydb.length != 0) {
        console.log("no data in db");
    }
}