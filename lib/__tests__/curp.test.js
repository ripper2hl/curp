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
    expect(curp.ESTADO.NO_ESPECIFICADO).toBe('NE');
  });

  it('Deberia obtener el CURP correcto', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Jesús Israel';
    persona.apellidoPaterno = 'Perales';
    persona.apellidoMaterno = 'Martínez';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '06-09-1992';
    persona.estado = curp.ESTADO.NUEVO_LEON;
    expect(curp.generar(persona)).toBe('PEMJ920906HNLRRS00');
  });

  it('Deberia obtener el CURP correcto de Felipe Calderón', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Felipe de Jesús';
    persona.apellidoPaterno = 'Calderón';
    persona.apellidoMaterno = 'Hinojosa';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '18-08-1962';
    persona.estado = curp.ESTADO.MICHOACAN;
    expect(curp.generar(persona)).toBe('CAHF620818HMNLNL09');
  });

  it('Deberia obtener el CURP correcto de Enrique Peña Nieto', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Enrique';
    persona.apellidoPaterno = 'Peña';
    persona.apellidoMaterno = 'Nieto';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '20-07-1966';
    persona.estado = curp.ESTADO.ESTADO_DE_MEXICO;
    expect(curp.generar(persona)).toBe('PXNE660720HMCXTN06');
  });

  it('Deberia obtener el CURP correcto de AMLO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Andrés Manuel';
    persona.apellidoPaterno = 'López';
    persona.apellidoMaterno = 'Obrador';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '13-11-1953';
    persona.estado = curp.ESTADO.TABASCO;
    expect(curp.generar(persona)).toBe('LOOA531113HTCPBN07');
  });

  it('Deberia obtener el CURP correcto de Oscar Sanchez', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('SASO750909HDFNNS05');
  });

  it('Deberia obtener el CURP correcto sin apellido materno de Luis Perez', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Luis';
    persona.apellidoPaterno = 'Perez';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('PEXL750909HDFRXS02');
  });

  it('Deberia obtener el CURP correcto de Luis Perez Piedra', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Luis';
    persona.apellidoPaterno = 'Perez';
    persona.apellidoMaterno = 'Piedra';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-2000';
    persona.estado = curp.ESTADO.NUEVO_LEON;
    expect(curp.generar(persona)).toBe('PEPL000909HNLRDSA1');
  });

  it('Deberia obtener el CURP correcto de Maria Del Carmen Loredo Caballero', () => {
    const persona = curp.getPersona();
    persona.nombre = 'Maria Del Carmen';
    persona.apellidoPaterno = 'Loredo';
    persona.apellidoMaterno = 'Caballero';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '27-06-1990';
    persona.estado = curp.ESTADO.SAN_LUIS_POTOSI;
    expect(curp.generar(persona)).toBe('LOCC900627MSPRBR07');
  });

  it('Deberia obtener el CURP correcto de MARIA GILA HURTADO HERRERA', () => {
    const persona = curp.getPersona();
    persona.nombre = 'MARIA GILA';
    persona.apellidoPaterno = 'HURTADO';
    persona.apellidoMaterno = 'HERRERA';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '01-09-1920';
    persona.estado = curp.ESTADO.SAN_LUIS_POTOSI;
    expect(curp.generar(persona)).toBe('HUHG200901MSPRRL09');
  });

  it('Deberia obtener el CURP correcto de MARIA DEL ROSARIO MARTINEZ RIVAS', () => {
    const persona = curp.getPersona();
    persona.nombre = 'MARIA DEL ROSARIO';
    persona.apellidoPaterno = 'MARTINEZ';
    persona.apellidoMaterno = 'RIVAS';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '08-09-1981';
    persona.estado = curp.ESTADO.SAN_LUIS_POTOSI;
    expect(curp.generar(persona)).toBe('MARR810908MSPRVS00');
  });

  it('Deberia obtener el CURP correcto de ONDREJ JUAN HERNANDEZ LOPEZ tomando como nombre ONDREJ y no JUAN', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ONDREJ JUAN';
    persona.apellidoPaterno = 'HERNANDEZ';
    persona.apellidoMaterno = 'LOPEZ';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '01-05-1999';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('HELO990501HVZRPN09');
  });

  it('Deberia obtener el CURP correcto de IRMA LETICIA MAR SOLIS tomando como nombre IRMA y no LETICIA', () => {
    const persona = curp.getPersona();
    persona.nombre = 'IRMA LETICIA';
    persona.apellidoPaterno = 'MAR';
    persona.apellidoMaterno = 'SOLIS';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '05-08-2005';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('MASI050805MVZRLRA8');
  });

  it('Deberia obtener el CURP correcto de MARIA ERNESTINA RAFAELA CONTRERAS MORALES tomando como nombre ERNESTINA y no RAFAELA', () => {
    const persona = curp.getPersona();
    persona.nombre = 'MARIA ERNESTINA RAFAELA';
    persona.apellidoPaterno = 'CONTRERAS';
    persona.apellidoMaterno = 'MORALES';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '10-11-1972';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('COME721110MVZNRR03');
  });

  it('Deberia obtener el CURP correcto de MARIA VILLA TRUJILLO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'MARIA';
    persona.apellidoPaterno = 'VILLA';
    persona.apellidoMaterno = 'TRUJILLO';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '06-09-1982';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('VITM820906MVZLRR00');
  });

  it('Deberia obtener el CURP correcto de JOSE MARIA TEZOCO APALE', () => {
    const persona = curp.getPersona();
    persona.nombre = 'JOSE MARIA';
    persona.apellidoPaterno = 'TEZOCO';
    persona.apellidoMaterno = 'APALE';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '22-06-1947';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('TEAM470622HVZZPR07');
  });

  it('Deberia obtener el CURP correcto de JOSE SAUL GALVAN DEL RIO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'JOSE SAUL';
    persona.apellidoPaterno = 'GALVAN';
    persona.apellidoMaterno = 'DEL RIO';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '23-09-1970';
    persona.estado = curp.ESTADO.SAN_LUIS_POTOSI;
    expect(curp.generar(persona)).toBe('GARS700923HSPLXL06');
  });

  it('Deberia obtener el CURP correcto de ALBERTO ÑANDO RODRIGUEZ', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ALBERTO';
    persona.apellidoPaterno = 'ÑANDO';
    persona.apellidoMaterno = 'RODRIGUEZ';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('XARA750909HDFNDL00');
  });

  it('Deberia obtener el CURP correcto de ALBERTO RODRIGUEZ ÑANDO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ALBERTO';
    persona.apellidoPaterno = 'RODRIGUEZ';
    persona.apellidoMaterno = 'ÑANDO';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('ROXA750909HDFDNL07');
  });

  it('Deberia obtener el CURP correcto de ANDRES ICH RODRÍGUEZ', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ANDRES';
    persona.apellidoPaterno = 'ICH';
    persona.apellidoMaterno = 'RODRIGUEZ';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    expect(curp.generar(persona)).toBe('IXRA750909HDFCDN09');
  });

  it('Deberia obtener el CURP correcto de la persona EXTRANJERA ANGELINE ZULEYKA NETAN', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ANGELINE';
    persona.apellidoPaterno = 'ZULEYKA';
    persona.apellidoMaterno = 'NETAN';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '08-03-1954';
    persona.estado = curp.ESTADO.NO_ESPECIFICADO;
    expect(curp.generar(persona)).toBe('ZUNA540308MNELTN05');
  });

  it('Deberia obtener la CURP correcta de la persona ROSA GUADALUPE O RELLING ALVARADO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ROSA GUADALUPE';
    persona.apellidoPaterno = 'O RELLING';
    persona.apellidoMaterno = 'ALVARADO';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '22-01-1997';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('OXAR970122MVZXLS09');
  });

  it('Deberia obtener el CURP correcto de la persona ANAHI N. LUIS MENDO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'ANAHI';
    persona.apellidoPaterno = 'N. LUIS';
    persona.apellidoMaterno = 'MENDO';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '27-03-1981';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('NXMA810327MVZXNN08');
  });

  it('Deberia obtener el CURP correcto de la persona EDNA PEREZ H. TOLENTINO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'EDNA';
    persona.apellidoPaterno = 'PEREZ';
    persona.apellidoMaterno = 'H. TOLENTINO';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '20-11-1977';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('PEHE771120MVZRXD09');
  });

  function curpSinNombre() {
    const persona = curp.getPersona();
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    curp.generar(persona);
  }

  it('Deberia lanzar un error al faltar el nombre', () => {
    expect(curpSinNombre).toThrow();
  });

  function curpSinApellidoPaterno() {
    const persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    curp.generar(persona);
  }

  it('Deberia lanzar un error al faltar el apellido paterno', () => {
    expect(curpSinApellidoPaterno).toThrow(Error);
  });

  function curpSinGenero() {
    const persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.fechaNacimiento = '09-09-1975';
    persona.estado = curp.ESTADO.CDMX;
    curp.generar(persona);
  }

  it('Deberia lanzar un error al faltar el genero', () => {
    expect(curpSinGenero).toThrow(Error);
  });

  function curpSinFechaNacimiento() {
    const persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.estado = curp.ESTADO.CDMX;
    curp.generar(persona);
  }

  it('Deberia lanzar un error al faltar la fecha de nacimiento', () => {
    expect(curpSinFechaNacimiento).toThrow(Error);
  });

  function curpSinEstado() {
    const persona = curp.getPersona();
    persona.nombre = 'Oscar';
    persona.apellidoPaterno = 'Sanchez';
    persona.apellidoMaterno = 'Santos';
    persona.genero = curp.GENERO.MASCULINO;
    persona.fechaNacimiento = '09-09-1975';
    curp.generar(persona);
  }

  it('Deberia lanzar un error al faltar el estado', () => {
    expect(curpSinEstado).toThrow(Error);
  });

  it('Deberia obtener false al validar un curp incorrecto', () => {
    expect(curp.validar('XARA750909HDFNDL01')).toBe(false);
  });

  it('Deberia obtener true al validar un curp correcto', () => {
    expect(curp.validar('PXNE660720HMCXTN06')).toBe(true);
    expect(curp.validar('LOOA531113HTCPBN07')).toBe(true);
  });
});
