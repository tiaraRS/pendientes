const tarea = document.querySelector("#tarea-input");
const tipo = document.querySelector("#tipo-select");

const form = document.querySelector("#tareas-form");


form.addEventListener("submit",event=>{
    var tareaT = tarea.value;
   // var tipoT="";
   console.log("tipo"+tipo.value);
    if (tipo.value=="trabajo"){
        //tipoT = "trabajo";
        alert("Tarea: "+tareaT+"\n Tipo: trabajo");
    }else if (tipo.value=="personal"){
       // tipoT="personal";
        alert("Tarea: "+tareaT+"\n Tipo: personal");
    }
    //alert("Tarea: "+tarea+"\n Tipo: "+tipoT);
})
