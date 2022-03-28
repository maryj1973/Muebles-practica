
//clase padre

class Muebles {
   
   //atributos

    tipo;
    color;
    #tamaño;
    #precio;

    //constructor

    constructor(tipo, color, tamaño, precio){
        this.tipo=tipo;
        this.color=color;
        this.#tamaño=tamaño,
        this.#precio=precio;
    }

    //set

    set setTipo(tipo){
        this.tipo=tipo;
    }
    set setColor(color){
        this.color=color;
    }
    set setTamaño(tamaño){
        this.#tamaño=tamaño;
    }
    set setPrecio(precio){
        this.#precio=precio;
    }

    //get

    get getTipo(){
        return `El tipo es: ${this.tipo}`;
    }
    get getColor(){
        return `El color es: ${this.color}`;
    }
    get getTamaño(){
        return `El tamaño es: ${this.#tamaño}`;
    }
    get getPrecio(){
        return `El precio es: ${this.#precio}`;
    }

    //metodo

         imprimirMueble(){
         console.log(`El tipo es: ${this.tipo}
         El color es: ${this.color}
         El tamaño es: ${this.#tamaño}
         El precio es: ${this.#precio}`);
     }
}

 // subclase hijo 

class Mesa extends Muebles{
    
    //atributo

    #altura;

    //constructor

    constructor(tipo, color, tamaño, precio, altura){
        super(tipo, color, tamaño, precio);
        this.#altura=altura;
    }

    //set

    set setAltura(altura){
        this.#altura=altura;
    }

    //get

    get getAltura(){
        return `La altura es: ${this.#altura}`;
    }

    //metodo

    imprimirAltura(){
        super.imprimirMueble();
        console.log(`Mi altura es: ${this.#altura}`);
    }
}

//definir

const ikea =new Mesa ( 'mesa', 'azul', 'pequeña', '5,99', '0,75');

//imprimir

// console.log(Ikea);
console.table(ikea);