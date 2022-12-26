import getData from "./getData.js";

window.addEventListener( "DOMContentLoaded", async () => {
  const products = await getData();
  const container = document.getElementById( "slider" );

  products.forEach( ( product ) => {
    const legend = product.disp == 1 ? "(Consultar Disponibilidad)" : "";
    const div = document.createElement( "div" );
    div.classList.add( "slider__container" );
    div.innerHTML = `
                      <div class="slider__container__header">
                        <h1>${product.name}</h1>
                        <hr>
                      </div>
                      <div class='slider__container__main'>
                        <img class='slider__container__main__image' src=${product.img} alt=${product.name}>
                        <p class='slider__container__main__desc'>${product.desc} <br><span class='slider__container__main__warn'>${legend}</span></p>
                      </div>
                   `;
    container.appendChild( div );
  } );

  $( document ).ready( function () {
    $( ".slider__opener" ).click( function () {
      let slideId = $( this ).attr( "id" );
      $( "#popup1" ).css( "visibility", "visible" );
      $( "#popup1" ).css( "opacity", "1" );

      $( "#slider" ).slick( {
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: false,
        adaptiveHeight: false,
      } );
      $( "#slider" ).slick( "slickGoTo", slideId );

      $( "#close" ).click( function () {
        $( "#popup1" ).css( "visibility", "hidden" );
        $( "#popup1" ).css( "opacity", "0" );
        $( "#slider" ).slick( "unslick" );
      } );

      const $slideShow = $( "#slider" );

      function offsetDots( slideNum ) {
        const $slickDots = $slideShow.find( ".slick-dots" ),
          numDots = $slickDots.find( "li" ).length,
          dotWidth = $slickDots.find( "li:first" ).outerWidth( true ),
          offset = dotWidth * slideNum;

        $slickDots.css( "marginLeft", offset * -1 - Math.ceil( dotWidth / 2 ) );

        $slickDots.find( "li" ).removeClass( "slick-secondary" );

        if ( slideNum > 0 ) {
          $slickDots
            .find( "li:nth-of-type(" + slideNum + ")" )
            .addClass( "slick-secondary" );
        }

        if ( slideNum < numDots - 1 ) {
          $slickDots
            .find( "li:nth-of-type(" + ( slideNum + 2 ) + ")" )
            .addClass( "slick-secondary" );
        }
      }

      $slideShow.on( "init", function ( event, slick ) {
        offsetDots( 0 );
      } );

      $slideShow.on(
        "beforeChange",
        function ( event, slick, currentSlide, nextSlide ) {
          offsetDots( nextSlide );
        }
      );
    } );
  } );
} );
