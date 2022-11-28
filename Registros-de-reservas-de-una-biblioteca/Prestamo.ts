export class Prestamo{

    private fecha:string = "";

    constructor(fecha:string){
        this.fecha= fecha;
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
    

}