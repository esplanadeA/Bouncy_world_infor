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
console.log(cards);
cards.forEach(function (card, index) {
  var img = card.querySelector('.card-img-top');
  console.log(img);
  img.src = imageUrls[index]; // Assign the image URL to the src attribute of the img element
});
