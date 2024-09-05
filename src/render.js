import { deleteUserServise, UpdateUserServise } from "./services";

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

  // APARECER FORM DE UPDATE
  const $contformUpdate = document.createElement("div");
  $contformUpdate.classList.add("contFormUpdate");
  $contformUpdate.style.display = "none";
  $contformUpdate.id = "contenedorFomr";

  const $form = document.createElement("form");
  const $titulo = document.createElement("p");

  const $preguntas = document.createElement("div");

  const $Nameupdate = document.createElement("div");
  const $direccUpdate = document.createElement("div");

  const $labelNombre = document.createElement("label");
  const $inputnombre = document.createElement("input");
  const $labelDireccion = document.createElement("label");
  const $inputDireccion = document.createElement("input");

  const $botonsub = document.createElement("button");

  // innertTEXT
  $titulo.innerText = "Estas editando a: " + estudiante.nombre_Alumno;
  $labelNombre.innerText = "Nuevo Nombre: ";
  $labelDireccion.innerText = "Nueva Dirección: ";
  $botonsub.innerText = "Editar Alumno";

  // appendChilds
  $contformUpdate.appendChild($form);
  $form.appendChild($titulo);
  $form.appendChild($preguntas);

  $preguntas.appendChild($Nameupdate);
  $Nameupdate.appendChild($labelNombre);
  $Nameupdate.appendChild($inputnombre);

  $preguntas.appendChild($direccUpdate);
  $direccUpdate.appendChild($labelDireccion);
  $direccUpdate.appendChild($inputDireccion);

  $form.appendChild($botonsub);

  // Agregar estilos e IDs
  $inputnombre.id = "editarInput";
  $botonsub.id = "botonUpdate";
  $botonsub.type = "submit";
  $inputDireccion.id = "inputDicc";
  $inputnombre.id = "inputName";

  // Añadir clases (estilos)
  $contformUpdate.classList.add(
    "bg-slate-300",
    "px-4",
    "py-8",
    "absolute",
    "rounded-md",
    "h-auto",
    "flex",
    "flex-col",
    "justify-center"
  );
  $preguntas.classList.add("infopreguntas", "flex", "flex-col", "gap-5");
  $form.classList.add("flex", "flex-col", "gap-6");
  $titulo.classList.add(
    "text-black",
    "font-medium",
    "text-[2.5vw]",
    "text-slate-800"
  );
  $labelDireccion.classList.add("text-black", "text-[2vw]", "text-slate-800");
  $labelNombre.classList.add("text-black", "text-[2vw]", "text-slate-800");
  $botonsub.classList.add(
    "bg-slate-500",
    "py-2",
    "w-[100%]",
    "text-[2vw]",
    "rounded",
    "font-medium"
  );
  $inputDireccion.classList.add(
    "w-[100%]",
    "h-10",
    "bg-white",
    "text-slate-800",
    "text-lg"
  );
  $inputnombre.classList.add(
    "w-[100%]",
    "h-10",
    "bg-white",
    "text-slate-800",
    "text-lg"
  );

  const $app = document.getElementById("app");
  $app.appendChild($contformUpdate);
  const oscurecer = document.getElementById("oscurecer");
  oscurecer.style.display = "none";
  const idestudianteEditar = estudiante.id;
  const botonupdate = document.getElementById("botonUpdate");

  // EventListener para el botón de editar
  $botonEditar.addEventListener("click", () => {
    $contformUpdate.style.display = "block";
    oscurecer.style.display = "block";

    console.log(idestudianteEditar);
  });

  //EVENTO ACTUALIZAR INFO

  botonupdate.addEventListener("click", async (e) => {
    e.preventDefault();

    const nombre_Alumno = document.getElementById("inputName").value;
    const Direccion = document.getElementById("inputDicc").value;

    $contformUpdate.style.display = "none";
    oscurecer.style.display = "none";
  });

  // EventListener para el overlay (oscurecer)
  oscurecer.addEventListener("click", () => {
    $contformUpdate.style.display = "none";
    oscurecer.style.display = "none";
  });

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
