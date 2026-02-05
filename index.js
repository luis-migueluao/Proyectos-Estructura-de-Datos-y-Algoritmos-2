
console.log("Funcion Regular vs Funcion Flecha");

console.log("Función Regular");
function ParImparRegular(numero) {
  if (numero % 2 === 0){
    console.log(`${numero} es Par`);
  }else {
    console.log(`${numero} es Impar`);
  }
}

ParImparRegular(4);
ParImparRegular(7);
ParImparRegular(10);
ParImparRegular(15);


console.log("Función Flecha");

const ParImparFlecha = (numero) => {
  if (numero % 2 === 0){
    console.log(`${numero} es Par`);
  }else {
    console.log(`${numero} es Impar`);
  }
};

ParImparFlecha(4);
ParImparFlecha(7);
ParImparFlecha(10);
ParImparFlecha(15);

