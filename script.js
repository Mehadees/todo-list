function todo_win(){
    document.getElementById("todo-win").style.display = 
        document.getElementById("todo-win").style.display === "block" ? "none" : "block";
}

function add_todo(){
    event.preventDefault();

    let title_inp = document.getElementById("title-inp").value
    let desc_inp = document.getElementById("desc-inp").value

    if(title_inp==""){
        alert("Title is required");
        return; 
    }    

    let newdiv = document.createElement("div");
    let newh1 = document.createElement("h1");
    let newh5 = document.createElement("h5");
    let deleteBtn = document.createElement("button");
    
    newdiv.className = "todos";
    newh1.className = "dis-title";
    newh5.className = "dis-desc";
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        newdiv.remove();
    };

    newdiv.appendChild(newh1);
    newdiv.appendChild(newh5);
    newdiv.appendChild(deleteBtn);

    let todo_container = document.getElementById("todo-container");
    todo_container.appendChild(newdiv);

    newh1.innerText = title_inp;
    newh5.innerText = desc_inp;

    document.getElementById("todo-win").style.display = "none";

    // Clear both inputs
    document.getElementById("title-inp").value = "";
    document.getElementById("desc-inp").value = "";
}