function calcular() {
    // Obtener el nombre del estudiante y las notas del formulario
    const nombre = document.querySelector(".name-input").value;
    
    // Notas de Frontend
    const nota1 = parseFloat(document.getElementById("frontend1").value) || 0;
    const nota2 = parseFloat(document.getElementById("frontend2").value) || 0;
    const nota3 = parseFloat(document.getElementById("frontend3").value) || 0;
    
    // Notas de Backend
    const Nota1 = parseFloat(document.getElementById("backend1").value) || 0;
    const Nota2 = parseFloat(document.getElementById("backend2").value) || 0;
    const Nota3 = parseFloat(document.getElementById("backend3").value) || 0;
    
    // Notas de Metodología
    const NOTA1 = parseFloat(document.getElementById("metodologia1").value) || 0;
    const NOTA2 = parseFloat(document.getElementById("metodologia2").value) || 0;
    const NOTA3 = parseFloat(document.getElementById("metodologia3").value) || 0;
    
    // Elemento donde se mostrará el mensaje final
    const texto = document.getElementById("mensajeFinal");

    // Calcular promedios para cada materia
    const promedioFrontend = (nota1 + nota2 + nota3) / 3;
    const promedioBackend = (Nota1 + Nota2 + Nota3) / 3;
    const promedioMetodologia = (NOTA1 + NOTA2 + NOTA3) / 3;
    
    // Array con todos los promedios
    const promedios = [
        promedioFrontend,
        promedioBackend,
        promedioMetodologia
    ];

    // Función para verificar si una materia está aprobada
    function aprobada(promedio) {
        return promedio >= 3;
    }

    // Función para contar materias reprobadas
    function contarReprobadas(promedios) {
        return promedios.reduce((count, promedio) =>
            !aprobada(promedio) ? count + 1 : count, 0);
    }

    // Obtener el número de materias reprobadas
    const materiasReprobadas = contarReprobadas(promedios);

    // Construir el mensaje
    let mensaje = "";
    const materias = ["Frontend I", "Backend I", "Metodología Ágiles"];
    
    // Validar que se haya ingresado el nombre
    if (!nombre.trim()) {
        texto.innerHTML = "Por favor, ingrese el nombre del estudiante";
        texto.style.color = "red";
        return;
    }

    // Verificar cada materia
    promedios.forEach((promedio, index) => {
        if (!aprobada(promedio)) {
            mensaje += `${nombre} reprobó ${materias[index]}<br>`;
        }
    });

    // Agregar estado final
    if (materiasReprobadas >= 3) {
        mensaje += `${nombre} perdió el semestre.`;
        texto.style.color = "red";
    } else {
        mensaje = mensaje || `${nombre} aprobó el semestre.`;
        texto.style.color = mensaje.includes("reprobó") ? "red" : "green";
    }

    // Mostrar el mensaje final
    texto.innerHTML = mensaje;
}