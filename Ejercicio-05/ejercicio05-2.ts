/* Crear una interfaz que sirva para validar el siguiente objeto
  interface casa {
    area: number,
    ambientes: number,
    colorParedes: string
  }*/

  interface casa {
    area: number,
    ambientes: number,
    colorParedes: string
  }

  const verCasa: casa = {
    area: 100,
    ambientes: 5,
    colorParedes: 'Blanco'
  };
  console.log(verCasa);