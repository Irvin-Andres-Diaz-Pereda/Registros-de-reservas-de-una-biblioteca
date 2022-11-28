import {Titulo}  from './Titulo';
export class Ejemplar{

    private tiempo_pendiente:string="";

    public get_tiempo_pendiente():string{
        return this.tiempo_pendiente;
     }
 
     public set_tiempo_pendiente(tiempo_pendiente:string){
         this.tiempo_pendiente=tiempo_pendiente;
     }
}