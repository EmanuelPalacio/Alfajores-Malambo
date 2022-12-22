import getData from "./getData.js";

window.addEventListener( "DOMContentLoaded", async () => {
  const datos = "../data/products.json";
  const products = await getData( datos );
  const contenedor = document.getElementById( "roulette" );

  products.forEach( ( product ) => {
    const div = document.createElement( "div" );
    div.classList.add( "carousel__container" );
    div.innerHTML = `<img class='carousel__container__alfajor' src=${product.img}>
                      <a class='btn__hidden btn__flavor' href='../pages/products.html#${product.name}'>${product.name}</a>
                   `;
    contenedor.appendChild( div );
  } );

  $( document ).ready( function () {
    let total = $( ".carousel__container" ).length,
      rand = Math.floor( Math.random() * total );

    $( ".container__main__roulette__placeholder" ).slick( {
      centerMode: true,
      slidesToShow: 3,
      pauseOnFocus: false,
      pauseOnHover: false,
      respondTo: 'min',
      centerPadding: '60px',
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dragabble: false,
      variableWidth: true,
      adaptiveHeight: true,
    } );
    $( ".container__main__roulette__placeholder" ).slick( "slickGoTo", rand );
  } );
  $( "#roulette_btn" ).click( function () {
    $( ".container__main__roulette__placeholder" ).slick(
      "slickSetOption",
      "autoplaySpeed",
      10,
      true
    );

    setTimeout( function () {
      $( ".container__main__roulette__placeholder" ).slick( "slickPause" );
      $( ".slick-current a" ).removeClass( "btn__hidden" );
      $( ".container__main__roulette__placeholder").addClass("fireworks")
    }, 5000 );
    $( this ).html( "Girar Nuevamente" );
    $( this ).removeClass( "btn" );
    $( this ).addClass( "link" );
  } );
} );
