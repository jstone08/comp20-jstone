
	var southLat = 42.352271;
	var southLng = -71.05524200000001;
	var request = new XMLHttpRequest();
	var southStation = new google.maps.LatLng(southLat, southLng);
	var myOptions = {zoom: 13, center: southStation, mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map;
	var marker;
	var infowindow = new google.maps.InfoWindow();
			
	function init() {
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		renderMap();
	}

	function renderMap() {
		southStation 	= new google.maps.LatLng(southLat, southLng);
		marker = new google.maps.Marker({
			position: southStation,
			map: map,
			icon: 'T_logo.png'
		});
		andrew 		= new google.maps.LatLng(42.330154, -71.057655);
		porterSquare 	= new google.maps.LatLng(42.3884, -71.11914899999999);
		harvardSquare 	= new google.maps.LatLng(42.373362, -71.118956);
		JFK 			= new google.maps.LatLng(42.320685, -71.052391);
		savinHill		= new google.maps.LatLng(42.31129, -71.053331);
		parkStreet 		= new google.maps.LatLng(42.35639457, -71.0624242);
		broadway 		= new google.maps.LatLng(42.342622, -71.056967);
		northQuincy 	= new google.maps.LatLng(42.275275, -71.029583);
		shawmut 		= new google.maps.LatLng(42.29312583, -71.06573796000001);
		davis 			= new google.maps.LatLng(42.39674, -71.121815);
		alewife 		= new google.maps.LatLng(42.395428, -71.142483);
		kendallMIT 		= new google.maps.LatLng(42.36249079, -71.08617653);
		charlesMGH 		= new google.maps.LatLng(42.361166, -71.070628);
		downtownCrossing= new google.maps.LatLng(42.355518, -71.060225);
		quincyCenter 	= new google.maps.LatLng(42.251809, -71.005409);
		quincyAdams 	= new google.maps.LatLng(42.233391, -71.007153);
		ashmont 		= new google.maps.LatLng(42.284652, -71.06448899999999);
		wollaston 		= new google.maps.LatLng(42.2665139, -71.0203369);
		fieldsCorner 	= new google.maps.LatLng(42.300093, -71.061667);
		centralSquare 	= new google.maps.LatLng(42.365486, -71.103802);
		braintree 		= new google.maps.LatLng(42.2078543, -71.0011385);
				
		map.panTo(southStation);
	
		marker = new google.maps.Marker({
			position: southStation,
			map: map,
			icon: 'T_logo.png'
		});

  		marker2 = new google.maps.Marker({
    		position: andrew,
    		map: map,
   	 		icon: 'T_logo.png'
 		});
		
		marker.setMap(map);
					
		// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
	}



