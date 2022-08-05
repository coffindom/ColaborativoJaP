function Eliminar(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let color = document.getElementById("color").value;

    fetch("https://crudcrud.com/api/50b5e6ba32c84e54970af951df1fbb1e/grupo1", {
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        method: "POST",
        body: JSON.stringify({
                  