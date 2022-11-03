/* Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
  - Nombre (obligatorio): string
  - Apellido (opcional): string
  - Edad (obligatorio): number
  - Es Peruano (opcional): boolean (default = true)
  Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana */
(function(){
  function usuario(nombre: string,
                   edad: number,
                   apellido?: string,
                   esPeruano: boolean = true){
                    if(esPeruano==false){
                    console.log("El nombre del usuario es " + nombre + " " + apellido + " " + "con edad de " + edad + " " + "sin nacionalidad peruana");
                   }else {
                    console.log("El nombre del usuario es " + nombre + " " + apellido + " " + "con edad de " + edad + " " + "con nacionalidad peruana");
                   }}
    usuario('Yeltsin',28,'Sanchez',false);

})();