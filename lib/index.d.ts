declare namespace curp {
  /**
   * Datos necesarios para la generacion de un CURP.
   * Solo apellidoMaterno es opcional.
   */
  interface Persona {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string;
    genero: string;
    estado: string;
    fechaNacimiento: string;
  }

  interface CatalogoItem {
    label: string;
    value: string;
  }

  interface GeneroCatalogo {
    readonly MASCULINO: 'H';
    readonly FEMENINO: 'M';
    readonly NO_BINARIO: 'X';
  }

  interface EstadoCatalogo {
    readonly AGUASCALIENTES: 'AS';
    readonly BAJA_CALIFORNIA: 'BC';
    readonly BAJA_CALIFORNIA_SUR: 'BS';
    readonly CAMPECHE: 'CC';
    readonly COAHUILA: 'CL';
    readonly COLIMA: 'CM';
    readonly CHIAPAS: 'CS';
    readonly CHIHUAHUA: 'CH';
    readonly DISTRITO_FEDERAL: 'DF';
    readonly CDMX: 'DF';
    readonly DURANGO: 'DG';
    readonly GUANAJUATO: 'GT';
    readonly GUERRERO: 'GR';
    readonly HIDALGO: 'HG';
    readonly JALISCO: 'JC';
    readonly ESTADO_DE_MEXICO: 'MC';
    readonly NO_ESPECIFICADO: 'NE';
    readonly MICHOACAN: 'MN';
    readonly MORELOS: 'MS';
    readonly NAYARIT: 'NT';
    readonly NUEVO_LEON: 'NL';
    readonly OAXACA: 'OC';
    readonly PUEBLA: 'PL';
    readonly QUERETARO: 'QT';
    readonly QUINTANA_ROO: 'QR';
    readonly SAN_LUIS_POTOSI: 'SP';
    readonly SINALOA: 'SL';
    readonly SONORA: 'SR';
    readonly TABASCO: 'TC';
    readonly TAMAULIPAS: 'TS';
    readonly TLAXCALA: 'TL';
    readonly VERACRUZ: 'VZ';
    readonly YUCATAN: 'YN';
    readonly ZACATECAS: 'ZS';
  }
}

declare const curp: {
  validar(curpToValidate: string): boolean;
  getPersona(): curp.Persona;
  generar(persona: curp.Persona): string;
  getEstados(): Array<curp.CatalogoItem>;
  getGeneros(): Array<curp.CatalogoItem>;
  GENERO: curp.GeneroCatalogo;
  ESTADO: curp.EstadoCatalogo;
};

export = curp;
export as namespace curp;
