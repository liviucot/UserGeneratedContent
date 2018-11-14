$( document ).ready(function() {

   $('.gallery-item').on('click', function() {
      var num_thumbnails = $('.gallery-item').children().length;
      var sr = $(this).children('img').attr('src');
      var clicked_thumbnail_index = $($('.gallery-item')).index(this);
        if(num_thumbnails > 1) {
          $('nav').html('<button type="button" class="previous">Prev</button><button type="button" class="next">Next</button>');
        }

      var caption = $(this).children('img').attr('alt');
      $('#modal-image').attr('src', sr);
      $('h4.modal-image-caption').html(caption);
      $('#myModal').modal('show');

   });

});
