const API_URL = "http://localhost:4000/api";

//GET
export const getAllUserServise = async () => {
  return fetch(`${API_URL}/traerAlumnos`).then((res) => res.json());
};

//CREAR
export const createUserServise = async (estudiante) => {
  return fetch(`${API_URL}/crearAlumno`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(estudiante),
  }).then((res) => res.json());
};

//ELIMINAR
export const deleteUserServise = async (estudianteid) => {
  return fetch(`${API_URL}/EliminarAlumno/` + estudianteid, {
    method: "DELETE",
  }).then((res) => res.status == 200);
};

//EDITAR
export const UpdateUserServise = async (estudianteid, estudiante) => {
  console.log("hola axel", estudianteid);
  return fetch(`${API_URL}/ActualizarAlumno/` + estudianteid, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(estudiante),
  }).then((res) => res.json());
};
