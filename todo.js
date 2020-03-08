const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const DONE_OVER="done_over";

let toDos = [];



function deleteToDo(event){
    const btn = event.target
    const li = btn.parentNode
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
          return toDo.id !== parseInt(li.id);
    });
    toDos=cleanToDos
    saveToDos();
}

function doneToDo(event){
    const doneBtn = event.target;
    const li = doneBtn.parentNode;
    li.classList.add(DONE_OVER);
    const overToDos = toDos.filter(function filterFn(toDo){
        return toDo.className !== parseInt(li.className);
  });
  toDos=overToDos
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const donBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.innerText= "X";
    delBtn.addEventListener("click",deleteToDo)
    donBtn.innerText= "Done!";
    donBtn.addEventListener("click",doneToDo)
    span.innerText = text;
    li.appendChild(span);
     li.appendChild(donBtn);
     li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId

    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
    
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text)          
        });
    }else{

    }
}


function init(){
 loadToDos();
 toDoForm.addEventListener("submit", handleSubmit)
}

init();