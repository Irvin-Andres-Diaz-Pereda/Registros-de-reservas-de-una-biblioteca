import { Titulo } from './Titulo';
import { InfoPrestatario } from './Infopresta';

export class Reserva{

    private fecha:string;
    private reserva:any[]=[];
    private id:number=0;

    constructor(fecha:string){
        this.fecha=fecha
    }

    public get_Fecha():string{
        return this.fecha;
    }
 
     public set_Fecha(fecha:string){
         this.fecha=fecha;
    }
     
    public crear (crear: string): string{
        return crear;
    }

    public destriur (destriur: string): string{
        return destriur;
    }

    public encontrar (encontrar: string): string{
        return encontrar;
    }
    
    public lista_reserva()
    {
        console.log (this.reserva);
    }

    public agregar_reserva (No_reserva:string,titulo:Titulo,informacion_del_prestatario:InfoPrestatario):void{
        this.id++;
        let Registro={
            registro:this.id,
            Informacion_del_prestatario:informacion_del_prestatario,
            Estado:'Proceso',
            No_reserva:No_reserva,
            Xtitulo:titulo
        };
        this.reserva.push(Registro);
    }

    public buscar_reserva (nReg:number){
        for(var reg of this.reserva){
            if (reg['registro']==nReg){
                console.log ("registro: " + reg['registro'] + "\n" + reg['Xtitulo'] ); 
                console.log(this.reserva);
            }
    
    }
}

public modificar_reserva(nReg:number,titulo:Titulo|any,reserva:Reserva|any,no_reserva:number|any,InfoPrestatario:InfoPrestatario|any,Estado:string|any) {
    this.reserva.forEach((reg,index)=>{
        if (reg['Registro']==nReg ){
            this.reserva[index]['Titulo']=titulo;
            this.reserva[index]['Reserva']=reserva;
            this.reserva[index]['Estado']=Estado;
            this.reserva[index]['no_reserva']=no_reserva;
            this.reserva[index]['Informacion_del_prestatario' ]=InfoPrestatario;
 
        } 
    });
}

public eliminar_reserva(nReg:number){
    var idx=0;
    this.reserva.forEach((reg,index)=>{
        if(reg['registro']==nReg){
            this.reserva.splice(index,1);
        }
});
}
}