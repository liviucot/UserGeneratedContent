// ------------- THIS IS FOR GALLERY WHEN YOU CLICK A PICTURE ---------------

function openModal() {
   document.getElementById('myModal').style.display = "block";
 }

 function closeModal() {
   document.getElementById('myModal').style.display = "none";
 }

 function currentSlide(n) {
   showSlides(slideIndex = n);
 }

 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
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

// ------------- THIS IS FOR MODAL - WHEN YOU CLICK NEXT/CANCEL/BACK BUTTON ---------------

$(function () {
   $("body").on("click", "#prev", function () {
      var _prev = $(".pt-page.current").prev();
      _prev = _prev.length == 0 ? $(".pt-page:last") : _prev;
      $(".pt-page.current").fadeOut(function () {
         $(this).removeClass("current");
         _prev.fadeIn(function () {
            $(this).addClass("current");
         });
      });
   });

   $("body").on("click", "#next", function () {
      var _next = $(".pt-page.current").next();
      _next = _next.length == 0 ? $(".pt-page:first") : _next;
      $(".pt-page.current").fadeOut(function () {
         $(this).removeClass("current");
         _next.fadeIn(function () {
            $(this).addClass("current");
         });
      });
   });

   $("body").on("click", "#more-photos-plus", function () {
      var _next = $(".pt-page.current").next();
      _next = _next.length == 0 ? $(".pt-page:first") : _next;
      $(".pt-page.current").fadeOut(function () {
         $(this).removeClass("current");
         _next.fadeIn(function () {
            $(this).addClass("current");
         });
      });
   });
});

// ------------- THIS IS FOR SHOWING THE MODAL ALONG WITH THE OVERLAY ---------------

function CustomAlert() {
   this.performCustomAlert = function (dialog) {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = windowHeight + "px";
      dialogbox.style.display = "block";
      dialogoverlay.dialog('close');
   }
   this.ok = function () {
      var reloadbox = document.getElementById('dialogbox');
      var reloadOverlay = document.getElementById('dialogoverlay');
      reloadbox = window.location.reload();
      reloadOverlay = window.location.reload();
   }

}

var newAlert = new CustomAlert();

// ------------- THIS IS FOR SHOWING THE MODAL ALONG WITH THE OVERLAY ---------------

function imageAlert() {
   this.performImageAlert = function (dialog) {
      var windowWidth2 = window.innerWidth;
      var windowHeight2 = window.innerHeight;
      var galleryoverlay = document.getElementById('gallery-overlay');
      var galleryDialogbox = document.getElementById('gallery-dialogbox');
      galleryoverlay.style.display = "block";
      galleryoverlay.style.height = windowHeight2 + "px";
      galleryDialogbox.style.display = "block";
   }
   this.ok = function () {
      document.getElementById('gallery-dialogbox').style.display = "none";
      document.getElementById('gallery-overlay').style.display = "none";
   }
}

var imageAlert = new imageAlert();

// ------------- THIS IS FOR THE TABS FROM THE MODAL - DESKTOP/FACEBOOK/INSTAGRAM ---------------

function openTab(evt, tabName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();