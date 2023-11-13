//logo slider

$('.logos-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 2
        }
    }]
});

// fix form
function openForm() {
    document.getElementById("quoteForm").style.right = "0";
  }
  
  function closeForm() {
    document.getElementById("quoteForm").style.right = "-300px";
  }
  
