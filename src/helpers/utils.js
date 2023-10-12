export function validarRUT(rut) {
    const valor = rut.replace('.', '').toUpperCase();
    const cuerpo = valor.slice(0, -1);
    const dv = valor.slice(-1);
    const rutExpReg = /^\d{7,8}-[0-9K]$/;
  
    if (!rutExpReg.test(valor)) {
      return false; // Formato no válido
    }
  
    let suma = 0;
    let multiplo = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma = suma + multiplo * Number(cuerpo.charAt(i));
      if (multiplo < 7) {
        multiplo++;
      } else {
        multiplo = 2;
      }
    }
  
    const dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 10 && dv === 'K') {
      return true;
    } else if (dvEsperado === 11 && dv === '0') {
      return true;
    } else if (dvEsperado === Number(dv)) {
      return true;
    } else {
      return false;
    }
  }
  