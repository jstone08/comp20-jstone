
	var southLat = 42.352271;
	var southLng = -71.05524200000001;
	var request = new XMLHttpRequest();
	var southStation = new google.maps.LatLng(southLat, southLng);
	var myOptions = {zoom: 12, center: southStation, mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map;
	var marker;
	var infowindow = new google.maps.InfoWindow();
			
	function init() {
		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		renderMap();
	}

	function renderMap() {
		southStation 	= new google.maps.LatLng(southLat, southLng);
		markerSouthStation = new google.maps.Marker({
			position: southStation,
			map: map,
			icon: 'T_logo.png'
		});

		andrew 		= new google.maps.LatLng(42.330154, -71.057655);
		markerAndrew = new google.maps.Marker({
			position: andrew,
			map: map,
			icon: 'T_logo.png'
		});

		porterSquare 	= new google.maps.LatLng(42.3884, -71.11914899999999);
		markerPorterSquare = new google.maps.Marker({
			position: porterSquare,
			map: map,
			icon: 'T_logo.png'
		});

		harvardSquare 	= new google.maps.LatLng(42.373362, -71.118956);
		markerHarvardSquare = new google.maps.Marker({
			position: harvardSquare,
			map: map,
			icon: 'T_logo.png'
		});

		JFK 			= new google.maps.LatLng(42.320685, -71.052391);
		markerJFK = new google.maps.Marker({
			position: JFK,
			map: map,
			icon: 'T_logo.png'
		});

		savinHill		= new google.maps.LatLng(42.31129, -71.053331);
		markerSavinHill = new google.maps.Marker({
			position: savinHill,
			map: map,
			icon: 'T_logo.png'
		});

		parkStreet 		= new google.maps.LatLng(42.35639457, -71.0624242);
		markerParkStreet = new google.maps.Marker({
			position: parkStreet,
			map: map,
			icon: 'T_logo.png'
		});

		broadway 		= new google.maps.LatLng(42.342622, -71.056967);
		markerBroadway = new google.maps.Marker({
			position: broadway ,
			map: map,
			icon: 'T_logo.png'
		});

		northQuincy 	= new google.maps.LatLng(42.275275, -71.029583);
		markerNorthQuincy = new google.maps.Marker({
			position: northQuincy,
			map: map,
			icon: 'T_logo.png'
		});

		shawmut 		= new google.maps.LatLng(42.29312583, -71.06573796000001);
		markerShawmut = new google.maps.Marker({
			position: shawmut,
			map: map,
			icon: 'T_logo.png'
		});

		davis 			= new google.maps.LatLng(42.39674, -71.121815);
		markerDavis = new google.maps.Marker({
			position: davis,
			map: map,
			icon: 'T_logo.png'
		});

		alewife 		= new google.maps.LatLng(42.395428, -71.142483);
		markerAlewife = new google.maps.Marker({
			position: alewife,
			map: map,
			icon: 'T_logo.png'
		});

		kendallMIT 		= new google.maps.LatLng(42.36249079, -71.08617653);
		markerKendalLMIT = new google.maps.Marker({
			position: kendallMIT,
			map: map,
			icon: 'T_logo.png'
		});

		charlesMGH 		= new google.maps.LatLng(42.361166, -71.070628);
		markerCharlesMGH= new google.maps.Marker({
			position: charlesMGH,
			map: map,
			icon: 'T_logo.png'
		});

		downtownCrossing= new google.maps.LatLng(42.355518, -71.060225);
		markerDowntownCrossing = new google.maps.Marker({
			position: downtownCrossing,
			map: map,
			icon: 'T_logo.png'
		});

		quincyCenter 	= new google.maps.LatLng(42.251809, -71.005409);
		markerQuincyCenter = new google.maps.Marker({
			position: quincyCenter,
			map: map,
			icon: 'T_logo.png'
		});

		quincyAdams 	= new google.maps.LatLng(42.233391, -71.007153);
		markerQuincyAdams = new google.maps.Marker({
			position: quincyAdams,
			map: map,
			icon: 'T_logo.png'
		});

		ashmont 		= new google.maps.LatLng(42.284652, -71.06448899999999);
		markerAshmont = new google.maps.Marker({
			position: ashmont,
			map: map,
			icon: 'T_logo.png'
		});

		wollaston 		= new google.maps.LatLng(42.2665139, -71.0203369);
		markerWollaston = new google.maps.Marker({
			position: wollaston,
			map: map,
			icon: 'T_logo.png'
		});

		fieldsCorner 	= new google.maps.LatLng(42.300093, -71.061667);
		markerFieldsCorner = new google.maps.Marker({
			position: fieldsCorner,
			map: map,
			icon: 'T_logo.png'
		});

		centralSquare 	= new google.maps.LatLng(42.365486, -71.103802);
		markerCentralSquare = new google.maps.Marker({
			position: centralSquare,
			map: map,
			icon: 'T_logo.png'
		});

		braintree 		= new google.maps.LatLng(42.2078543, -71.0011385);
		markerBraintree = new google.maps.Marker({
			position: braintree,
			map: map,
			icon: 'T_logo.png'
		});

				
		map.panTo(southStation);
		
		markerSouthStation.setMap(map);
					
		// Open info window on click of marker
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(marker.title);
			infowindow.open(map, marker);
		});
	}



