interface Props {
  nombre: string;
}

function Saludo({ nombre }: Props) {
  return <h1>Hola {nombre}</h1>;
}




export default Saludo;