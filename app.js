getName = ()=>{
    const NAME = document.getElementById("inputName").value;
    sessionStorage.setItem("Name", NAME);
    window.location.href = "mainindex.html";
}
