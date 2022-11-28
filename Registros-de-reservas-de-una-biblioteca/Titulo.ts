
export class Titulo {
    
    private nombre:string= "";
    private autor:string="";
    private isbn:string="";
    private numero_de_reserba="";

    constructor (nombre:string, autor:string, isbn:string,numero_de_reserba:string) {

        this.nombre= nombre;
        this.autor= autor;
        this.isbn= isbn;
        this.numero_de_reserba=numero_de_reserba;
    }
    
    toString(): string {
        return `Nombre del Libro : ${this.nombre} | Nombre del autor : ${this.autor} | Codigo Libro: ${this.isbn} | Número de reserva: ${this.numero_de_reserba}`;
    }

    public set_nombre(nombre:string){
        this.nombre = nombre;
    }
    public get_nombre():string{
        return this.nombre
    }
    public set_autor(autor:string){
        this.autor = autor;
    }
    public get_autor():string{
        return this.autor
    }
    public set_isbn(isbn:string){
        this.isbn = isbn;
    }
    public get_isbn():string{
        return this.isbn;
    }
    public set_numero_de_reserba(numero_de_reserba:string){
        this.numero_de_reserba = numero_de_reserba;
    }
    public get_numero_de_reserba():string{
        return this.numero_de_reserba;
    }
    public encontrar(encontrar:string){
        return encontrar;
    }
    public crear(crear:string){
        return crear;
    }
    public destruir(destruir:string){
        return destruir;
    }
};
   
