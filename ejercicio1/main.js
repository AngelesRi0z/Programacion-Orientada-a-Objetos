/*
Ejercicio #1: Un Objeto Persona
Parte 1 JavaScript
Cree una clase llamada Persona que acepte el nombre de una persona como una cadena y su edad como un número.


La clase Person debe tener un método llamado Describe que devuelve una cadena con la siguiente sintaxis: "nombre, edad años".

Por ejemplo, si Manny tiene 19 años, la función Describe de su objeto devolverá "Manny, 19 años".

HTML de la parte 2
Cree una página HTML que tenga 2 cuadros de entrada: uno para el nombre y otro para la edad. Cuando alguien ingresa un nombre y una edad, la página mostrará una lista de "{Nombre}, {x} años".
*/
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    describe(){
        return `${this.name},${this.age} years old`;
    }
}

document.getElementById("aplastame").addEventListener("click",function(){
    let names = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let persona = new Person(names,age);
    document.getElementById("escribeAqui").innerHTML = persona.describe();
});


/*
Ejercicio #2: La lista de lectura
¡Cree una lista de libros orientada a objetos!

Comience con una página HTML que tenga el título: Mi lista de libros.

Parte 1 Libro
En su archivo Javascript, cree una clase llamada Book. Cada Libro debe tener varias propiedades:

Título
Género
Autor
Leer (verdadero o falso)
Leer fecha; puede estar en blanco, de lo contrario debe ser un objeto JS Date()
Agregue a su página HTML 2 libros que hagan referencia a los objetos Book.

Lista de libros de la parte 2
En su archivo Javascript, cree una clase BookList.

BookLists debe tener las siguientes propiedades:

Número de libros marcados como leídos
Número de libros marcados como aún no leídos
Una referencia al siguiente libro para leer (objeto de libro)
Una referencia al libro actual que se está leyendo (objeto de libro)
Una referencia al último libro leído (objeto de libro)
Una matriz de todos los libros.
Cada lista de libros debe tener algunos métodos:

.añadir(libro)
debe agregar un libro a la lista de libros.
.finishCurrentBook()
debe marcar el libro que se está leyendo actualmente como "leído"
Dale una fecha de lectura de nueva Fecha (Date.now())
Cambiar el último libro leído para que sea el libro que acaba de terminar
Cambiar el libro actual para que sea el próximo libro que se lea
Cambie la propiedad del próximo libro que se leerá para que sea el primer libro no leído que encuentre en la lista de libros
Booklists y Books pueden necesitar más métodos que eso. Trate de pensar en más que podrían ser útiles.

Actualice su página HTML con una sección que muestre el nombre de su lista de libros, la cantidad de libros marcados como leídos y el próximo libro para leer.
*/