import getData from "./getData.js";

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getData();
  const container = document.getElementById("roulette");
  let slide = 0;

  products.forEach((product) => {
    const slideId = slide++;
    const div = document.createElement("div");
    div.classList.add("carousel__container");
    div.innerHTML = `<img class='carousel__container__alfajor' src=${product.img} alt=${product.name}>
                      <button class='btn__hidden btn__flavor slider__opener' id=${slideId}>${product.name}</button>
                   `;
    container.appendChild(div);
  });

  $(document).ready(function () {

    $(".container__main__roulette__placeholder").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
      variableWidth: true,
      adaptiveHeight: false,
      cssEase: "linear",
      centerMode: true,
      arrows: false,
      dragabble: false,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  });
  $("#roulette_btn").click(function () {
    $(".container__main__roulette__placeholder").slick(
      "slickSetOption",
      "speed",
      400,
      true
    );
    $( ".slick-slide").css(
      "transition",
      "all 0.399s ease-in-out"
    );

    setTimeout(function () {
      $(".container__main__roulette__placeholder").slick("slickPause");
      $(".slick-current button").removeClass("btn__hidden");
      $(".container__main__roulette__placeholder").addClass("fireworks");
    }, 5000);
    $(this).html("Girar Nuevamente");
    $(this).removeClass("btn");
    $(this).addClass("link");
    $(this).click(function () {
      $(".slick-current button").addClass("btn__hidden"),
        $(".container__main__roulette__placeholder").removeClass("fireworks");
    });
  });
});
