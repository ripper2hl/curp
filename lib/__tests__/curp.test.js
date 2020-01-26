const curp = require('../index.js');

describe('curp', () => {
  it('Deberia obtener el genero MASCULINO', () => {
    expect(curp.GENERO.MASCULINO).toBe('H');
  });

  it('Deberia obtener el genero FEMENINO', () => {
    expect(curp.GENERO.FEMENINO).toBe('M');
  });

  it('Deberia obtener todas las claves de los estados', () => {
    expect(curp.ESTADO.AGUASCALIENTES).toBe('AS');
    expect(curp.ESTADO.BAJA_CALIFORNIA).toBe('BC');
    expect(curp.ESTADO.BAJA_CALIFORNIA_SUR).toBe('BS');
    expect(curp.ESTADO.CAMPECHE).toBe('CC');
    expect(curp.ESTADO.COAHUILA).toBe('CL');
    expect(curp.ESTADO.COLIMA).toBe('CM');
    expect(curp.ESTADO.CHIAPAS).toBe('CS');
    expect(curp.ESTADO.CHIHUAHUA).toBe('CH');
    expect(curp.ESTADO.DISTRITO_FEDERAL).toBe('DF');
    expect(curp.ESTADO.CDMX).toBe('DF');
    expect(curp.ESTADO.DURANGO).toBe('DG');
    expect(curp.ESTADO.GUANAJUATO).toBe('GT');
    expect(curp.ESTADO.GUERRERO).toBe('GR');
    expect(curp.ESTADO.HIDALGO).toBe('HG');
    expect(curp.ESTADO.JALISCO).toBe('JC');
    expect(curp.ESTADO.ESTADO_DE_MEXICO).toBe('MC');
    expect(curp.ESTADO.MICHOACAN).toBe('MN');
    expect(curp.ESTADO.MORELOS).toBe('MS');
    expect(curp.ESTADO.NAYARIT).toBe('NT');
    expect(curp.ESTADO.NUEVO_LEON).toBe('NL');
    expect(curp.ESTADO.OAXACA).toBe('OC');
    expect(curp.ESTADO.PUEBLA).toBe('PL');
    expect(curp.ESTADO.QUERETARO).toBe('QT');
    expect(curp.ESTADO.QUINTANA_ROO).toBe('QR');
    expect(curp.ESTADO.SAN_LUIS_POTOSI).toBe('SP');
    expect(curp.ESTADO.SINALOA).toBe('SL');
    expect(curp.ESTADO.SONORA).toBe('SR');
    expect(curp.ESTADO.TABASCO).toBe('TC');
    expect(curp.ESTADO.TAMAULIPAS).toBe('TS');
    expect(curp.ESTADO.TLAXCALA).toBe('TL');
    expect(curp.ESTADO.VERACRUZ).toBe('VZ');
    expect(curp.ESTADO.YUCATAN).toBe('YN');
    expect(curp.ESTADO.ZACATECAS).toBe('ZS');
  });

  it('Deberia obtener el CURP correcto', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Jesús Israel';
    persona.apellidoPaterno = 'Perales';
    persona.apellidoMaterno = 'Martínez';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '06-09-1992';
    persona.estado = curp.ESTADO.NUEVO_LEON;
    expect(curp.generar(persona)).toBe('PEMJ920906HNLRRS00');
  });

  it('Deberia obtener el CURP correcto de Felipe Calderón', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Felipe de Jesús';
    persona.apellidoPaterno = 'Calderón';
    persona.apellidoMaterno = 'Hinojosa';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '18-08-1962';
    persona.estado = curp.ESTADO.MICHOACAN;
    expect(curp.generar(persona)).toBe('CAHF620818HMNLNL09');
  });

  it('Deberia obtener el CURP correcto de Enrique Peña Nieto', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Enrique';
    persona.apellidoPaterno = 'Peña';
    persona.apellidoMaterno = 'Nieto';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '20-07-1966';
    persona.estado = curp.ESTADO.ESTADO_DE_MEXICO;
    expect(curp.generar(persona)).toBe('PXNE660720HMCXTN06');
  });

  it('Deberia obtener el CURP correcto de AMLO', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Andrés Manuel';
    persona.apellidoPaterno = 'López';
    persona.apellidoMaterno = 'Obrador';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '13-11-1953';
    persona.estado = curp.ESTADO.TABASCO;
    expect(curp.generar(persona)).toBe('LOOA531113HTCPBN07');
  });

  it('Deberia obtener el CURP correcto de Ricardo Aleman', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Ricardo';
    persona.apellidoPaterno = 'Aleman';
    persona.apellidoMaterno = 'Perez';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '21-03-1963';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('AAPR630321HDFLRC09');
  });

  it('Deberia obtener el CURP correcto de una mujer', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Concepción';
    persona.apellidoPaterno = 'Salgado';
    persona.apellidoMaterno = 'Briseño';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '26-06-1956';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('SABC560626MDFLRN09');
  });

  it('Deberia obtener el CURP correcto de Oscar Sanchez', () => {
    let persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('SASO750909HDFNNS05');
  });
});
