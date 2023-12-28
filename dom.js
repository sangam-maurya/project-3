let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")




btn.addEventListener("click" , function(){
  let item = document.createElement("li")
  item.innerText=inp.value
  ul.appendChild(item) 
    inp.value =""
    let delBtn = document.createElement("button")
    delBtn.innerText="delete"
    delBtn.classList.add("btn")
    item.appendChild(delBtn)
    
})

ul.addEventListener("click" , function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem =event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }
})


