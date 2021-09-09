const tarea = document.querySelector("#tarea-input");
const form = document.querySelector("#tareas-form");

form.addEventListener("submit",event=>{
    alert("Tarea: "+tarea.value);
})
