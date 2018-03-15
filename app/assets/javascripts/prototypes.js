// 参考資料
// https://www.cresco.co.jp/blog/entry/710/
$(document).on('turbolinks:load',function(){
  // コンソールから確認したid。0がついたidはメイン画像
  // prototype_captured_images_attributes_0_content
  // 以降のサブは連番であるので前方一致と後方一致で指定する
  // 参考資料
  // https://teratail.com/questions/36145
  $('[id^="prototype_captured_images_attributes_"][id$="_content"]').on('change',function(){
    if (this.files.length > 0){
      // ファイル情報取得
      var file = this.files[0];
      // 対象のオブジェクトを変数に保存
      // onloadのfunctionの部分で直接指定できないため
      var target = $(this)
      // 背景画像消去するためにcss指定→ひとまず使わない方向で
      // var target_css = target.parent().attr('class');
      console.log('.' + target);
      // ファイル読み込み？
      var reader = new FileReader();
      // ファイルのURLを取得
      reader.readAsDataURL(file);
      // onload：読み込みが正常に完了したときに発火
      reader.onload = function(){
        target.prev('img').attr('src',reader.result);
        // サムネイルを縦横比揃えて表示するようにcssを設定
        target.prev('img').css({
          'width':'auto',
          'height':'auto',
          'max-width':'100%',
          'max-height':'100%'
        });
        // 初期の背景画像を消す→ひとまず使わない方向で
        // $('.' + target_css).css({
        //   "backgroundImage": 'none'
        // });
      }
    }
  });
});
