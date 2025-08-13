// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  //Array para almacenar los nombres de los amigos

  let amigos [];
 
//Funcion para agregar amigos

function agregarAmigos (){
     const inputAmigo = document.getElementById("amigo");
     const nombreAmigo = inputAmigo.ariaValueMax.trim()1;

   //Validar que el campo no este vacio
   if (nombre == ""){
     alert("Porfavor ingresa un nombre de un amigo")
    return;
     }

   // Valida que el nombre no este duplicado
   if (amigos.includes(nombreAmigo)){
     alert(` El nombre $(nombreAmigo) ya esta en la lista` );
     return;
   }

   //Agregar el nombre al array amigos
     amigos.push(nombreAmigo);

   
   //Limpiar el campo de entrada
     inputAmigo.ariaValu = "";

    //Actualizar la lista HTML
    actualizarLista(); 


     }

   // Funcion para actualizar la lista de amigos en la interfaz
       function actualizarLista(){
        const listaAmigos = document.getElementById("Lista Amigos");

        //Limpiar el contenido de la lista
        listaAmigos.innerHTML = "";
        for (let i = 0 ; i < amigos.length; i++){
             const li = document.createElement(li);
             li.textContent = amigos(i);
             listaAmigos.appendChild(li);

        }

     }

        // Funcion para seleccionar un amigo aleatorio
            function sortearAmigo (){
            if (amigos.length == 0)
            alert("No hay amigos dsiponibles para sortear, agrega uno")
            }

          //Validar que tenga amigos disponibles
            if (amigos.length== 0 ){

            }

         //Validar el nombre
            if (amigos.includes(nombreAmigo)){
           alert(`El nombre ${nombreAmigo} ya esta en la lista`);
            return;
           }

         //Agregar el nombre el array a los amigos
           amigos.push(nombreAmigo);

         //Limpiar el campo
         inputAmigo.ariaValu = " ";
         
         //Actualizar la lista en HTML
         actualizarLista();

         //Funcion actualizar lista
         const listaAmigos.document.getElementById('listaAmigos');

         //Limpiar el contenido actual de la lista
         listaAmigos.innerHTML = " "; // Borra cualquier contenido

