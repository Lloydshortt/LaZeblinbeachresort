window.addEventListener('scroll', function() {
  var nav = document.getElementById('mainNav');
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});
 
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
 
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}
 
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
var currentSlide = 0;
var totalSlides = 6;
function updateSlider() {
  document.getElementById('slideTrack').style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
  document.getElementById('slideCounter').textContent = (currentSlide + 1) + ' / ' + totalSlides;
  var dots = document.getElementById('slideDots').children;
  for (var i = 0; i < dots.length; i++) {
    dots[i].style.background = i === currentSlide ? '#a8d8df' : 'rgba(255,255,255,.3)';
    dots[i].style.width = i === currentSlide ? '20px' : '8px';
    dots[i].style.borderRadius = '4px';
  }
}
function moveSlide(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  updateSlider();
}
function goToSlide(n) {
  currentSlide = n;
  updateSlider();
}


function showAmenity(id) {
  
  document.querySelectorAll('.amenity-item').forEach(function(el) {
    el.classList.toggle('active', el.dataset.amenity === id);
  });

 
  document.querySelectorAll('.photo-slide').forEach(function(el) {
    el.classList.toggle('visible', el.id === 'slide-' + id);
  });
}