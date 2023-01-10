const getData = async () => {
  try {
    const response = await fetch( "../data/products.json" );
    const data = await response.json();
    return data;
  } catch ( error ) {
    alert( "Se ha producido un error cargando los datos del servidor" ), error;
  }
};

export default getData;
