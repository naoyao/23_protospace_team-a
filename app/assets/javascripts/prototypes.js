// 参考資料
// https://www.cresco.co.jp/blog/entry/710/
$(document).ready(function(){
  // コンソールから確認したid
  // prototype_captured_images_attributes_0_content
  $("#prototype_captured_images_attributes_0_content").on('change',function(){
    if (this.files.length > 0){
      // ファイル情報取得
      var file = this.files[0];
      // ファイル読み込み？
      var reader = new FileReader();
      reader.readAsDataURL(file);
      // onloadについてよくわかってません
      reader.onload = function(){
        // app/views/prototypes/new.html.hamlの15行目のimgにsrcでファイルパスを指定する
        $("#main_image_uploader").children('img').attr('src',reader.result);
      }
    }
  });
});
