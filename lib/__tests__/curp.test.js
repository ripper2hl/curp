const curp = require('../index.js');

describe('curp', () => {
  it('Deberia obtener el genero MASCULINO', () => {
    expect(curp.GENERO.MASCULINO).toBe('H');
  });

  it('Deberia obtener el genero FEMENINO', () => {
    expect(curp.GENERO.FEMENINO).toBe('M');
  });

  it('Debería obtener el género NO_BINARIO', () => {
    expect(curp.GENERO.NO_BINARIO).toBe('X');
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

  it('Deberia obtener el CURP correcto de la persona M CRISTINA QUIAHUA CALIHUA', () => {
    const persona = curp.getPersona();
    persona.nombre = 'M CRISTINA';
    persona.apellidoPaterno = 'QUIAHUA';
    persona.apellidoMaterno = 'CALIHUA';
    persona.genero = curp.GENERO.FEMENINO;
    persona.fechaNacimiento = '19-09-1981';
    persona.estado = curp.ESTADO.VERACRUZ;
    expect(curp.generar(persona)).toBe('QUCC810919MVZHLR01');
  });

  it('Debería obtener el CURP correcto de JESÚS OCIEL BAENA SAUCEDO con Género NO_BINARIO', () => {
    const persona = curp.getPersona();
    persona.nombre = 'JESÚS OCIEL';
    persona.apellidoPaterno = 'BAENA';
    persona.apellidoMaterno = 'SAUCEDO';
    persona.genero = curp.GENERO.NO_BINARIO;
    persona.fechaNacimiento = '09-12-1984';
    persona.estado = curp.ESTADO.COAHUILA;
    expect(curp.generar(persona)).toBe('BASJ841209XCLNCS02');
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
    expect(curp.validar('BASJ841209XCLNCS02')).toBe(true);
  });

  it('Debería capitalizar correctamente el nombre de los estados', () => {
    const estados = curp.getEstados();

    // Verificamos algunos de los estados para asegurarnos que la capitalización es correcta.
    const estadoNuevoLeon = estados.find((estado) => estado.value === 'NL');
    expect(estadoNuevoLeon.label).toBe('Nuevo Leon');

    const estadoAguascalientes = estados.find(
      (estado) => estado.value === 'AS',
    );
    expect(estadoAguascalientes.label).toBe('Aguascalientes');

    const estadoBajaCalifornia = estados.find(
      (estado) => estado.value === 'BC',
    );
    expect(estadoBajaCalifornia.label).toBe('Baja California');

    const estadoDistritoFederal = estados.find(
      (estado) => estado.value === 'DF',
    );
    expect(estadoDistritoFederal.label).toBe('Ciudad de Mexico');

    const estadoJalisco = estados.find((estado) => estado.value === 'JC');
    expect(estadoJalisco.label).toBe('Jalisco');
  });

  it('Debería manejar el caso de estado con guiones correctamente', () => {
    const estados = curp.getEstados();

    const estadoBajaCaliforniaSur = estados.find(
      (estado) => estado.value === 'BS',
    );
    expect(estadoBajaCaliforniaSur.label).toBe('Baja California Sur');

    const estadoSanLuisPotosi = estados.find((estado) => estado.value === 'SP');
    expect(estadoSanLuisPotosi.label).toBe('San Luis Potosi');
  });

  it('Debería manejar el estado NO_ESPECIFICADO correctamente', () => {
    const estados = curp.getEstados();

    const estadoNoEspecificado = estados.find(
      (estado) => estado.value === 'NE',
    );
    expect(estadoNoEspecificado.label).toBe('No Especificado');
  });

  it('Debería retornar todos los estados en el formato adecuado', () => {
    const estados = curp.getEstados();
    const expectedEstados = [
      { label: 'Aguascalientes', value: 'AS' },
      { label: 'Baja California', value: 'BC' },
      { label: 'Baja California Sur', value: 'BS' },
      { label: 'Campeche', value: 'CC' },
      { label: 'Coahuila', value: 'CL' },
      { label: 'Colima', value: 'CM' },
      { label: 'Chiapas', value: 'CS' },
      { label: 'Chihuahua', value: 'CH' },
      { label: 'Ciudad de Mexico', value: 'DF' },
      { label: 'Durango', value: 'DG' },
      { label: 'Guanajuato', value: 'GT' },
      { label: 'Guerrero', value: 'GR' },
      { label: 'Hidalgo', value: 'HG' },
      { label: 'Jalisco', value: 'JC' },
      { label: 'Estado De Mexico', value: 'MC' },
      { label: 'Michoacan', value: 'MN' },
      { label: 'Morelos', value: 'MS' },
      { label: 'Nayarit', value: 'NT' },
      { label: 'Nuevo Leon', value: 'NL' },
      { label: 'Oaxaca', value: 'OC' },
      { label: 'Puebla', value: 'PL' },
      { label: 'Queretaro', value: 'QT' },
      { label: 'Quintana Roo', value: 'QR' },
      { label: 'San Luis Potosi', value: 'SP' },
      { label: 'Sinaloa', value: 'SL' },
      { label: 'Sonora', value: 'SR' },
      { label: 'Tabasco', value: 'TC' },
      { label: 'Tamaulipas', value: 'TS' },
      { label: 'Tlaxcala', value: 'TL' },
      { label: 'Veracruz', value: 'VZ' },
      { label: 'Yucatan', value: 'YN' },
      { label: 'Zacatecas', value: 'ZS' },
      { label: 'No Especificado', value: 'NE' },
    ];

    // Convertir ambos arrays a objetos usando "label" como clave
    const estadosObj = estados.reduce((acc, estado) => {
      acc[estado.label] = estado;
      return acc;
    }, {});

    const expectedEstadosObj = expectedEstados.reduce((acc, estado) => {
      acc[estado.label] = estado;
      return acc;
    }, {});

    // Comparar los objetos
    expect(estadosObj).toEqual(expectedEstadosObj);
  });

  it('debería retornar un array de objetos con label y value', () => {
    const estados = curp.getEstados();
    expect(Array.isArray(estados)).toBe(true);

    estados.forEach((estado) => {
      expect(estado).toHaveProperty('label');
      expect(estado).toHaveProperty('value');
      expect(typeof estado.label).toBe('string');
      expect(typeof estado.value).toBe('string');
    });
  });

  it('debería formatear correctamente los nombres de estados', () => {
    const estados = curp.getEstados();
    const estadoMexico = estados.find((e) => e.value === 'NL');
    expect(estadoMexico.label).toBe('Nuevo Leon');
  });

  it('debería incluir todos los estados conocidos', () => {
    const estados = curp.getEstados();
    const estadosEsperados = [
      'NL',
      'BC',
      'BS',
      'CC',
      'CL',
      'CM',
      'CS',
      'CH',
      'DF',
    ];
    estadosEsperados.forEach((codigo) => {
      expect(estados.some((e) => e.value === codigo)).toBe(true);
    });
  });

  it('debería mantener el orden alfabético en los estados', () => {
    const estados = curp.getEstados();
    const estadosOrdenados = [...estados].sort((a, b) =>
      a.label.localeCompare(b.label),
    );
    expect(estados).toEqual(estadosOrdenados);
  });

  it('debería retornar un array de objetos con label y value', () => {
    const generos = curp.getGeneros();
    expect(Array.isArray(generos)).toBe(true);

    generos.forEach((genero) => {
      expect(genero).toHaveProperty('label');
      expect(genero).toHaveProperty('value');
      expect(typeof genero.label).toBe('string');
      expect(typeof genero.value).toBe('string');
    });
  });

  it('debería formatear correctamente los nombres de géneros', () => {
    const generos = curp.getGeneros();
    const masculino = generos.find((g) => g.value === 'H');
    const femenino = generos.find((g) => g.value === 'M');
    const noBinario = generos.find((g) => g.value === 'X');

    expect(masculino.label).toBe('Masculino');
    expect(femenino.label).toBe('Femenino');
    expect(noBinario.label).toBe('No Binario');
  });

  it('debería mantener el orden alfabético', () => {
    const generos = curp.getGeneros();
    const generosOrdenados = [...generos].sort((a, b) =>
      a.label.localeCompare(b.label),
    );
    expect(generos).toEqual(generosOrdenados);
  });

  it('debería incluir todos los géneros conocidos', () => {
    const generos = curp.getGeneros();
    const generosEsperados = ['H', 'M', 'X'];

    generosEsperados.forEach((codigo) => {
      expect(generos.some((g) => g.value === codigo)).toBe(true);
    });
  });
});
