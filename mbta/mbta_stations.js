/*
 * Name:    mbta_stations.js
 *
 * Author:  Jordan Stone 
 * Date:    6/13/17
 * Edited:  6/20/17
 *
 */
var southLat = 42.352271;
var southLng = -71.05524200000001;
var southStation = new google.maps.LatLng(southLat, southLng);
var myOptions = {zoom: 12, center: southStation, mapTypeId: google.maps.MapTypeId.ROADMAP};
var map;
var markerInfowindow = new google.maps.InfoWindow();
var request = new XMLHttpRequest();
var data;
            
function init() {
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    makeMapLocations();

    navigator.geolocation.getCurrentPosition(showMeMarker);

    renderMap();

    popup();
}



function popup() {
    
    request.onreadystatechange = function parse() {
        if (request.readyState == 4 && request.status == 200) {
            data = JSON.parse(request.responseText);
        }
    }
    
    request.open("GET", "https://sleepy-waters-78559.herokuapp.com/redline.json", true);
    request.send();
}



function makeMapLocations() {

    southStation    = new google.maps.LatLng(southLat, southLng);
    andrew          = new google.maps.LatLng(42.330154, -71.057655);
    porterSquare    = new google.maps.LatLng(42.3884, -71.11914899999999);
    harvardSquare   = new google.maps.LatLng(42.373362, -71.118956);
    JFK             = new google.maps.LatLng(42.320685, -71.052391);
    savinHill       = new google.maps.LatLng(42.31129, -71.053331);
    parkStreet      = new google.maps.LatLng(42.35639457, -71.0624242);
    broadway        = new google.maps.LatLng(42.342622, -71.056967);
    northQuincy     = new google.maps.LatLng(42.275275, -71.029583);
    shawmut         = new google.maps.LatLng(42.29312583, -71.06573796000001);
    davis           = new google.maps.LatLng(42.39674, -71.121815);
    alewife         = new google.maps.LatLng(42.395428, -71.142483);
    kendallMIT      = new google.maps.LatLng(42.36249079, -71.08617653);
    charlesMGH      = new google.maps.LatLng(42.361166, -71.070628);
    downtownCrossing= new google.maps.LatLng(42.355518, -71.060225);
    quincyCenter    = new google.maps.LatLng(42.251809, -71.005409);
    quincyAdams     = new google.maps.LatLng(42.233391, -71.007153);
    ashmont         = new google.maps.LatLng(42.284652, -71.06448899999999);
    wollaston       = new google.maps.LatLng(42.2665139, -71.0203369);
    fieldsCorner    = new google.maps.LatLng(42.300093, -71.061667);
    centralSquare   = new google.maps.LatLng(42.365486, -71.103802);
    braintree       = new google.maps.LatLng(42.2078543, -71.0011385);

    line1 = [alewife, davis, porterSquare, harvardSquare, centralSquare,
            kendallMIT, charlesMGH, parkStreet, downtownCrossing, southStation, 
            broadway, andrew, JFK];

    line2 = [JFK, savinHill, fieldsCorner, shawmut, ashmont];

    line3 = [JFK, northQuincy, wollaston, quincyCenter, quincyAdams, braintree,];


    stationListNums = [southStation, andrew, porterSquare, harvardSquare, JFK, savinHill, 
                            parkStreet, broadway, northQuincy, shawmut,  davis, alewife, kendallMIT,
                            charlesMGH, downtownCrossing, quincyCenter, quincyAdams, ashmont, wollaston, 
                            fieldsCorner, centralSquare, braintree];

    stationListStrings = ["South Station", "Andrew" , "Porter Square", "Harvard Square", 
                            "JFK/UMass", "Savin Hill", "Park Street", "Broadway", "North Quincy", "Shawmut", 
                            "Davis", "Alewife", "Kendall/MIT", "Charles/MGH", "Downtown Crossing", 
                            "Quincy Center", "Quincy Adams", "Ashmont", "Wollaston", "Fields Corner", 
                            "Central Square", "Braintree"];
}

function showMeMarker(position) {

    lat = position.coords.latitude;
    lng = position.coords.longitude;

    myLoc = new google.maps.LatLng(lat, lng);

    marker = new google.maps.Marker({
        position: myLoc,
        map: map,
        title: "You are here"
    });

    var content = closestStation();

    google.maps.event.addListener(marker, 'click', function() {
        markerInfowindow.setContent(content);
        markerInfowindow.open(map, marker);
    })

    marker.setMap(map);
}


function closestStation()
{
    var closestStationDistance = google.maps.geometry.spherical.computeDistanceBetween(myLoc, southStation);
    var stationDistance = 0;
    var stationIndex = 0;

    for (i = 0; i < 22; i++) {
        stationDistance = (google.maps.geometry.spherical.computeDistanceBetween(myLoc, stationListNums[i]));
        if (stationDistance < closestStationDistance){        
            closestStationDistance = stationDistance;
            stationIndex = i;
        }
    }

    var popupText = marker.title + "<br/>" +"Closest Redline Station: " + stationListStrings[stationIndex];

    var closestStationPath = [
        myLoc,
        stationListNums[stationIndex]];
    
    var line4 = new google.maps.Polyline({
        path: closestStationPath, 
        geodesic: true,
        strokeColor: '#ADD8E6',
        strokeOpacity: .50,
        strokeWeight: 20
    });

    line4.setMap(map);

    return popupText;
}


function getSchedule(name) {

    var schedule = "Schedule: <br/>";

    for (var i = 0; i < data.TripList.Trips.length; i++) {
        for (var j = 0; j < data.TripList.Trips[i].Predictions.length; j++) {
            if (name == data.TripList.Trips[i].Predictions[j].Stop) {
                schedule += data.TripList.Trips[i].Destination + " - " + 
                    ((data.TripList.Trips[i].Predictions[j].Seconds)/60).toFixed(2) + " mins" + "<br/>";
            }            
        }
    }
    return schedule;
}


function renderMap() {

    markerSouthStation = new google.maps.Marker({
        position: southStation,
        map: map,
        icon: 'T_logo.png'
    });
    var SSInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerSouthStation, 'click', function() {
        SSInfowindow.setContent(getSchedule("South Station"));
        SSInfowindow.open(map, markerSouthStation);
    })


    markerAndrew = new google.maps.Marker({
        position: andrew,
        map: map,
        icon: 'T_logo.png'
    });
    var andrewInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerAndrew, 'click', function() {
        andrewInfowindow.setContent(getSchedule("Andrew"));
        andrewInfowindow.open(map, markerAndrew);
    })

    markerPorterSquare = new google.maps.Marker({
        position: porterSquare,
        map: map,
        icon: 'T_logo.png'
    }); 
    var PSInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerPorterSquare, 'click', function() {
        PSInfowindow.setContent(getSchedule("Porter Square"));
        PSInfowindow.open(map, markerPorterSquare);
    })
    
    markerHarvardSquare = new google.maps.Marker({
        position: harvardSquare,
        map: map,
        icon: 'T_logo.png'
    });
    var HSInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerHarvardSquare, 'click', function() {
        HSInfowindow.setContent(getSchedule("Harvard Square"));
        HSInfowindow.open(map, markerHarvardSquare);
    })
    
    markerJFK = new google.maps.Marker({
        position: JFK,
        map: map,
        icon: 'T_logo.png'
    });
    var JFKInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerJFK, 'click', function() {
        JFKInfowindow.setContent(getSchedule("JFK/UMass"));
        JFKInfowindow.open(map, markerJFK);
    })

    markerSavinHill = new google.maps.Marker({
        position: savinHill,
        map: map,
        icon: 'T_logo.png'
    });
    var SHInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerSavinHill, 'click', function() {
        SHInfowindow.setContent(getSchedule("Savin Hill"));
        SHInfowindow.open(map, markerSavinHill);
    })

    markerParkStreet = new google.maps.Marker({
        position: parkStreet,
        map: map,
        icon: 'T_logo.png'
    });
    var ParkSInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerParkStreet, 'click', function() {
        ParkSInfowindow.setContent(getSchedule("Park Street"));
        ParkSInfowindow.open(map, markerParkStreet);
    })

    markerBroadway = new google.maps.Marker({
        position: broadway ,
        map: map,
        icon: 'T_logo.png'
    });
    var BInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerBroadway, 'click', function() {
        BInfowindow.setContent(getSchedule("Broadway"));
        BInfowindow.open(map, markerBroadway);
    })

    markerNorthQuincy = new google.maps.Marker({
        position: northQuincy,
        map: map,
        icon: 'T_logo.png'
    });
    var NQInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerNorthQuincy, 'click', function() {
        NQInfowindow.setContent(getSchedule("North Quincy"));
        NQInfowindow.open(map, markerNorthQuincy);
    })

    markerShawmut = new google.maps.Marker({
        position: shawmut,
        map: map,
        icon: 'T_logo.png'
    });
    var ShawmutInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerShawmut, 'click', function() {
        ShawmutInfowindow.setContent(getSchedule("Shawmut"));
        ShawmutInfowindow.open(map, markerShawmut);
    })

    markerDavis = new google.maps.Marker({
        position: davis,
        map: map,
        icon: 'T_logo.png'
    });
    var DavisInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerDavis, 'click', function() {
        DavisInfowindow.setContent(getSchedule("Davis"));
        DavisInfowindow.open(map, markerDavis);
    })

    
    markerAlewife = new google.maps.Marker({
        position: alewife,
        map: map,
        icon: 'T_logo.png'
    });
    var AlewifeInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerAlewife, 'click', function() {
        AlewifeInfowindow.setContent(getSchedule("Alewife"));
        AlewifeInfowindow.open(map, markerAlewife);
    })

    
    markerKendalLMIT = new google.maps.Marker({
        position: kendallMIT,
        map: map,
        icon: 'T_logo.png'
    });
    var KMInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerKendalLMIT, 'click', function() {
        KMInfowindow.setContent(getSchedule("Kendall/MIT"));
        KMInfowindow.open(map, markerKendalLMIT);
    })

    
    markerCharlesMGH= new google.maps.Marker({
        position: charlesMGH,
        map: map,
        icon: 'T_logo.png'
    });
    var CMGHInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerCharlesMGH, 'click', function() {
        CMGHInfowindow.setContent(getSchedule("Charles/MGH"));
        CMGHInfowindow.open(map, markerCharlesMGH);
    })

    markerDowntownCrossing = new google.maps.Marker({
        position: downtownCrossing,
        map: map,
        icon: 'T_logo.png'
    });
    var DCInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerDowntownCrossing, 'click', function() {
        DCInfowindow.setContent(getSchedule("Downtown Crossing"));
        DCInfowindow.open(map, markerDowntownCrossing);
    })

    markerQuincyCenter = new google.maps.Marker({
        position: quincyCenter,
        map: map,
        icon: 'T_logo.png'
    });
    var QCInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerQuincyCenter, 'click', function() {
        QCInfowindow.setContent(getSchedule("Quincy Center"));
        QCInfowindow.open(map, markerQuincyCenter);
    })

    markerQuincyAdams = new google.maps.Marker({
        position: quincyAdams,
        map: map,
        icon: 'T_logo.png'
    });
    var QAInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerQuincyAdams, 'click', function() {
        QAInfowindow.setContent(getSchedule("Quincy Adams"));
        QAInfowindow.open(map, markerQuincyAdams);
    })
    
    markerAshmont = new google.maps.Marker({
        position: ashmont,
        map: map,
        icon: 'T_logo.png'
    });
    var AshmontInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerAshmont, 'click', function() {
        AshmontInfowindow.setContent(getSchedule("Ashmont"));
        AshmontInfowindow.open(map, markerAshmont);
    })

    
    markerWollaston = new google.maps.Marker({
        position: wollaston,
        map: map,
        icon: 'T_logo.png'
    });
    var WolInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerWollaston, 'click', function() {
        WolInfowindow.setContent(getSchedule("Wollaston"));
        WolInfowindow.open(map, markerWollaston);
    })

    markerFieldsCorner = new google.maps.Marker({
        position: fieldsCorner,
        map: map,
        icon: 'T_logo.png'
    });
    var FCInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerFieldsCorner, 'click', function() {
        FCInfowindow.setContent(getSchedule("Fields Corner"));
        FCInfowindow.open(map, markerFieldsCorner);
    })

    markerCentralSquare = new google.maps.Marker({
        position: centralSquare,
        map: map,
        icon: 'T_logo.png'
    });
    var CSInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerCentralSquare, 'click', function() {
        CSInfowindow.setContent(getSchedule("Central Square"));
        CSInfowindow.open(map, markerCentralSquare);
    })

    markerBraintree = new google.maps.Marker({
        position: braintree,
        map: map,
        icon: 'T_logo.png'
    });
    var BrainInfowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(markerBraintree, 'click', function() {
        BrainInfowindow.setContent(getSchedule("Braintree"));
        BrainInfowindow.open(map, markerBraintree);
    })
    

    //printing polylines
    path1   = new google.maps.Polyline({
        path:           line1, 
        geodesic:       true,
        strokeColor:    '#FF0000',
        strokeOpacity:  .50,
        strokeWeight:   10
        });

    path2   = new google.maps.Polyline({
        path:           line2, 
        geodesic:       true,
        strokeColor:    '#FF0000',
        strokeOpacity:  .50,
        strokeWeight:   10
    });

    path3   = new google.maps.Polyline({
        path:           line3, 
        geodesic:       true,
        strokeColor:    '#FF0000',
        strokeOpacity:  .50,
        strokeWeight:   10 
    });

    //setting lines
    path1.setMap(map);
    path2.setMap(map);
    path3.setMap(map);

    markerSouthStation.setMap(map);
    map.panTo(southStation);
}





















