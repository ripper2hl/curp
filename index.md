# CURP - Generador y Validador de CURP Mexicano

<script src="https://cdn.jsdelivr.net/npm/curp/lib/index.min.js"></script>

## Validar CURP

**CURP:**
<input id="validarCurp" type="text" placeholder="Ingresa tu CURP" />

<button id="validarBoton">Validar</button>

<div id="validarResultado" style="margin-top: 1rem; font-weight: bold;"></div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    var validarCurp = document.getElementById("validarCurp");
    var validarBoton = document.getElementById("validarBoton");
    var validarResultado = document.getElementById("validarResultado");

    validarBoton.addEventListener("click", function () {
        const esValido = curp.validar(validarCurp.value);
        validarResultado.textContent = esValido
            ? "✅ CURP válida"
            : "❌ CURP inválida";
    });
});
</script>

---

## Generar CURP

**Nombre:**
<input id="nombre" type="text" placeholder="Ejemplo: Andrés Manuel" />

**Apellido paterno:**
<input id="apellidoPaterno" type="text" placeholder="Ejemplo: López" />

**Apellido materno:**
<input id="apellidoMaterno" type="text" placeholder="Ejemplo: Obrador" />

**Estado:**
<select id="estado">
  <option value="">Seleccione un estado...</option>
</select>

**Fecha de nacimiento:**
<input id="fechaNacimiento" type="date" />

**Género:**
<select id="genero">
  <option value="">Seleccione un género...</option>
</select>

<button id="generarBoton">Generar CURP</button>

<div id="generarResultado" style="margin-top: 1rem; font-weight: bold;"></div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    var generarBoton = document.getElementById("generarBoton");
    var generarResultado = document.getElementById("generarResultado");

    // Llenar los combos de estados y géneros
    const estadoSelect = document.getElementById("estado");
    curp.getEstados().forEach(({ label, value }) => {
        const option = new Option(label, value);
        estadoSelect.add(option);
    });

    const generoSelect = document.getElementById("genero");
    curp.getGeneros().forEach(({ label, value }) => {
        const option = new Option(label, value);
        generoSelect.add(option);
    });

    generarBoton.addEventListener("click", function () {
        // Obtén la información de la persona desde los campos de entrada
        const persona = curp.getPersona();
        persona.nombre = document.getElementById("nombre").value;
        persona.apellidoPaterno = document.getElementById("apellidoPaterno").value;
        persona.apellidoMaterno = document.getElementById("apellidoMaterno").value;
        persona.estado = document.getElementById("estado").value;
        const fechaNacimientoInput = document.getElementById("fechaNacimiento").value;
        const [year, month, day] = fechaNacimientoInput.split("-");
        persona.fechaNacimiento = `${day}-${month}-${year}`;
        persona.genero = document.getElementById("genero").value;

        // Genera la CURP utilizando la biblioteca curp
        try {
            const curpGenerada = curp.generar(persona);
            generarResultado.textContent = "✅ CURP Generada: " + curpGenerada;
        } catch (error) {
            generarResultado.textContent = "❌ Error: " + error.message;
        }
    });
});
</script>

---

## Acerca de la Librería

CURP es una librería que permite generar y validar la Clave Única de Registro de Población (CURP) mexicana. Es compatible con **Node.js**, **Angular**, **React**, y **JavaScript puro**.

### Instalación

#### npm
```sh
npm install --save curp
```

#### yarn
```sh
yarn add curp
```

#### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/curp/lib/index.min.js"></script>
```

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un problema o tienes una idea para mejorar la librería, no dudes en abrir un issue o enviar un pull request.

---

## Licencia

GPL-3.0 © [Israel Perales](https://www.israel-perales.com)