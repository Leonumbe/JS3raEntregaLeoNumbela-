//desafio 2

//El contexto de la interaccion se da a partir del ingreso a una pagina web, la cual ofrece habitaciones para alquilar, Previo al ingreso de la pagina la misma solicita datos basicos, los cuales son validados.
//una vez que ingresados debe selecionar una habitacion y la cantidad de dias. 
//El simulador en funcion a su selecion arroja un detalle parcial por seleccion y un resumen general al final.


//Declaracion de variables globales
let room;
let cost;
let subTotal = 0;    
let tax= 0;
let gap=0.1;
let total = 0;

//Intro
const intro = () =>{
    alert("             Bienvenido a Room for Rent"+
    "\n A continuacion le solicitaremos sus datos"+
    "\n para poder ingresar a la Pagina, gracias!!!");
}
intro();

//Solicitud Nombre
const requestName = () => {
    let name = prompt("Ingrese su nombre");
    while ((name === "" )||(!isNaN(name))) {
        alert("error");
        name = prompt("Debe ingresar su Nombre!")
    }
    return name;
}

//Solicitud de Apellido
const requestSurname = () => {
    let surname = prompt("Ingrese su apellido");
    while (( surname === "")||(!isNaN(surname))){
        alert("error");
        surname = prompt("Debe ingresar su Apellido!");
    }
    return surname;
}

let name1 =requestName()
let surname1 = requestSurname()

//Ingreso a la pagina
const login = () =>{
alert("Bienvenido a -RFR-" +
     "\n           "+ name1 + "  " + surname1 +
     "\nSelecione una habitacion y elija la cantidad de dias que la necesita.");
}
login();

//solicitud de habitacion
const selectRoom = () =>{
    room = prompt("          -Seleccione una Habitacion-"+
                "\nLe recordamos las opciones disponibles:"+
                "\nroom1, "+"room2, "+"room3, "+"room4, "+"room5, "+"room6."+
                "\nEn caso de anular la operacion escriba: "+ "esc");
                
    while((room === "")|| (!isNaN(room))){
        alert("Seleccione una opcion Valida");
        room = prompt("-Seleccione una Habitacion-"+"\nLe recordamos las opciones disponibles:"+
        "\nroom1, "+"room2, "+"room3, "+"room4, "+"room5, "+"room6, "
        +"En caso de anular la operacion digite: "+ "esc");
    }
    switch(room){
        case "room1":
        cost = 50;
        break;
        case "room2":
        cost = 55;
        break;
        case "room3":
        cost = 45;
        break;
        case "room4":
        cost = 70;
        break;
        case "room5":
        cost = 75;
        break;
        case "room6":
        cost = 60;
        break;
        case "esc":
        alert("Operacion Cancelada");
        break;
        default:
            alert("Debe Selecionar una habitacion");
            room = prompt("Seleccione una Habitacion");
        }
    return cost;
}

//Solicitud de catidad de dias
const requestQDays = () => {
    let qDays = prompt("Ingrese la cantidad de dias que requiere la habitacion.");
    while ((isNaN( qDays))|| (qDays ==="")){
            alert("error");
            qDays = prompt("Ingreso invalido, debe ingresar el nro de dias que requiere la habitacion");
        }
        return parseInt(qDays)
}

let cost1 = selectRoom();
let qDays1 = requestQDays();

//Print de selecion realizada
const selection = () =>{
alert("Usted ha selecionado la habitacion: " + room+
        "\nEl $ de la hab. seleccionada por dia es de: " + cost1+"-  Euros."+
        "\nLa cantidad de dias solicitados son: "+ qDays1+" dias.");
}
selection();

//Calculo de subtotal
const subTotalAmount = (A,B) => {
    subTotal += A * B;
    alert("El subtotal de la operacion es de: "+ subTotal+"- Euros");
}
subTotalAmount(cost1, qDays1);

//Calculo de taxes e imp
const taxAmount = (c,d) => {
    tax += c * d;
    alert("Impuestos y taxes: "+ tax+"- Euros");
}
taxAmount(subTotal, gap);

//Calculo total de operacion
const totalAmount = (A,B) => {
    total += A + B;
    alert("El monto total de la operacion es de: "+ total + "- Euros");
}
totalAmount(subTotal, tax);

//detalle final de cierre
const brief = () =>{
alert("Detalle total de la operacion:"+
    "\nHabitacion seleccionada: "+room+
    "\nPrecio de la habitacion: "+cost1+"- Euros."+
    "\nNumero de dias Selecionados: "+qDays1+" dias."+
    "\nTaxes e impuestos de la pag.: "+tax+"- Euros"+
    "\nMonto total de la operacion: "+total+"- Euros" )
}
brief();


