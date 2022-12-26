const getData = async () => {
  try {
    const response = await fetch( "https://emanuelpalacio.github.io/Alfajores-Malambo/data/products.json" );
    const data = await response.json();
    return data;
  } catch ( error ) {
    alert( "Se ha producido un error cargando los datos del servidor" ), error;
  }
};

export default getData;
