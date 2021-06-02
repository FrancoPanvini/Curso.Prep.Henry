// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto={
      D: 1,
      B: 2,
      C: 3
    } ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz=[];
  for(i in objeto){
    matriz.push([i,objeto[i]]);
  }
  return matriz;

  //otra solución con Object.keys
  // var matriz=[];
  // var key = Object.keys(objeto);
  // for (i=0;i<key.length;i++) {
  //   matriz.push([key[i],objeto[key[i]]]);
  // }
  // return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array=[];
  var rta={};
  array=string.split('');
  var abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  abc.forEach(function(i){
    if (array.includes(i)){
      sum=array.reduce(function(j,x){
        if(x===i){return j+1}
        else {return j}
      },0);  
      rta[i]=sum;
    }
  })
  return rta;

  //otra solución más directa y sencilla recorriendo el string con for 
  // var rta = {};
  // for (i=0;i<string.length;i++) {
  //   if (!rta[string[i]]) {      //si no existe lo inicializo porq si no desp trata de sumar undefined + 1 y ese NaN
  //     rta[string[i]]=0
  //   }
  //   rta[string[i]] = rta[string[i]] + 1;  
  // } 
  // return rta;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var abc=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
  var ABC=abc.join('').toUpperCase().split('');
  var array=s.split('');
  var rta=[];
  array.forEach(function(i){
    if (ABC.includes(i)){rta.push(i)}
  })
  array.forEach(function(i){
    if (abc.includes(i)){rta.push(i)}
  })
  return rta.join('');

  //otra solución con for
  //   var rtaMay='';
  //   var rtaMin='';
  //   for (i=0;i<s.length;i++) {
  //     if (s[i].toUpperCase()===s[i]) {
  //       rtaMay= rtaMay + s[i];
  //     } else {
  //       rtaMin= rtaMin + s[i];
  //     }
  //   }
  //   return rtaMay + rtaMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ');
  var rta=[];
  
  // solución con .forEach
  // array.forEach(function(i){rta.push(i.split('').reverse().join(''))});
  // return rta.join(' ');

  //solución con .map
  rta=array.map(function(i){return i.split('').reverse().join('')});
  return rta.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var array=numero.toString().split('');
  for (var i=0;i<Math.floor(array.length/2);i++){
    if (array[i]!==array[array.length-1-i]){
      return 'No es capicua';
    }
  }
  return 'Es capicua';

  //otra solución usando strings y la función anterior
  // numero = numero.toString();
  // if (asAmirror(numero)===numero) {
  //   return 'Es capicua';
  // } else { 
  //   return 'No es capicua';
  // }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var abc=['a','b','c'];
  var array=cadena.split('');
  var rta=[];
  array.forEach(function(i) {
    if(!abc.includes(i)) {
      rta.push(i);
    }
  })
  return rta.join('');

  //otra solución con for
  // var rta = '';
  // for (i=0 ; i<cadena.length ; i++) {
  //   if (cadena[i]!=='a' && cadena[i]!=='b' && cadena[i]!=='c') {
  //     rta = rta + cadena[i];
  //   }
  // }
  // return rta;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var rta = arr.sort(function(a,b){
    return a.length - b.length;
  })
  return rta;

  //solución con for
  // var rta=[arr[0]];
  // var rtaIzq;
  // var rtaDer;

  // for (i=1 ; i<arr.length ; i++) {
  //   for (j=0 ; j<rta.length ; j++) {
  //     if (rta[j].length>arr[i].length) {
  //       rtaIzq = rta.slice(0,j);
  //       rtaDer = rta.slice(j);
  //       rta = rtaIzq.concat(arr[i]).concat(rtaDer);
  //       break;
  //     }
  //     if (j===rta.length-1) {
  //       rta.push(arr[i]);
  //       break;
  //     }
  //   }
  // }
  // return rta;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var rta=[]
  arreglo1.forEach(function(i){
    if(arreglo2.includes(i)&&!rta.includes(i)){
      rta.push(i);
    }
  })
  return rta;
  
  //solución con for
  // var rta = [];
  // for (i=0 ; i<arreglo1.length ; i++) {
  //   for (j=0 ; j<arreglo2.length ; j++) {
  //     if (arreglo2[j]===arreglo1[i]) { 
  //       rta.push(arreglo2[j]);
  //       break;
  //     }
  //   }
  // }
  // return rta;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

