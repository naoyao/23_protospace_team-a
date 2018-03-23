$(function(){
  function buildHTML(comment){
    var html = `<div class="media">
                  <div class='media-left'>
                    <img src='${comment.user_name}' style='width: 64px; height: 64px;'>
                  </div>
                  <div class='media-body'>
                    <h4 class='media-heading' id='top-aligned-media'>${comment.user_name}</h4>
                    <p>${comment.text}</p>
                  </div>
                </div>`
    return html;
  }
  $('#new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var href = window.location.href + '/comments'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.comments').append(html)
      $('.textbox').val('')
    })
  })
});
