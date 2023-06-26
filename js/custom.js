//const carousel = new bootstrap.Carousel('#myCarousel')

const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 100000,
  wrap: false,
})


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var footer = document.getElementById("container-footer");

function abrirModal(img){
  modal.style.display = "block";
  modalImg.src = img;
  $('#container-footer').addClass('none');
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $('#container-footer').removeClass('none');
}