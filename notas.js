class Materia
{
    nombre;

        constructor(nombre)
        {
            this.nombre=nombre;
            this.cantidad=0;
            this.total=0;
            this.promedio= function(){
                if(this.cantidad===0){
                    return "0";
                }else{
                    return this.total/this.cantidad;
                }
            }
        }    
}
