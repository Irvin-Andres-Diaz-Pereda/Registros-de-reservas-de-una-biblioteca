export class Ejemplar{

    private id:number=0;

    constructor(id:number){
        this.id=id;
    }

    public get_id():number{
        return this.id;
     }
 
     public set_id(id:number){
         this.id=id;
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