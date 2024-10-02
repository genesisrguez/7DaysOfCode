let nombre;
let edad;
let lenguaje;
let idioma;

const yes = 1;
const no = 2;

nombre = prompt("¿Cómo te llamas?");
edad = prompt("¿Cuántos años tienes?");
lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`¡Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

while (idioma != yes && idioma != no) {
    idioma = prompt(`¿Te gustaría estudiar otro lenguaje además de ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO .`);
} 
    if (idioma == yes ) {
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
    } else if (idioma == no ) {
        alert("Ahh que pena... ¡Te deseo suerte con el lenguaje de tu interés!")
    }
