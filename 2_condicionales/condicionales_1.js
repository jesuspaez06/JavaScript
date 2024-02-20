const Cul = prompt("Eres culpable? si o no?").toLowerCase();//pedir el dato para guardarlo en "Cul" transfomandola en minuscula
if (Cul == "si") {
    console.log("irás a la cárcel");// si es un si imprimir 
  }else if (Cul== "no") {
    console.log("te investigaremos");//si es un no imprimir 
  } else {
    alert("Error, las unicas opciones son si o no ");//error si es cualquier otra cosa
  }
//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que: En caso afirmativo el 
//usuario responderá si, en caso contrario responderá no. Si el usuario responde si se escribirá el documento 
//«irás a la cárcel».
