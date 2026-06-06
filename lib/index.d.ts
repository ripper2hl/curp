declare namespace curp {
  interface Persona {
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    genero?: string;
    estado?: string;
    fechaNacimiento?: string;
  }

  interface CatalogoItem {
    label: string;
    value: string;
  }

  interface GeneroCatalogo {
    readonly [key: string]: string;
  }

  interface EstadoCatalogo {
    readonly [key: string]: string;
  }
}

/**
 * CURP (Clave Única de Registro de Población) es una función que proporciona
 * métodos para validar, generar y obtener información relacionada con el CURP
 * en México. Incluye funciones para validar el formato del CURP, generar un
 * CURP a partir de los datos de una persona, y obtener catálogos de estados y
 * géneros. Además, proporciona catálogos predefinidos para géneros y estados
 * que se utilizan en la generación y validación del CURP.
 */
declare const curp: {
  /**
 * Valida que el curp cumpla con el formato y el digito verificador.
 * @param {string} curpToValidate
 * @returns {boolean} true de ser valido, false de ser invalido.
 */
  validar(curpToValidate: string): boolean;

  /**
   * Genera un objeto de tipo `Persona` como punto de partida para generar el CURP.
   * @returns {curp.Persona} Un objeto de tipo `Persona` con campos vacíos.
   */
  getPersona(): curp.Persona;

  /**
   * Genera el CURP a partir de los datos de una persona.
   * @param {curp.Persona} persona - El objeto de tipo `Persona` con los datos necesarios.
   * @returns {string} El CURP generado.
   */
  generar(persona: curp.Persona): string;

  /**
 * Obtiene una lista de los estados con sus nombres capitalizados y los valores
 * correspondientes. Utiliza la función `capitalizeWords` para asegurar que los
 * nombres de los estados estén en formato adecuado y los ordena alfabéticamente.
 *
 * @returns {Array<curp.CatalogoItem>} Una lista de objetos con las propiedades `label` y `value` para cada estado,
 *                         ordenada alfabéticamente por el label.
 */
  getEstados(): Array<curp.CatalogoItem>;

  /**
 * Obtiene una lista de los géneros con sus etiquetas y valores
 * correspondientes. Los ordena alfabéticamente por etiqueta.
 *
 * @returns {Array<curp.CatalogoItem>} Una lista de objetos con las propiedades `label` y `value` para cada género,
 *                         ordenada alfabéticamente por el label.
 */
  getGeneros(): Array<curp.CatalogoItem>;

  /**
   * Catálogo de géneros disponibles para la generación del CURP. Cada clave representa un género y su valor es el código correspondiente.
   * Por ejemplo, "H" para Hombre, "M" para Mujer, y "X" para No Binario.
   * Este catálogo se utiliza para validar y generar el CURP correctamente según el género seleccionado.
   */
  GENERO: curp.GeneroCatalogo;

  /**
   * Catálogo de estados disponibles para la generación del CURP. Cada clave representa un estado y su valor es el código correspondiente.
   * Por ejemplo, "AS" para Aguascalientes, "BC" para Baja California, etc.
   * Este catálogo se utiliza para validar y generar el CURP correctamente según el estado seleccionado.
   */
  ESTADO: curp.EstadoCatalogo;
};

export = curp;
export as namespace curp;
