import getData from "./getData.js";

window.addEventListener( "DOMContentLoaded", async () => {
   const products = await getData();

   const filter = ( string ) => {
      const category = products.filter( ( product ) => product.cat === string );
      return category;
   };

   const append = ( array, string, position ) => {
      const container = document.getElementById( string );
      let slide = position;
      array.forEach( ( product ) => {
         const slideId = slide++;
         const div = document.createElement( "div" );
         div.classList.add( "alfajor__container" );
         div.setAttribute( "id", `${product.name}` );
         div.innerHTML = `
                        <div class="slider__opener" id="${slideId}">
                        <img src="${product.img}" alt="${product.name}"></div>
                     `;
         container.appendChild( div );
      } );
   };

   const clasicos = filter( "clasicos" );
   const postres = filter( "postres" );
   const varietales = filter( "varietales" );
   const frutales = filter( "frutales" );
   const licores = filter( "licores" );

   append( clasicos, "clasicos", 0 );
   append( postres, "postres", clasicos.length );
   append( varietales, "varietales", postres.length + clasicos.length );
   append( frutales, "frutales", postres.length + clasicos.length + varietales.length );
   append( licores, "licores", frutales.length + postres.length + clasicos.length + varietales.length );
} );
