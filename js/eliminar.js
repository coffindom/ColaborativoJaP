function Eliminar() {
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  let color = document.getElementById('color').value;

  nombre = '';
  edad = 0;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('eliminar').addEventListener('click', () => {
    Eliminar();
  });
});
