<script>
function insertarDatosMascota() {
	const urlParams = new URLSearchParams(window.location.search);
	const registroId = urlParams.get("mascota");
	const urldatosmascotas = `https://smartpet-1d59e-default-rtdb.firebaseio.com/smartpet/mascotas/${registroId}.json`;

	fetch(urldatosmascotas)
		.then((response) => response.json())
		.then((mascotaData) => {
			// Recopilar todos los datos en un objeto
			const datosMascota = {
				descripcion: mascotaData.datosMascotas.descripcion,
				edad: mascotaData.datosMascotas.edad,
				ig1: mascotaData.datosMascotas.ig1,
				ig2: mascotaData.datosMascotas.ig2,
				img: mascotaData.datosMascotas.img,
				instagram1: mascotaData.datosMascotas.instagram1,
				instagram2: mascotaData.datosMascotas.instagram2,
				mensaje: mascotaData.datosMascotas.mensaje,
				nombre: mascotaData.datosMascotas.nombre,
				persona1: mascotaData.datosMascotas.persona1,
				persona2: mascotaData.datosMascotas.persona2,
				sexo: mascotaData.datosMascotas.sexo,
				telefono1: mascotaData.datosMascotas.telefono1,
				telefono2: mascotaData.datosMascotas.telefono2,
				ubicacion: mascotaData.datosMascotas.ubicacion
			};

			// Ahora puedes acceder a estos datos desde el objeto `datosMascota`
			document.getElementById("nombre").textContent = datosMascota.nombre;
			document.getElementById("edad").textContent = datosMascota.edad + " años";
			document.getElementById("sexo").textContent = datosMascota.sexo;
			document.getElementById("ubicacion").textContent = datosMascota.ubicacion;
			document.getElementById("descripcion").textContent = datosMascota.descripcion;
			document.getElementById("persona1").textContent = datosMascota.persona1;
			document.getElementById("persona2").textContent = datosMascota.persona2;
		/*     document.getElementById("llamar11").textContent = datosMascota.telefono1; */
			document.getElementById("telefono2").textContent = datosMascota.persona2;

			const imagenElemento = document.getElementById("imagen");
			imagenElemento.src = datosMascota.img;  // Asigna la URL a la imagen
			imagenElemento.alt = datosMascota.nombre;  // Establece el texto alternativo

			// Puedes acceder a los demás datos desde `datosMascota` cuando lo necesites
			console.log(datosMascota); // Para verificar los datos en la consola
		})
		.catch((error) => console.error(error));
}

// Llamo a la función para que se ejecute al cargar la página
insertarDatosMascota();

</script>
