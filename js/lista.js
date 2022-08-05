function enviar() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let color= document.getElementById('color').value;

    fetch('API',

    {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            name: nombre,
            age: edad,
            color: color,
        })
    })
    .then(response => response.json())
    .then(data =>{
        alert("Datos Ingresados con exito!")
        document.getElementById('nombre').value="";
        document.getElementById('edad').value=0;
        document.getElementById('color').value="";
    })
}

document.getElementById('enviar').addEventListener('click', () => {
    enviar();
})