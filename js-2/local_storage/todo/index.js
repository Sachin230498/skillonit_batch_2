let form = document.querySelector("form")
let task = document.getElementById("task");
let priority = document.getElementById("priority");
let tbody = document.querySelector("tbody")


form.addEventListener("submit", getData)

let todo_data = JSON.parse(localStorage.getItem("data")) || [];
display(todo_data);
function getData(){

    event.preventDefault();
    
    let obj = {
    task:task.value,
    priority:priority.value
    }
   todo_data.push(obj)
// console.log(todo_data)
  localStorage.setItem("data",JSON.stringify(todo_data) )
   display(todo_data)
}



function display(data){
    tbody.innerHTML = "";
   data.map(function(el,index){
     // console.log(index)
     let row = document.createElement("tr")
     let col1 = document.createElement("td")
     col1.innerText = el.task;
     let col2 = document.createElement("td")
     col2.innerText = el.priority;
     if(el.priority == "High"){
        col2.style.backgroundColor = "red"
     }else if(el.priority == ""){
        col2.style.backgroundColor = "white";
     }else{
        col2.style.backgroundColor = "green";
     }
     let col3 = document.createElement("td")
     col3.addEventListener("click", function(){
        delfun(index)
     })
     col3.innerText = "Delete"
     col3.style.backgroundColor = "red"
     col3.style.color = "white"
     row.append(col1,col2,col3)
     tbody.append(row)
   }) 
}


function delfun(i){
    // console.log(event)
    // event.target.parentNode.remove()
    todo_data.splice(i,1)
    localStorage.setItem("data", JSON.stringify(todo_data));
    display(todo_data)
}





// let arr = [1,2,4,8,91,45,66]

// // arr.splice(index,no of el you want to delete, you want to add)
// arr.splice(0,1,55,89)
// console.log(arr)
 