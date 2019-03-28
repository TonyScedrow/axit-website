
document.getElementById("tab1").onclick = function(){
    document.getElementById("feature-title").innerHTML = "Tabs with soft transitioning effects.";
    document.getElementById("feature-text").innerHTML = 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit ipsam, explicabo itaque accusantium iure sunt enim temporibus iusto soluta commodi aut quaerat voluptatum animi alias eius porro dignissimos reiciendis perspiciatis, recusandae dolor ut. Aliquam, voluptatum?";
    document.getElementById("tab1").classList.add('tab-current');
    document.getElementById("tab2").classList.remove('tab-current');
    document.getElementById("tab3").classList.remove('tab-current');
}

document.getElementById("tab2").onclick = function(){
    document.getElementById("feature-title").innerHTML = "New text";
    document.getElementById("feature-text").innerHTML = 
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
    document.getElementById("tab2").classList.add('tab-current');
    document.getElementById("tab1").classList.remove('tab-current');
    document.getElementById("tab3").classList.remove('tab-current');
}

document.getElementById("tab3").onclick = function(){
    document.getElementById("feature-title").innerHTML = "Some other awesome text";
    document.getElementById("feature-text").innerHTML = 
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur";
    document.getElementById("tab3").classList.add('tab-current');
    document.getElementById("tab1").classList.remove('tab-current');
    document.getElementById("tab2").classList.remove('tab-current');
}


function slider(){
    let currentSlide = $('.client-box.active');
    let nextSlide = currentSlide.next();

    currentSlide.hide().removeClass('active');
    nextSlide.fadeIn(1000).addClass('active');

    if(nextSlide.length == 0){
        $('.client-box').first().fadeIn(1000).addClass('active');
    }
}

setInterval(slider, 10000);

// $('.nextBtn').click(function(){
//     let currentSlide = $('.client-box.active');
//     let nextSlide = currentSlide.next();

//     currentSlide.hide().removeClass('active');
//     nextSlide.fadeIn(1000).addClass('active');

//     if(nextSlide.length == 0){
//         $('.client-box').first().fadeIn(1000).addClass('active');
//     }

// });

// $('.prevBtn').click(function(){
//     let currentSlide = $('.client-box.active');
//     let prevSlide = currentSlide.prev();

//     currentSlide.hide().removeClass('active');
//     prevSlide.fadeIn(1000).addClass('active');

//     if(prevSlide.length == 0){
//         $('.client-box').last().fadeIn(1000).addClass('active');
//     }

// });


// Smooth Scrolling
$('.scroll a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

$(function() {
	menu = $('nav ul');

  $('#open-burger').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});






