let gobalId = 1
function markasdone(todoId){
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!"
}

function createchild(title , description , id){
    const child = document.createElement("div")
    const firstgrandchild = document.createElement("div")
    firstgrandchild.innerHTML = title;
    const secondgrandchild = document.createElement("div");
    secondgrandchild.innerHTML = description;
    const thirdgranchild = document.createElement("button");
    thirdgranchild.innerHTML = "Mark as done";
    thirdgranchild.setAttribute("onclick", `markasdone(${id})`);
    child.appendChild(firstgrandchild);
    child.appendChild(secondgrandchild);
    child.appendChild(thirdgranchild);
    child.setAttribute("id",id);
    return child;
}



function Addtodo(){
    const title = document.getElementById("Title").value
    const description = document.getElementById("Description").value
    const parent = document.getElementById("container")
    parent.appendChild(createchild(title , description,gobalId++))
}

//Problem wuth this aproach is Very hard to add and remove elements and{ NO CENTRAL STATE }