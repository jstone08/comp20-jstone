/*
 * Name: 	mbta_stations.js
 *
 * Author:  Jordan Stone 
 * Date: 	6/13/17
 *
 */
var southLat = 42.352271;
var southLng = -71.05524200000001;
var southStation = new google.maps.LatLng(southLat, southLng);
var myOptions = {zoom: 12, center: southStation, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
			
function init() {
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	renderMap();
}

function renderMap() {

	//station generation and marker formation
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

	//polyline paths
    line1 = [
        {lat:   42.395428,  lng:   -71.142483},
        {lat:   42.39674,  	lng:   -71.121815},
        {lat:   42.3884,  	lng:   -71.11914899999999},
        {lat:   42.373362,  lng:   -71.118956},
        {lat:   42.365486,  lng:   -71.103802},
        {lat: 	42.36249079,lng:   -71.08617653},
        {lat:   42.361166,  lng:   -71.070628},
        {lat: 	42.35639457,lng:   -71.0624242},
        {lat:  	42.355518,  lng:   -71.060225},
        {lat:   42.352271,  lng:   -71.05524200000001},
        {lat:   42.342622,  lng:   -71.056967},
        {lat:   42.330154,  lng:   -71.057655},
        {lat:   42.330154,  lng:   -71.057655},
        {lat:   42.320685,  lng:   -71.052391}
    ];

    line2 = [
        {lat:   42.320685,  lng:   -71.052391},
        {lat:   42.31129,  	lng:   -71.053331},
        {lat:   42.300093,  lng:   -71.061667},
        {lat: 	42.29312583,lng:   -71.06573796000001},
        {lat:   42.284652,  lng:   -71.06448899999999}
    ];

    line3 = [
        {lat:   42.320685,  lng:   -71.052391},
        {lat:   42.275275,  lng:   -71.029583},
        {lat:  	42.2665139, lng:   -71.0203369},
        {lat:   42.251809,  lng:   -71.005409},
        {lat:   42.233391,  lng:   -71.007153},
        {lat:  	42.2078543, lng:   -71.0011385},
    ];
        

    //printing polylines
    path1 	= new google.maps.Polyline({
        path: 			line1, 
        geodesic: 		true,
        strokeColor: 	'#FF0000',
        strokeOpacity: 	.50,
        strokeWeight: 	10
        });

    path2 	= new google.maps.Polyline({
        path: 			line2, 
        geodesic: 		true,
        strokeColor: 	'#FF0000',
        strokeOpacity: 	.50,
        strokeWeight: 	10
    });

    path3 	= new google.maps.Polyline({
      	path: 			line3, 
      	geodesic: 		true,
      	strokeColor: 	'#FF0000',
       	strokeOpacity: 	.50,
       	strokeWeight: 	10 
    });

    //setting lines
    path1.setMap(map);
    path2.setMap(map);
    path3.setMap(map);

	markerSouthStation.setMap(map);
	map.panTo(southStation);
}



