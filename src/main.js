import "./style.css";
import { createUserItem } from "./render.js";
import { createUserServise, getAllUserServise } from "./services.js";
import "./style.css";

document.addEventListener("DOMContentLoaded", async () => {
  const $crearNuevoUsuario = document.getElementById("crearUsuarioForm");
  const $listadeUsarios = document.getElementById("listaDeUsuarios");

  //trae tods los usarios
  const getAllStudenst = async () => {
    $listadeUsarios.innerHTML = "";

    return getAllUserServise().then((listaDeAlumnos) => {
      listaDeAlumnos.forEach((estudiante) => {
        $listadeUsarios.appendChild(createUserItem(estudiante));
      });
    });
  };

  console.log("se trajo correstamente");

  //crea usarios
  $crearNuevoUsuario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre_Alumno = document.getElementById("nombre_Alumno").value;
    const Direccion = document.getElementById("Direccion").value;

    await createUserServise({ nombre_Alumno, Direccion }).then(
      (nuevoAlumno) => {
        $listadeUsarios.appendChild(createUserItem(nuevoAlumno));
      }
    );

    e.target.reset();
  });

  await getAllStudenst();
});
