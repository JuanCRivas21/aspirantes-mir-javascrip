function suma(num) {
    let resultado = 0;
    for(let i = 1; i <= num; i++) {
      resultado += i;
    }
    return resultado;
  }
  

  console.log(suma(10))