$(document).on('turbolinks:load',function(){
  $('[id^="prototype_captured_images_attributes_"][id$="_content"]').on('change',function(){
    if (this.files.length > 0){
      var file = this.files[0];
      var target = $(this);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(){
        target.prev('img').attr('src',reader.result);
        target.prev('img').css({
          'width':'auto',
          'height':'auto',
          'max-width':'100%',
          'max-height':'100%'
        });
        target.next('input').next('input').remove();
      }
    }
  });
});
