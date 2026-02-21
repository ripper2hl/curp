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

    var promoHTML = '<br><br><span style="font-weight: normal; font-size: 0.95em;">🎉 <strong>¡Trámite listo!</strong> ¿Te gustan los juegos clásicos? Relájate un rato con <a href="https://loteria.israel-perales.com/?ref=curp.israel-perales.com" target="_blank" rel="noopener" style="color: #159957; text-decoration: underline; font-weight: bold;">Tu Lotería Mexicana</a>.</span>';

    validarBoton.addEventListener("click", function () {
        const esValido = curp.validar(validarCurp.value);
        if (esValido) {
            validarResultado.innerHTML = "✅ CURP válida" + promoHTML;
        } else {
            validarResultado.innerHTML = "❌ CURP inválida";
        }
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
        var promoHTML = '<br><br><span style="font-weight: normal; font-size: 0.95em;">🎉 <strong>¡Trámite listo!</strong> ¿Te gustan los juegos clásicos? Relájate un rato con <a href="https://loteria.israel-perales.com/?ref=curp.israel-perales.com" target="_blank" rel="noopener" style="color: #159957; text-decoration: underline; font-weight: bold;">Tu Lotería Mexicana</a>.</span>';

        try {
            const curpGenerada = curp.generar(persona);
            generarResultado.innerHTML = "✅ CURP Generada: " + curpGenerada + promoHTML;
        } catch (error) {
            generarResultado.innerHTML = "❌ Error: " + error.message;
        }
    });
});
</script>

<p style="font-size: 0.8em; color: #6a737d; margin-top: 1.5rem; line-height: 1.5;">⚠️ <strong>Aviso técnico:</strong> Esta página es una demostración de la librería open source <a href="https://www.npmjs.com/package/curp" style="color: #6a737d; text-decoration: underline;" target="_blank" rel="noopener">curp</a>. Los cálculos se realizan localmente en el cliente mediante algoritmos de generación lógica y no consultan bases de datos gubernamentales. Para obtener un documento con validez oficial, por favor acuda a la <a href="https://www.gob.mx/curp/" style="color: #6a737d; text-decoration: underline;" target="_blank" rel="noopener">plataforma de RENAPO</a>.</p>

---

## 🛠️ Más herramientas útiles para México

<blockquote style="border-left: 4px solid #159957; padding: 1rem 1.2rem; margin: 1.5rem 0; background: #f6f8fa; border-radius: 4px;">

<h3 style="margin-top: 0;">📮 Tu código postal para México</h3>

<p>Consulta y busca información de cualquier código postal o colonia de México de forma rápida, ligera y completamente offline.</p>

<p>
  <a href="https://cp.israel-perales.com/?ref=curp.israel-perales.com" style="display: inline-block; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold; color: #ffffff !important; background-color: #000; margin-right: 0.5rem; margin-bottom: 0.5rem;" target="_blank" rel="noopener">🌐 Versión Web</a>
  <a href="https://play.google.com/store/apps/details?id=com.perales.sepomex&hl=es&gl=mx&ref=curp.israel-perales.com" style="display: inline-block; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold; color: #ffffff !important; background-color: #159957; margin-right: 0.5rem; margin-bottom: 0.5rem;" target="_blank" rel="noopener">▶️ Google Play</a>
</p>

</blockquote>

<blockquote style="border-left: 4px solid #155799; padding: 1rem 1.2rem; margin: 1.5rem 0; background: #f6f8fa; border-radius: 4px;">

<h3 style="margin-top: 0;">💼 Tu Finiquito Mexicano</h3>

<p>Calculadora rápida y sencilla para estimar finiquitos y liquidaciones laborales en México basada en la ley actual.</p>

<p>
  <a href="https://finiquito.israel-perales.com/?ref=curp.israel-perales.com" style="display: inline-block; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold; color: #ffffff !important; background-color: #000; margin-right: 0.5rem; margin-bottom: 0.5rem;" target="_blank" rel="noopener">🌐 Versión Web</a>
  <a href="https://play.google.com/store/apps/details?id=com.perales.finiquito&hl=es&gl=mx&ref=curp.israel-perales.com" style="display: inline-block; padding: 0.6rem 1.2rem; border-radius: 6px; text-decoration: none; font-weight: bold; color: #ffffff !important; background-color: #155799; margin-right: 0.5rem; margin-bottom: 0.5rem;" target="_blank" rel="noopener">▶️ Google Play</a>
</p>

</blockquote>

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

<div style="background: linear-gradient(135deg, #1e272e, #155799); color: #ffffff; text-align: center; padding: 2rem; border-radius: 8px; margin-top: 2.5rem;">

<p style="font-size: 1.3em; margin-bottom: 0.5rem;">👨‍💻 ¿Te interesa el código detrás de esto?</p>

<p style="font-size: 1em; line-height: 1.6; max-width: 600px; margin: 0 auto 1.2rem auto;">Soy <strong>Israel Perales</strong>, Arquitecto de Software. Descubre cómo construyo plataformas empresariales, microservicios y más herramientas open source en mi portafolio.</p>

<a href="https://www.israel-perales.com/portafolio?ref=curp.israel-perales.com" target="_blank" rel="noopener" style="display: inline-block; padding: 0.7rem 1.8rem; border-radius: 6px; background-color: #fff; color: #1e272e; font-weight: bold; text-decoration: none; font-size: 1.05em;">🌐 Ver Portafolio Web</a>

</div>
<style> .site-footer { display: none !important; } </style>