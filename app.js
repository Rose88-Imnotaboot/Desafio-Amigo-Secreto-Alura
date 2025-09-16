// Array para almacenar los nombres de los amigos
let amigos = []; 

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    // Se usa 'value' para obtener el contenido de un input, no 'ariaValueMax'
    const nombreAmigo = inputAmigo.value.trim(); 

    // Validar que el campo no esté vacío
    // Se corrige la variable 'nombre' a 'nombreAmigo'
    if (nombreAmigo === "") { 
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        // Se usa ` para las plantillas de string, no ` para una parte y ' para otra
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }

    // Agregar el nombre al array `amigos`
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    // Se usa 'value' para asignar un valor al input
    inputAmigo.value = ""; 

    // Actualizar la lista HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Se usa el ID correcto 'listaAmigos'
    const listaAmigos = document.getElementById("listaAmigos"); 
    
    // Limpiar el contenido de la lista
    listaAmigos.innerHTML = "";
    
    // Recorrer el array `amigos` y crear los elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Se usa 'li' entre comillas para crear el elemento
        const li = document.createElement('li'); 
        // Se usa [i] para acceder al elemento del array por su índice
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio (sorteo)
function sortearAmigo() {
    // Se corrige el nombre de la función y se revisa la lógica
    if (amigos.length < 2) { 
        alert("Necesitas al menos dos amigos para realizar un sorteo.");
        return;
    }
    
    // Generar un índice aleatorio
    // Se corrige la operación Math.random() que debe ir multiplicada
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    
    // Obtener el amigo sorteado usando el índice
    const amigoSorteado = amigos[indiceAleatorio]; 
    
    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
