//---------------------------------- change navbar color on scroll -----------------------
function changeBg(){
    var navbar =document.getElementById('navbar');
    var scrollValue =window.scrollY;
    if(scrollValue<5){
      navbar.style.backgroundImage = "";
    }
    else{
      navbar.style.backgroundImage = "linear-gradient(45deg, rgba(255, 116, 182, 1) 0%, rgba(254, 113, 188, 1) 5%, rgba(241, 105, 208, 1) 17%, rgba(217, 99, 236, 1) 32%, rgba(201, 99, 249, 1) 44%, rgba(180, 107, 255, 1) 58%, rgba(139, 132, 255, 1) 83%, rgba(129, 138, 255, 1) 93%, rgba(129, 138, 255, 1) 100%)";
    }
  }
  window.addEventListener('scroll',changeBg);
  
  //--------------------------------- Screensshot Owl Carousel-------------------------
  $(".ss-carousel").owlCarousel({
    margin: 30,
    loop: true,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
  
  //-------------------------------------- Feedback Owl Carousel------------------------
  $(".feedback-carousel").owlCarousel({
    items: 2,
    margin: 50,
    loop: true,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        }   
    }
  });
  //----------------------------------------- Brand Logo Using Owl Carousel ------------------
  $(".logo-carousel").owlCarousel({
    margin: 100,
    loop: true,
    dots: false,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplaySpeed: 800,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        },  
    }
  });