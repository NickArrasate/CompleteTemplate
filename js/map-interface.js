var maps = require('google-maps');
maps.KEY = require("./../.env").mapapiKey;

function initMap(x,y) {
  maps.load(function(google) {

    var myLatLng = {lat: 45.5145, lng: -122.6801};
    var markLatLng = {lat: x,
                      lng: y
                    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 10,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var marker = new google.maps.Marker({
      position: markLatLng,
      map: map,
      title: 'Hello World!'
    });
  });
}
