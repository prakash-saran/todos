var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector(".select");


function inputLength(){
    return input.value.length;
}

function createListElement(){
    var div = document.createElement("div");
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    var doneButton = document.createElement("button");

    div.classList.add("wrapper");
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(delButton);
    div.appendChild(doneButton);

    li.appendChild(document.createTextNode(input.value));
    li.classList.add("taskClass");
    delButton.classList.add("delClass");
    doneButton.classList.add("taskDone");
    delButton.innerHTML = 'Del';
    doneButton.innerHTML = 'Done'
    input.value = ""; 
}

function addListAfterClick(){
    if(inputLength() >0 ){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

function deleteListElement(element){
    if(element.target.className === "delClass"){
        element.target.parentElement.remove();
    }
}

function doneTask(element){
    if(element.target.className === "taskDone"){
        element.target.parentElement.classList.toggle("done");
    }
}

function handleUlClick(element){
    doneTask(element);
    deleteListElement(element);
}


ul.addEventListener("click", handleUlClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
