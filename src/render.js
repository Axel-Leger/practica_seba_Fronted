import { deleteUserServise } from "./services.js";

export const createUserItem = (estudiante) => {
  const $container = document.createElement("div");

  //encabezado y container info
  const $encabezado = document.createElement("div");
  const $botonesEncabezado = document.createElement("div");
  const $info = document.createElement("div");

  //id
  const $id = document.createElement("span");
  $id.innerText = estudiante.id;

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

  const $botonEditar = document.createElement("span");
  $botonEditar.innerText = "Editar";
  $botonEditar.id = "botonEditarID";
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

  $container.appendChild($encabezado);
  $container.appendChild($info);
  $encabezado.appendChild($id);
  $encabezado.appendChild($botonesEncabezado);
  $info.appendChild($nombreAlumno);
  $nombreAlumno.appendChild($bAlumno);
  $nombreAlumno.appendChild($spanAlumno);

  $info.appendChild($Direccion);
  $Direccion.appendChild($bDireccion);
  $Direccion.appendChild($spanDireccion);

  $botonesEncabezado.appendChild($botonEditar);
  $botonesEncabezado.appendChild($eliminar);

  //clases
  $container.classList.add(
    "contenedorAlumnoInd",
    "contenedorAlumnos",
    "bg-blue-400",
    "flex",
    "flex-col",
    "gap-2",
    "rounded-lg",
    "w-[90%]"
  );

  $info.classList.add("px-3", "pb-3", "flex", "flex-col", "gap-2");

  $encabezado.classList.add(
    "encabezadoUwu",
    "relative",
    "bg-slate-300",
    "text-black",
    "w-[100%",
    "px-3",
    "py-2",
    "rounded-tr-lg",
    "rounded-tl-lg",
    "font-semibold",
    "flex",
    "justify-between"
  );

  $botonesEncabezado.classList.add("flex", "gap-2");

  $botonEditar.classList.add(
    "botonEditar",
    "bg-blue-700",
    "text-white",
    "px-3",
    "pt-[3px]",
    "pb-[3px]",
    "rounded"
  );

  $eliminar.classList.add(
    "botonEliminar",
    "bg-red-700",
    "text-white",
    "px-4",
    "pt-[4px]",
    "pb-[2px]",
    "flex",
    "items-center",
    "justifi-center",
    "rounded"
  );

  return $container;
};
