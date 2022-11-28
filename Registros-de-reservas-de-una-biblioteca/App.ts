import { Titulo }  from './Titulo';
import { InfoPrestatario } from './Infopresta';
import { Reserva } from './Reserva';

let sql = new Titulo("Conociendo a sql", "Alex", "112606", "1");
let python = new Titulo("Las aventuras de python", "Alets", "Oli", "2");
let typscrip = new Titulo("Conocimiento sobre typscrip", "Alets", "uwu", "3");

let Irvin = new InfoPrestatario ("Irvin","Col Rueda","Activo","jsdhbvfea");
let Chity = new InfoPrestatario ("Citlaly", "Colonia", "Activo", "AA82JNN");
let Ame=new InfoPrestatario ("Ame","Col Pemex","Activo","cjdcjdcjdfue");

let Re= new Reserva("20/10/2022");

Re.agregar_reserva("1",sql,Irvin);
Re.agregar_reserva("2",python,Chity);
Re.agregar_reserva("3",typscrip,Ame);

console.log(Re.buscar_reserva(1));
//console.log(" ");
console.log("**************************************************************");
console.log(" ");
console.log(Re.buscar_reserva(2));
//console.log(Re.buscar_reserva(3));

console.log(Re.lista_reserva());
//Re.modificar_reserva(2,sql,Re,1,Irvin,"Terminado");
//console.log(Re.buscar_reserva(2));
//Re.eliminar_reserva(1);