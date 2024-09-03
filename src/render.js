import { deleteUserServise } from "./services.js";

export const createUserItem = (estudiante) => {
  const $container = document.createElement("div");
  $container.classList.add("contenedorAlumnos");

  //id
  const $id = document.createElement("span");
  $id.innerText = "#" + estudiante.id;

  //nombre
  const $nombreAlumno = document.createElement("p");
  const $bAlumno = document.createElement("b");
  const $spanAlumno = document.createElement("span");

  $bAlumno.innerText = "Nombre estudiante: ";
  $spanAlumno.innerText = estudiante.nombre_Alumno;

  //direccion
  const $Direccion = document.createElement("p");
  const $bDireccion = document.createElement("b");
  const $spanDireccion = document.createElement("span");

  $bDireccion.innerText = "Direccion del alumno: ";
  $spanDireccion.innerText = estudiante.Direccion;

  const $eliminar = document.createElement("span");
  $eliminar.innerHTML = `<i class="fi fi-rr-trash"></i>`;

  $eliminar.addEventListener("click", async () => {
    await deleteUserServise(estudiante.id).then((respuesta) => {
      if (!respuesta == 200) {
        alert("error al elimina usuario");
        return;
      } else {
        alert("se elimino exitosamente");
        $container.remove();
      }
    });
  });

  $container.appendChild($id);
  $container.appendChild($nombreAlumno);
  $nombreAlumno.appendChild($bAlumno);
  $nombreAlumno.appendChild($spanAlumno);

  $container.appendChild($Direccion);
  $Direccion.appendChild($bDireccion);
  $Direccion.appendChild($spanDireccion);

  $container.appendChild($eliminar);

  return $container;
};
