# curp [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Genera y valida el CURP (Clave Única de Registro de Población) mexicano.

## Instalación

```sh
$ npm install --save curp
```

## Uso:

### Nodejs.
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
```

## Licencia

GPL-3.0 © [Israel Perales](https://www.ingenieroperales.com)


[npm-image]: https://badge.fury.io/js/curp.svg
[npm-url]: https://npmjs.org/package/curp
[travis-image]: https://travis-ci.com/ripper2hl/curp.svg?branch=master
[travis-url]: https://travis-ci.com/ripper2hl/curp
[daviddm-image]: https://david-dm.org/ripper2hl/curp.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ripper2hl/curp
[coveralls-image]: https://coveralls.io/repos/ripper2hl/curp/badge.svg
[coveralls-url]: https://coveralls.io/r/ripper2hl/curp

Se usa código de los siguientes proyectos:

* https://github.com/prestigos/curp.js

* https://github.com/smaniotov/mx-document-generator

* https://github.com/IcaliaLabs/curp-calculation
