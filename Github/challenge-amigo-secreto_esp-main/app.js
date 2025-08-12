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
function listaAmigos(){


     }


    // Funcion para seleccionar un amigo aleatorio
    function amigoAleatorio (){


     }
