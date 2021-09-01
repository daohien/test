$('.slides').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.brand__wrap > .list__item').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
      }
    
    ]
  });


function header() {
    var header = document.querySelector(".header__bottom");
    window.addEventListener("scroll", function () {
        var y = window.scrollY;
        if (y > 200) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
}

header()


var check = "theFirst";
let navbar = document.querySelector(".nav-bar");
let menu = document.querySelector(".menu")
console.log(navbar)
navbar.addEventListener("click", function(){
    if (check == "theFirst"){
        check = "theSecond";
        navbar.classList.add( "active");
        menu.classList.add("active")
    } else if (check == "theSecond") {
        check = "theFirst";
        navbar.classList.remove( "active");
        menu.classList.remove("active")
    }
})


