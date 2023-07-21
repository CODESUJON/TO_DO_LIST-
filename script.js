const inputbox =document.getElementById("input-box");
const Listcontainer=document.getElementById("List-container");
function addTask(){
    if(inputbox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        Listcontainer.appendChild(li); 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span); 
    }
    inputbox.value = "";
    saveData();  /*save data*/
}
/*delet and checked */

Listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();  /*save data*/
    }
}, false);

/*save data in web*/

function saveData(){
    localStorage.setItem("data", Listcontainer.innerHTML);
}
 
/*show data*/

function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
