function mapInit() {
    var centerPosition = new google.maps.LatLng(35.387415, 139.426093);
    var option = {
        zoom : 18,
        center : centerPosition,
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };
    //地図本体描画
    var googlemap = new google.maps.Map(document.getElementById("mapField"), option);


    //情報ウインドウオプションの指定
    var infoWindowOption = {
    position : centerPosition,  //中心座標
    content : "慶應SFC サウス食堂"  //ウインドウ内に表示する文字列
    };

    //情報ウインドウ追加
    var infoWindow = new google.maps.InfoWindow(infoWindowOption);
    infoWindow.open(googlemap);
}

    mapInit();



    $(function(){
      //見えないようにしとく
      $('.effect div, .effect p').css("opacity","0");
      // スクロールのファンクション
      $(window).scroll(function (){
        // それぞれのeffectに反映する
        $(".effect").each(function(){
          // effectの位置
          var Position = $(this).offset().top;
          // スクロールの量
          var scroll = $(window).scrollTop();
          // ウィンドウの高さ
          var windowHeight = $(window).height();
          // スクロールして要素が見える時(必要に応じて変更)
          if (scroll > Position - windowHeight + windowHeight/3){
            // 見えるようにする
            $("p, div",this).css("opacity","1" );
            // 追加のエフェクト(先)
            $("p",this).css({
              "プロパティ名": "プロパティの値",
              "プロパティ名": "プロパティの値"
            });
            // スクロールして要素が見えない時は以下
          } else {
            // 見えないようにする
            $("p, div",this).css("opacity","0" );
            $("p",this).css({
              // 追加のエフェクト(後)
              "プロパティ名": "プロパティの値",
              "プロパティ名": "プロパティの値"
            });
          }
        });
      });
    });
