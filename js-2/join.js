function join(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  
  let array = ["Hola", "mi", "nombre", "es" ,"Juan"];
console.log(join(array)); 
