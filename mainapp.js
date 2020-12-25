const NAME = sessionStorage.getItem("Name");

document.getElementById("hello").innerText = "HELLO " + NAME;


submitTodo = ()=>{
    
    var ex1 = document.getElementById("Todo").textContent;
    var ex2 = document.getElementById("Todoo").textContent;
    var ex3 = document.getElementById("Todooo").textContent;
    var ex4 = document.getElementById("Todoooo").textContent;

    if (ex1 == "EXEMPLE" && ex2 == "EXEMPLE" && ex3 == "EXEMPLE" && ex4 == "EXEMPLE") {
        var mytodo = document.getElementById("inputTodo").value;
        document.getElementById("Todo").innerText = mytodo;
    }else if (ex1 != "EXEMPLE" && ex2 == "EXEMPLE" && ex3 == "EXEMPLE" && ex4 == "EXEMPLE") {
        var mytodo = document.getElementById("inputTodo").value;
        document.getElementById("Todoo").innerText = mytodo;
    }else if (ex1 != "EXEMPLE" && ex2 != "EXEMPLE" && ex3 == "EXEMPLE" && ex4 == "EXEMPLE") {
        var mytodo = document.getElementById("inputTodo").value;
        document.getElementById("Todooo").innerText = mytodo;
    }else if (ex1 != "EXEMPLE" && ex2 != "EXEMPLE" && ex3 != "EXEMPLE" && ex4 == "EXEMPLE") {
        var mytodo = document.getElementById("inputTodo").value;
        document.getElementById("Todoooo").innerText = mytodo;
    }

    //var mytodo = document.getElementById("inputTodo").value;
    //document.getElementById("Todo").innerText = mytodo;
}

delete1 = ()=>{
    document.getElementById("Todo").innerText = "EXEMPLE";
}

delete2 = ()=>{
    document.getElementById("Todoo").innerText = "EXEMPLE";
}

delete3 = ()=>{
    document.getElementById("Todooo").innerText = "EXEMPLE";
}

delete4 = ()=>{
    document.getElementById("Todoooo").innerText = "EXEMPLE";
}
