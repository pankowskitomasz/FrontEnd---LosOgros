function pointsMap() {
    var opts = {
        center: new google.maps.LatLng(52.21578,20.88538),
        zoom:11,
        maxZoom:11,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: false,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("pointsmap"),opts);
    var point1 = new google.maps.Marker({
        position: new google.maps.LatLng(52.213993, 21.007095),
        map: map,
        animation: google.maps.Animation.Drop
        });
    var point2 = new google.maps.Marker({
        position: new google.maps.LatLng(52.192111, 21.042800),
        map: map,
        animation: google.maps.Animation.Drop
        });
    var point3 = new google.maps.Marker({
        position: new google.maps.LatLng(52.225562, 20.931907),
        map: map,
        animation: google.maps.Animation.Drop
        });
}

function switcher(targetID,itemRef){
    var itemArr = $(targetID+" .switcher-item");
    if(itemRef<itemArr.length){
        var i=0;
        for(i;i<itemArr.length;i++){
            if($(itemArr[i]).hasClass("active")){
                $(itemArr[i]).removeClass("active");
                $(itemArr[itemRef]).addClass("active");
                break;
            }
        }
    }
}

function updateFrm(){
    $(".contact-form").attr("action","http://losogors.epizy.com/wiadomosc");
}

function setCookie(paramA, valueA, durationA) {
  var now = new Date();
  now.setTime(now.getTime() + (durationA*24*60*60*1000));
  var expires = "expires="+ now.toUTCString();
  document.cookie = paramA + "=" + valueA + ";" + expires + ";path=/";
}

function getCookie(paramA) {
    var param = paramA + "=";
    var decodedStr = decodeURIComponent(document.cookie);
    var cookieArray = decodedStr.split(';');
    var i;
    for(i=0; i<cookieArray.length; i++) {
        if (cookieArray[i].indexOf(paramA)>=0) {
            return cookieArray[i].split("=")[1];
        }
    }
}
$(document).ready(function(){
    $(".menu-button").click(function(){
        $(".menu-full").toggleClass("show");
    });
    $(".switcher-nav .switcher-nav-item").click(function(){
        switcher($(this).parent().attr("data-target"),$(this).attr("data-rel"));
    });
    if(getCookie("rodoAccept")!=="1"){
        var gpdrMsg = "GDPR declaration - this is website demo, so it doesn't store any data.\n";
        gpdrMsg += "All data entered by You in forms on this website are processed only\n";
        gpdrMsg += "in order to present operation of website mechanisms and then\n";
        gpdrMsg += "are removed.\n";
        gpdrMsg += "Click OK if you accept presented rules of data use and processing";
        var gpdrAccept = confirm(gpdrMsg);
        if(gpdrAccept===true){
            setCookie("rodoAccept","1",1);
        }
    }
    setTimeout(updateFrm,11000);
});









