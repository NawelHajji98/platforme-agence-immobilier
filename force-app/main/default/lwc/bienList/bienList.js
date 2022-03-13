import { LightningElement} from 'lwc';
import imageMaison from '@salesforce/resourceUrl/image1';

export default class BienList extends LightningElement {
  image1=imageMaison;
  
 slideIndex = 1;
  
  
  // Next/previous controls
   plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
   currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
   showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}