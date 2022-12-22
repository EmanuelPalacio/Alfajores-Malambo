import getData from "./getData.js";

window.addEventListener( "DOMContentLoaded", async () => {
   const data = "../data/products.json";
   const products = await getData( data );

   const filter = ( string ) => {
      const category = products.filter( ( product ) => product.cat === string );
      return category;
   };

   const append = ( array, string ) => {
      const container = document.getElementById( string );
      array.forEach( ( product ) => {
         const legend = ( product.disp == 1 ? "Consultar Disponibilidad" : "" );
         const div = document.createElement( "div" );
         div.classList.add( "alfajor__container" );
         div.innerHTML = `<img src="${product.img}" alt="${product.name}">
                        <span class="product__title">${product.name}</span>
                        <span class="product__desc">${product.desc}</span>
                        <span class="product__alert">${legend}</span>
                     `;
         container.appendChild( div );
      } );

   };

   const clasicos = filter( "clasicos" );
   const postres = filter( "postres" );
   const varietales = filter( "varietales" );
   const frutales = filter( "frutales" );
   const licores = filter( "frutales" );

   append( clasicos, 'clasicos' );
   append( postres, 'postres' );
   append( varietales, 'varietales' );
   append( frutales, 'frutales' );
   append( licores, 'licores' );
} );
