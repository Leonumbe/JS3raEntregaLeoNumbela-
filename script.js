//desafio 3

//Replanteando el desafio del simulador, mantengo la pagina de alq de habitaciones, pero en esta entrega todo el feedback va al adm de la pagina.
//Partiendo del supuesto de una semana de Operaciones. entregamos los siguientes datos:
//Subtotal con referencia de ID por habitacion incluyendo dias alquilados, monto parcial, comision parcial. 
//Total Acumulado de: nro de dias, monto facturado, comisiones percibidas.

// creo objeto habitaciones
class room{
    constructor(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
    }
    roomPrice(){
        return this.price; 
    }
}

//agrego habitaciones disponibles
const rooms1 = new room('1','Charleroi',50);
const rooms2= new room('2','Namur',55);
const rooms3 = new room('3','Nivelles',45);
const rooms4 = new room('4','Moron',70);
const rooms5 = new room('5','Luven',75);
const rooms6 = new room('6','Artwerpen',60);

//Creo objeto nro de dias
class detalleNdias{
    constructor(room,nroDias,tax){
        this.room = room;
        this.nroDias = nroDias;
        this.tax = 0.1
    }
    //funcion para guardar dato
    cantidadDias(){
        return this.nroDias;
    }
    //funcion calcular $xQ
    calcularSubtotal(){
        let subtotal = this.room.price * this.nroDias;
        return subtotal;
    }
    //funcion calcular taxes 10%
    calcularTax(){
        let tax = this.calcularSubtotal() * this.tax;
        return tax;
    }
    mostrarDetalle(){
        return 'Room ID: '+ this.room.id + '\nNro de dias alq: ' + this.nroDias + ' x  $ '+ this.room.roomPrice()+ ' = '+ this.calcularSubtotal()+'-Euros' + '\nTaxes: ' + ' $ '+this.calcularTax()+'-Euros'+'\n';
    }
}

//agrego numero de dias + objeto room
const detalleNdias1 = new detalleNdias(rooms1,3)
const detalleNdias2 = new detalleNdias(rooms2,5)
const detalleNdias3 = new detalleNdias(rooms3,2)
const detalleNdias4 = new detalleNdias(rooms4,6)
const detalleNdias5 = new detalleNdias(rooms5,1)
const detalleNdias6 = new detalleNdias(rooms6,7)


//console.log(detalleNdias1.calcularSubtotal())
//console.log(detalleNdias1.calcularTax())

//Objeto acumulados totales
class acumTotal{
    constructor(fecha,detalleFinal){
        this.fecha = fecha;
        this.detalleFinal = detalleFinal;
    }
    //Calculo total de dias alquilados
    calcularDaysTotal(){
        let total = 0;
        for(const DT of this.detalleFinal){
        total += DT.cantidadDias();
        }
        return total
    }
    //Calculo total de ingreso por alquiler
    calcularAmountTotal(){
        let total = 0;
        for(const AT of this.detalleFinal){
        total += AT.calcularSubtotal();
        }
        return total
    }

    //Calculo total de comision acum
    calcularTaxTotal(){
        let total = 0;
        for(const CT of this.detalleFinal){
        total += CT.calcularTax();
        }
        return total
    
    }
    //muestro total concatenando
    mostrarTotal(){
        let text = '';
        for(const BT of this.detalleFinal){
        text += BT.mostrarDetalle() + '\n';
        }
        text += 'Resumen de Acumulados Semanal: '+ this.fecha +'\nTotal de dias Alquilados: ' + this.calcularDaysTotal()+' dias.' +'\nIngresos Totales por alquiler: $ '+ this.calcularAmountTotal()+'-Euros' +'\nTotal de Comisiones: $ '+ this.calcularTaxTotal()+'-Euros';
        return text
    }

}

// creo un lista con los atrib acumulados
const listaRooms = [];
listaRooms.push(detalleNdias1)
listaRooms.push(detalleNdias2)
listaRooms.push(detalleNdias3)
listaRooms.push(detalleNdias4)
listaRooms.push(detalleNdias5)
listaRooms.push(detalleNdias6)

//cargo nuevo acum
const acumTotal1 = new acumTotal(new Date(),listaRooms)


console.log(acumTotal1.mostrarTotal())


// console.log(acumTotal1. calcularDaysTotal())
// console.log(acumTotal1.calcularAmountTotal())
// console.log(acumTotal1.calcularTaxTotal())
//console.log(listaRooms);


//-----------------------------------/
// Declaracion de objeto Usuario
// class usuario{
//     constructor(firstName,surname){
//         this.firstName = firstName;
//         this.surname = surname;
//     }
//     mostrarUsuario(){
//         return this.firstName +'  '+this.surname
//     }
// }

// const usuarios =[]
// usuarios.push(new usuario('',''))
// usuarios.push(new usuario('',''))
// usuarios.push(new usuario('',''))
// usuarios.push(new usuario('',''))

// //Crear objeto room
// class room{
//     constructor(id,name,price){
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     }
//     roomPrice(){
//         return this.price; 
//     }
// }

// const rooms=[];
// //agrego objetos a la lista rooms
// rooms.push(new room('1','Charleroi',50));
// rooms.push(new room('2','Namur',55));
// rooms.push(new room('3','Nivelles',45));
// rooms.push(new room('4','Moron',70));
// rooms.push(new room('5','Luven',75));
// rooms.push(new room('6','Artwerpen',60));

// document.write("Elija una habitacion"  + "<br>")
// //mostrar los productos disponibles

// for(const room of rooms){
//     document.write(room.id + "-")
//     document.write(room.nombre +"-")
//     document.write("$" + room.precio + "<br>")}

// const elegidos =[]


//-----------------------------------/

