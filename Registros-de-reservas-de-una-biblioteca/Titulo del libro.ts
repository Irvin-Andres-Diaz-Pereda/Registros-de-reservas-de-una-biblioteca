import { Titulo }  from './Titulo';
export class Titulo_del_libro{

    private tiempo_pendiente:number=30;

    constructor(tiempo_pendiente:number){
        this.tiempo_pendiente=tiempo_pendiente;
    }
    public get_tiempo_pendiente():number{
        return this.tiempo_pendiente;
     }
 
     public set_tiempo_pendiente(tiempo_pendiente:number){
         this.tiempo_pendiente=tiempo_pendiente;
     }
}