var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  function myFunction(){
    var x = document.getElementById("menu");
    if(x.style.display == "block"){
      x.style.display = "none";
    }else{
      x.style.display = "block";
    }

  }