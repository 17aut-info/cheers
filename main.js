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
