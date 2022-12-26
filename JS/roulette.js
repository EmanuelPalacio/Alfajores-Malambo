import getData from "./getData.js";

window.addEventListener( "DOMContentLoaded", async () => {
  const products = await getData();
  const container = document.getElementById( "roulette" );
  let slide = 0;

  products.forEach( ( product ) => {
    const slideId = slide++;
    const div = document.createElement( "div" );
    div.classList.add( "carousel__container" );
    div.innerHTML = `<img class='carousel__container__alfajor' src=${product.img} alt=${product.name}>
                      <a class='btn__hidden btn__flavor slider__opener' href='#' id=${slideId}>${product.name}</a>
                   `;
    container.appendChild( div );
  } );

  $( document ).ready( function () {
    let total = $( ".carousel__container" ).length,
      rand = Math.floor( Math.random() * total );

    $( ".container__main__roulette__placeholder" ).slick( {
      infinite: true,
      centerMode: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      respondTo: "min",
      centerPadding: "60px",
      slidesToShow: 3,       
      cssEase: "linear",
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
      1,
      true
    );

    setTimeout( function () {
      $( ".container__main__roulette__placeholder" ).slick( "slickPause" );
      $( ".slick-current a" ).removeClass( "btn__hidden" );
      $( ".container__main__roulette__placeholder" ).addClass( "fireworks" );
    }, 5000 );
    $( this ).html( "Girar Nuevamente" );
    $( this ).removeClass( "btn" );
    $( this ).addClass( "link" );
  } );
} );
