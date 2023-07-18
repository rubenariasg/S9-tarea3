class Numeros {
   vuelto() {
      let cantidad = document.getElementById("cantidad").value;
      cantidad = parseInt(cantidad);

      let precio = document.getElementById("precio").value;
      precio = parseFloat(precio);

      let pago = document.getElementById("pago").value;

      let incluirIVA = document.getElementById("casillaVerificacion").checked;

      let costo = cantidad * precio;
      let vuelto;

      if (incluirIVA) {
         let iva = costo * 0.12;
         costo += iva;
      }

      vuelto = pago - costo;

      let resp = document.getElementById("resp");
      resp.textContent = `El vuelto es: $${vuelto.toFixed(2)}`;
   }

   multiplo() {
      // Un número es múltiplo de otro cuando el resto de la división es cero

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let multi = document.getElementById("multi").value;
      multi = parseInt(multi);
      let resp = document.getElementById("resp");

      if (num % multi == 0) {
         resp.textContent = `${multi} Es multiplo de ${num}`;
      } else {
         resp.textContent = `${multi} No es multiplo de ${num}`;
      }
   }
   divisores() {
      /* 
      Use un arreglo para que se muestre separados con coma
      Usando el metodo join

      Ejemplo:
      
      const arreglo = ['1', '2', '3', '4', '5'];
      const resultado = arreglo.join(', ');

      console.log(resultado);
      
      Resultado: "1, 2, 3, 4, 5"

      */

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let divisores = [];
      for (let i = 1; i < num; i++) {
         if (num % i == 0) {
            divisores.push(i);
         }
      }

      resp.textContent = `Los divisores de ${num} son: ${divisores.join(", ")}`;
   }
   sumaDivisores() {
      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let divisores = [];
      let suma = 0;

      for (let i = 1; i < num; i++) {
         if (num % i == 0) {
            divisores.push(i);
            // Guardo los divisores en un arreglo
            suma += i;
         }
      }
      resp.textContent = `La suma de los divisores de ${num} es: ${suma}`;
   }
   cantidadDivisores() {
      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let divisores = [];
      for (let i = 1; i < num; i++) {
         if (num % i == 0) {
            divisores.push(i);
            // Guardo los divisores en un arreglo
         }
      }
      resp.textContent = `La cantidad de divisores de ${num} es: ${divisores.length}`;
      // La longitud del arreglo es la cantidad de divisores
   }
   perfecto() {
      /* Bosquejo:
      Un número es perfecto cuando la suma de sus divisores (excepto el propio número) es igual al mismo número
      Ejemplo: 6, 28, 496, 8128

      Ejercicio:
      num = 6
      suma = 0

      Para i = 1 hasta i < num   // i=1            i=2           i=3
         Si num % i == 0         // 6%1==0        6%2==0         6%3==0
            suma += i            // suma=0+1=1   suma=1+2=3   suma=3+3=6
         Fin Si
      Fin Para

      Si suma == num      // 6 == 6
         Es perfecto
      Si no
         No es perfecto
      Fin Si 
      
      */

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let suma = 0;

      for (let i = 1; i < num; i++) {
         if (num % i == 0) {
            suma += i;
         }
      }
      if (suma == num) {
         resp.textContent = `${num} es un numero perfecto`;
      } else {
         resp.textContent = `${num} no es un numero perfecto`;
      }
   }
   amigos() {
      /* 
      Dos números son amigos si la suma de los divisores de num1 es igual a num2 y viceversa
      Ejemplo: 220 y 284
      La suma de los divisores de 220 es 284
      1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
      La suma de los divisores de 284 es 220
      1 + 2 + 4 + 71 + 142 = 220 

      */

      let num1 = document.getElementById("amigo1").value;
      num1 = parseInt(num1);
      let num2 = document.getElementById("amigo2").value;
      num2 = parseInt(num2);
      let resp = document.getElementById("resp");
      let suma1 = 0;
      let suma2 = 0;

      for (let i = 1; i < num1; i++) {
         if (num1 % i == 0) {
            suma1 += i;
         }
      }
      for (let i = 1; i < num2; i++) {
         if (num2 % i == 0) {
            suma2 += i;
         }
      }

      if (suma1 == num2 && suma2 == num1) {
         resp.textContent = `${num1} y ${num2} son numeros amigos`;
      } else {
         resp.textContent = `${num1} y ${num2} no son numeros amigos`;
      }
   }
   primo() {
      /* Bosquejo:
      Un número es primo cuando tiene exactamente dos divisores: el 1 y el mismo número 
      Ejemplo: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

      Ejercicio:
      
      num = 4
      i = 2
      mod = 1

      Mientras i < num y mod != 0    // 2<4 y 1!=0
         mod = num % i              // mod = 4 % 2 = 0
         Si mod != 0               // 0 != 0  Falso
            i++                    
         Fin Si
      Fin Mientras 
      
      // i=2 y mod=0 
      // Mientras i < num y mod != 0    // 2<4 y 0!=0 Falso
      // Sale del ciclo

      Si mod != 0                  // 0 != 0 Falso
         Es primo
      Sino
         No es primo
      Fin Si

      */

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let i = 2;
      let mod = 1;

      while (i < num && mod != 0) {
         mod = num % i;
         if (mod != 0) {
            i++;
         }
      }

      if (mod != 0) {
         resp.textContent = `${num} es primo`;
      } else {
         resp.textContent = `${num} no es primo`;
      }
   }
   primosGemelos() {
      /* 
      Los primos gemelos son pares de números primos que están separados por una diferencia de dos.
      Ejemplo:
      3 y 5 son primos gemelos
      5 y 7 son primos gemelos
      11 y 13 son primos gemelos
      17 y 19 son primos gemelos
      
      */

      let num1 = document.getElementById("num1").value;
      num1 = parseInt(num1);
      let num2 = document.getElementById("num2").value;
      num2 = parseInt(num2);
      let resp = document.getElementById("resp");

      let i1,
         i2 = 2;
      let mod1,
         mod2 = 1;

      while (i1 < num1 && mod1 != 0) {
         mod1 = num1 % i1;
         if (mod1 != 0) {
            i1++;
         }
      }

      while (i2 < num2 && mod2 != 0) {
         mod2 = num2 % i2;
         if (mod2 != 0) {
            i2++;
         }
      }

      // Math.abs() saca el valor absoluto de un numero
      // Dado que la diferencia entre los numeros primos gemelos es de 2, se puede sacar el valor absoluto de la resta de los numeros

      if (mod1 != 0 && mod2 != 0 && Math.abs(num1 - num2) == 2) {
         resp.textContent = `${num1} y ${num2} son primos gemelos`;
      } else {
         resp.textContent = `${num1} y ${num2} no son primos gemelos`;
      }
   }
   numeroInvertido() {
      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let invertido = "";

      /* Bosquejo:

      num = 123
      invertido = ""

      Mientras num > 0   // 123 > 0
         mod = 123 % 10    // mod = 3
         num = redondear(num / 10)  // num = 12
         invertido = invertido + mod.toString() // invertido = 3
      Fin Mientras
      
      Mientras num > 0   // 12 > 0
         mod = 12 % 10     // mod = 2
         num = redondear(num / 10)  // num = 1
         invertido = invertido + mod.toString() // invertido = 32
      Fin Mientras

      Mientras num > 0   // 1 > 0
         mod = 1 % 10      // mod = 1
         num = redondear(num / 10)  // num = 0
         invertido = invertido + mod.toString() // invertido = 321
      Fin Mientras

      Mientras num > 0   // 0 > 0 Falso
      Sale del bucle

      "El numero invertido es ", invertido   // 321
      */

      while (num > 0) {
         let mod = num % 10;
         num = Math.floor(num / 10);
         invertido = invertido + mod.toString();
      }

      resp.textContent = `El numero invertido es: ${invertido}`;
   }
   cantidadDigito() {
      /* Bosquejo:
      Para sacar la cantidad de digitos de un numero se divide el numero entre 10.
      Luego acumulo la cantidad de veces que se puede dividir el numero entre 10

      Por ejemplo:
      num = 10
      mientras 10 > 0
         redondear(10 / 10) = 1
         cantidad = 1

      mientras 1 > 0
         redondear(1 / 10) = 0
         cantidad = 2

      mientras 0 > 0 Sale del bucle 

      Cantidad de digitos = 2
      
      */

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let cantidad = 0;

      while (num > 0) {
         num = Math.floor(num / 10);
         cantidad++;
      }
      resp.textContent = `La cantidad de digitos es: ${cantidad}`;
   }
   factorial() {
      // El factorial de un numero se obtiene multiplicando el numero por todos los numeros que le anteceden
      // 5! = 5 * 4 * 3 * 2 * 1 = 120

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let factorial = 1;

      for (let i = 1; i <= num; i++) {
         factorial *= i;
      }
      resp.textContent = `El factorial de ${num} es: ${factorial}`;
   }
   exponente() {
      let base = document.getElementById("base").value;
      base = parseInt(base);
      let exponente = document.getElementById("exponente").value;
      exponente = parseInt(exponente);
      let resp = document.getElementById("resp");
      let resultado = 1;
      for (let i = 1; i <= exponente; i++) {
         resultado *= base;
      }
      resp.textContent = `${base} elevado a la ${exponente} es: ${resultado}`;
   }
   tablaDeMultiplicar() {
      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("tabla");
      let tabla = "";
      for (let i = 1; i <= 12; i++) {
         tabla += `${num} x ${i} = ${num * i}<br>`;
      }
      resp.innerHTML = tabla;
   }
   fibonacci() {
      /* Bosquejo:

      La serie de fibonacci se obtiene sumando los 2 numeros anteriores
      serie = 8  = 0, 1, 1, 2, 3, 5, 8, 13


      num = 3
      serie = ""
      a = 0
      b = 1
      c = 0

      Para i = 0 Hasta i < num     // i=0    0 < 3
         serie = serie + a + ", "  //serie = "0,"
         c = a + b       // c = 0 + 1 = 1  
         a = b          // a = 1
         b = c         // b = 1
      Fin Para

      Para i = 1 Hasta i < num   // i=1    1 < 3
         serie = serie + a + ", "  //serie = "0, 1,"
         c = a + b       // c = 1 + 1 = 2
         a = b          // a = 1
         b = c         // b = 2
      Fin Para

      Para i = 2 Hasta i < num   // i=2    2 < 3
         serie = serie + a + ", "  //serie = "0, 1, 1,"
         c = a + b       // c = 1 + 2 = 3
         a = b          // a = 2
         b = c         // b = 3
      Fin Para

      Para i = 3 Hasta i < num   // i=3    3 < 3 Falso
      Sale del bucle

      "La serie de fibonacci es: ", serie   // "La serie de fibonacci es: 0, 1, 1"
      
      */

      let num = document.getElementById("num").value;
      num = parseInt(num);
      let resp = document.getElementById("resp");
      let serie = "";
      let a = 0;
      let b = 1;
      let c = 0;

      for (let i = 0; i < num; i++) {
         if (i === num - 1) {
            serie += a; // serie = serie + a
         } else {
            serie += `${a}, `;
            // Hago esto para que el numero final de la serie no tenga una coma al final
            // Para que no salga asi: 0, 1, 1, 2, 3, 5, 8, 13,
         }
         c = a + b;
         a = b;
         b = c;
      }
      resp.textContent = serie;
   }
}

const numero = new Numeros();
