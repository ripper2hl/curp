<script src="https://cdn.jsdelivr.net/npm/curp/lib/index.min.js"></script>
## Valida

**CURP:**
<input id="validarCurp" type="text" />

<button id="validarBoton">Validar</button>

<script>
document.addEventListener("DOMContentLoaded", function () {
    var validarCurp = document.getElementById("validarCurp");
    var validarBoton = document.getElementById("validarBoton");

    validarBoton.addEventListener("click", function () {
        alert(curp.validar(validarCurp.value));
    });
});
</script>

## Genera

**Nombre:**
<input id="nombre" type="text"/>

**Apellido paterno:**
<input id="apellidoPaterno" type="text" />

**Apellido materno:**
<input id="apellidoMaterno" type="text" />

**Estado:**
<input id="estado" type="text" />

**Fecha de nacimiento:**
<input id="fechaNacimiento" type="date" />

**Sexo:**
<input id="sexo" type="checkbox" />

<button id="GenerarBoton">Generar CURP</button>

<script>
document.addEventListener("DOMContentLoaded", function () {
    var generarBoton = document.getElementById("GenerarBoton");

    generarBoton.addEventListener("click", function () {
        // Implementa la lógica para generar la CURP aquí
    });
});
</script>


```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/ripper2hl/curp/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
