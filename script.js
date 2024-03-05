var imageUrls = [
  './asset/product_images/1_product_dog.JPEG',
  './asset/product_images/2_lolli_wonderland.JPEG',
  './asset/product_images/3_rugby.JPEG',
  './asset/product_images/4_elsa.JPEG',
  './asset/product_images/5_jungle_forest.JPEG',
  './asset/product_images/6_minion.JPEG',
  // Add more image URLs as needed
];

// Get all card elements
var cards = document.querySelectorAll('.card');
cards.forEach(function (card, index) {
  var img = card.querySelector('.card-img-top');
  img.src = imageUrls[index]; // Assign the image URL to the src attribute of the img element
});

$('#recipeCarousel').carousel({
  interval: 10000,
});

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
