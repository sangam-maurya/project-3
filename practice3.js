let todo =[];

let req = prompt("enter your request")

while(true){
    if(req==="quit"){
        console.log("quit this app")
        break;
    }if (req==="list"){
        console.log("--------------")
        for(let i = 0 ;i<todo.length ; i++){
            console.log(i , todo[i])
        }
        console.log("------------------")
    } else if (req==="add"){
        let task=prompt("enter your task you want add")
        todo.push(task)
        console.log("task added")
    } else if (req === "delete"){
        let idx = prompt("enter your task you want delete")
         todo.splice(idx ,1)
         console.log("task deleted")
    }
    req=prompt("plz enter your request")
}
