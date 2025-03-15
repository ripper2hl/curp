# curp [![NPM version][npm-image]][npm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Build status](https://github.com/ripper2hl/curp/actions/workflows/main.yml/badge.svg)](https://github.com/ripper2hl/curp/actions/workflows/main.yml)

[![](https://data.jsdelivr.com/v1/package/npm/curp/badge?style=rounded)](https://www.jsdelivr.com/package/npm/curp)

[![Join the chat at https://gitter.im/curpjs/community](https://badges.gitter.im/curpjs/community.svg)](https://gitter.im/curpjs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Genera y valida el CURP (Clave Única de Registro de Población) mexicano.

Compatible con Node, Angular y Javascript solo.

## Instalación

### npm
```sh
$ npm install --save curp
```

### yarn
```sh
$ yarn add curp
```

### CDN
* jsdelivr [https://cdn.jsdelivr.net/npm/curp/lib/index.js](https://cdn.jsdelivr.net/npm/curp@1.2.1/lib/index.js)
* unpkg [https://unpkg.com/curp/lib/index.js](https://unpkg.com/curp@1.2.1/lib/index.js)


## Uso:

### Javascript
```html
<script type="text/javascript" src=".../node_modules/curp/lib/index.js"></script>
```
#### Validar
```js
console.log(curp.validar('LOOA531113HTCPBN07')); //true
```
#### Generar
```js
let persona = curp.getPersona();
persona.nombre = 'Andrés Manuel';
persona.apellidoPaterno = 'López';
persona.apellidoMaterno = 'Obrador';
persona.genero = curp.GENERO.MASCULINO;
persona.fechaNacimiento = '13-11-1953';
persona.estado = curp.ESTADO.TABASCO;
console.log(curp.generar(persona)) //LOOA531113HTCPBN07
```

### Nodejs.

#### Validar

```js
const curp = require('curp');
console.log( curp.validar('LOOA531113HTCPBN07') ); //true
```
#### Generar

```js
const curp = require('curp');
let persona = curp.getPersona();
persona.nombre = 'Andrés Manuel';
persona.apellidoPaterno = 'López';
persona.apellidoMaterno = 'Obrador';
persona.genero = curp.GENERO.MASCULINO;
persona.fechaNacimiento = '13-11-1953';
persona.estado = curp.ESTADO.TABASCO;
console.log( curp.generar(persona) ); //LOOA531113HTCPBN07
```

### Angular.

#### Generar y validar

```js
import { Component } from '@angular/core';
import curp from 'curp';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = testCurp();
}


function testCurp() {
  let persona = curp.getPersona();
  persona.nombre = 'Andrés Manuel';
  persona.apellidoPaterno = 'López';
  persona.apellidoMaterno = 'Obrador';
  persona.genero = curp.GENERO.MASCULINO;
  persona.fechaNacimiento = '13-11-1953';
  persona.estado = curp.ESTADO.TABASCO;
  console.log( curp.generar(persona) );
  return curp.generar(persona);
}

function validarCurp(curpString) {
  return curp.validar(curpString);
}
```

### Uso de Estados y Géneros para Formularios

#### Obtener lista de estados
```js
const estados = curp.getEstados();
// Retorna un array de objetos { label, value }
// Ejemplo:
// [
//   { label: "Aguascalientes", value: "AS" },
//   { label: "Baja California", value: "BC" },
//   ...
// ]
```

#### Obtener lista de géneros
```js
const generos = curp.getGeneros();
// Retorna un array de objetos { label, value }
// Ejemplo:
// [
//   { label: "Femenino", value: "M" },
//   { label: "Masculino", value: "H" },
//   { label: "No Binario", value: "X" }
// ]
```

#### Ejemplo de uso con HTML
```html
<select id="estado">
  <option value="">Seleccione un estado...</option>
</select>

<script>
  const select = document.getElementById('estado');
  curp.getEstados().forEach(({ label, value }) => {
    const option = new Option(label, value);
    select.add(option);
  });
</script>
```


## Licencia

GPL-3.0 © [Israel Perales](https://www.israel-perales.com)


[npm-image]: https://badge.fury.io/js/curp.svg
[npm-url]: https://npmjs.org/package/curp
[coveralls-image]: https://coveralls.io/repos/ripper2hl/curp/badge.svg
[coveralls-url]: https://coveralls.io/r/ripper2hl/curp

Se usa código de los siguientes proyectos:

* https://github.com/prestigos/curp.js

* https://github.com/smaniotov/mx-document-generator

* https://github.com/IcaliaLabs/curp-calculation
