export class InfoPrestatario{

    private nombrep:string="";
    private direcc:string="";
    private estado:string="";
    private codigo:string="";

    constructor(nombrep:string, direcc:string, estado:string, codigo:string){
        this.direcc = direcc;
        this.nombrep = nombrep;
        this.codigo = codigo;
        this.estado = estado;
    }

    toString():string {
        return `Nombre del Prestario : ${this.nombrep} | Direccion del prestario : ${this.direcc} | Estado del prestario: ${this.estado} | Codigo ${this.codigo} |}`;
    }

    

    public get_nombrep():string{
        return this.nombrep;
    } 
    public set_nombrep(nombrep:string){
        this.nombrep=nombrep;
    }
    public get_direcc():string{
        return this.direcc;
    }
    public set_direcc(direcc:string){
        this.direcc=direcc;
    }
    public get_estado():string{
        return this.estado;
    }
    public set_estado(estado:string){
        this.estado=estado;
    }
     public get_codigo():string{
        return this.codigo;
    }
    public set_codigo(codigo:string){
        this.codigo=codigo;
    }
    public crear1(crear1: string): string{
        return crear1;
    }
    public destruir1(destriur1: string): string{
        return destriur1;
    }
    public encontrar1(encontrar1: string): string{
        return encontrar1;
    }
}