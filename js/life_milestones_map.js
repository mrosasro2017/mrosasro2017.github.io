// This example displays a marker at the center of Nuevo Chimbote, Peru
// When the user clicks the marker, an info window opens.

//var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -9.125085, lng: -78.554302 },
        zoom: 13,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    });

    //Bellamar House marker
    var parentsHouseLatLng = { lat: -9.114759, lng: -78.514857 };
    var parentsHouseMarker = new google.maps.Marker({
        position: parentsHouseLatLng,
        map: map,
        title: "Anthony's Chimbote House"
    });
    var parentsHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        "<h1 id='firstHeadin' class='firstHeading'>Anthony's Chimbote House</h1>" +
        '<p>Anthony lived in this house briefly for 6 months before and 6 months after his mission.</p>' +
        '<p> His family (mom, dad, and 2 siblings) are currently living there.</p>' +
        '<img src = "./images/interactiveGoogleMap/bellamar_house.jpg">';
    var parentsHouseInfo = new google.maps.InfoWindow({
        content: parentsHouseString
    });
    parentsHouseMarker.addListener('click', function () {
        parentsHouseInfo.open(map, parentsHouseMarker);
    });
    


    //Bellamar Church Marker
    var BellamarChurchMarker = new google.maps.Marker({
        position: { lat: -9.121449, lng: -78.516838 },
        map: map,
        title: "Las Gardenias Stake Center"
    });
    var BellamarChurchString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Las Gardenias Stake Center</h1>' +
        "<p>Anthony went to church here before and after his mission. Bellamar ward was amazing.</p>" +
        '<img src = "./images/interactiveGoogleMap/bellamar_church.JPG">';
    var BellamarChurchInfo = new google.maps.InfoWindow({
        content: BellamarChurchString
    });
    BellamarChurchMarker.addListener('click', function () {
        BellamarChurchInfo.open(map, BellamarChurchMarker);
    });



    //Nachos Restaurant
    var nachosRestaurant = new google.maps.Marker({
        position: { lat: -9.077844, lng: -78.578831 },
        map: map,
        title: "Los Nachos Restaurant"
    });
    var nachosString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        "<h1 id='firstHeadin' class='firstHeading'>Los Nachos Restaurant</h1>" +
        '<p>This is Los Nachos restaurant. You can get a really good ceviche and all kinds of seafood when you eat there.</p>' +
        '<img src = "./images/interactiveGoogleMap/nachos_restaurant.JPG">';
    var nachosInfo = new google.maps.InfoWindow({
        content: nachosString
    });
    nachosRestaurant.addListener('click', function () {
        nachosInfo.open(map, nachosRestaurant);
    });


    //Chimbote Plaza de Armas
    var chimbotePlazaArmas = new google.maps.Marker({
        position: { lat: -9.074684, lng: -78.593631 },
        map: map,
        title: "Chimbote Plaza de Armas"
    });
    var chimbotePLazaString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Chimbote Plaza de Armas</h1>' +
        "<p>This is the main square in Chimbote. Anthony used to go there to chill with his buddies and family.</p>" +
        '<img src = "./images/interactiveGoogleMap/chimbote_plaza.jpg">';
    var chimbotePlazaInfo = new google.maps.InfoWindow({
        content: chimbotePLazaString
    });
    chimbotePlazaArmas.addListener('click', function () {
        chimbotePlazaInfo.open(map, chimbotePlazaArmas);
    });


    // Arequipa House marker
    var arequipaRosasHouseLatLng = { lat: -16.416873, lng: -71.500785 }
    var arequipaRosasHouseMarker = new google.maps.Marker({
        position: arequipaRosasHouseLatLng,
        map: map,
        title: 'Arequipa Rosas House'
    });
    var arequipaHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Arequipa Rosas Family House</h1>' +
        '<p>This is the house where Anthony s father grew up. Most of Anthony s aunts, uncles and cousins live nearby.</p>' +
        '<img src = "./images/interactiveGoogleMap/rosas_family_house.JPG">';
    var arequipaHouseInfo = new google.maps.InfoWindow({
        content: arequipaHouseString
    });
    arequipaRosasHouseMarker.addListener('click', function () {
        arequipaHouseInfo.open(map, arequipaRosasHouseMarker);
    });


    // Arequipa Childhood House 
    var arequipaChildhoodHouse = { lat: -16.333128, lng: -71.551183 }
    var arequipaChildhoodHouse = new google.maps.Marker({
        position: arequipaChildhoodHouse,
        map: map,
        title: 'Arequipa Childhood House'
    });
    var arequipaChildhoodHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Arequipa Anthony s childhood house</h1>' +
        '<p> This is the house where Anthony grew up. He lived here until he was 8 years old with his mom, dad and little sister Marggie.</p>' +
        '<img src = "./images/interactiveGoogleMap/arequipa_childhood_house.JPG">';
    var arequipaChildhoodHouseInfo = new google.maps.InfoWindow({
        content: arequipaChildhoodHouseString
    });
    arequipaChildhoodHouse.addListener('click', function () {
        arequipaChildhoodHouseInfo.open(map, arequipaChildhoodHouse);
    });

    // Arequipa Restaurant
    var cieloArequipenoLatLng = { lat: -16.380715, lng: -71.552822 }
    var cieloArequipenoMarker = new google.maps.Marker({
        position: cieloArequipenoLatLng,
        map: map,
        title: 'Cielo Arequipeño Restaurant'
    });
    var cieloArequipenoString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Cielo Arequipeño Restaurant</h1>' +
        '<p>This restaurant has really good food. Anthony likes it because these dishes are traditional in Arequipa the place where he was born. In the picture we can see from left to right: Ocopa Arequipeña, Rocoto Relleno, Chupe de Camarones and finally Adobo Arequipeño</p>' +
        '<img src = "./images/interactiveGoogleMap/arequipa_restaurant.jpg">';
    var cieloArequipenoInfo = new google.maps.InfoWindow({
        content: cieloArequipenoString
    });
    cieloArequipenoMarker.addListener('click', function () {
        cieloArequipenoInfo.open(map, cieloArequipenoMarker);
    });


    // Arequipa Temple
    var arequipaTempleLatLng = { lat: -16.374935, lng: -71.538171 }
    var arequipaTempleMarker = new google.maps.Marker({
        position: arequipaTempleLatLng,
        map: map,
        title: 'Arequipa Peru LDS Temple'
    });
    var arequipaTempleString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Arequipa Peru LDS Temple</h1>' +
        '<p>This is the Arequipa Peru Temple. It is still under construction. It will be dedicated on November 2019. Anthony will try to visit this tempe on Christmas 2019</p>' +
        '<img src = "./images/interactiveGoogleMap/arequipa_temple.JPG">';
    var arequipaTempleInfo = new google.maps.InfoWindow({
        content: arequipaTempleString
    });
    arequipaTempleMarker.addListener('click', function () {
        arequipaTempleInfo.open(map, arequipaTempleMarker);
    });

    //Trujillo Childhood House 
    var trujilloHouseLatLng = { lat: -8.093861, lng: -79.038276 }
    var trujilloHouseMarker = new google.maps.Marker({
        position: trujilloHouseLatLng,
        map: map,
        title: 'Trujillo Childhood House'
    });
    var trujilloHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Trujillo Childhood House</h1>' +
        '<p>Anthony lived here with his family for 2 years (8-10 years old). It was such an adventure because it was the first place where his family moved since he was born.</p>' +
        '<img src = "./images/interactiveGoogleMap/trujillo_house.jpg">';
    var trujilloHouseInfo = new google.maps.InfoWindow({
        content: trujilloHouseString
    });
    trujilloHouseMarker.addListener('click', function () {
        trujilloHouseInfo.open(map, trujilloHouseMarker);
    });

    // Trujillo LDS Temple 
    var trujilloLDSTempleLatLng = { lat: -8.100264, lng: -79.058636 }
    var trujilloLDSTempleMarker = new google.maps.Marker({
        position: trujilloLDSTempleLatLng,
        map: map,
        title: 'Trujillo Peru LDS Temple'
    });
    var trujilloLDSTempleString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Trujillo Peru LDS Temple</h1>' +
        '<p>This is Anthony s favorite temple in Peru. It is just a 2 hour drive from his parents house.</p>' +
        '<img src = "./images/interactiveGoogleMap/trujillo_temple.jpg">';
    var trujilloLDSTempleInfo = new google.maps.InfoWindow({
        content: trujilloLDSTempleString
    });
    trujilloLDSTempleMarker.addListener('click', function () {
        trujilloLDSTempleInfo.open(map, trujilloLDSTempleMarker);
    });


    // Rosas Family Ica House 
    var rosasIcaHouseLatLng = { lat: -14.070348, lng: -75.730838 }
    var rosasIcaHouseMarker = new google.maps.Marker({
        position: rosasIcaHouseLatLng,
        map: map,
        title: 'Rosas Family Ica House'
    });
    var rosasIcaHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Ica Childhood House</h1>' +
        '<p>Anthony lived here with his family since he was 10 until he was 14 years old. On August 15, 2007 at 6:41 PM peruvian time an earthquake happened 50 kms away from this city. It was such an experience for Anthony and his family.</p>' +
        '<img src = "./images/interactiveGoogleMap/ica_house.jpg">';
    var rosasIcaHouseInfo = new google.maps.InfoWindow({
        content: rosasIcaHouseString
    });
    rosasIcaHouseMarker.addListener('click', function () {
        rosasIcaHouseInfo.open(map, rosasIcaHouseMarker);
    });


    // Lima Grandparents House 
    var limaGrandparentsHouseLatLng = { lat: -12.047173, lng: -77.036338 }
    var limaGrandparentsHouseMarker = new google.maps.Marker({
        position: limaGrandparentsHouseLatLng,
        map: map,
        title: 'Lima Grandparents House'
    });
    var limaGrandparentsHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Lima Grandparents House</h1>' +
        '<p>This is where Anthony s mom grew up. His grandparents still live here and it is usually the meeting point of all of this side of the family.</p>' +
        '<img src = "./images/interactiveGoogleMap/lima_grandparents_house.jpg">';
    var limaGrandparentsHouseInfo = new google.maps.InfoWindow({
        content: limaGrandparentsHouseString
    });
    limaGrandparentsHouseMarker.addListener('click', function () {
        limaGrandparentsHouseInfo.open(map, limaGrandparentsHouseMarker);
    });

    // Lima Rosas House 
    var limaHouseLatLng = { lat: -12.048482, lng: -77.034279 }
    var limaHouseMarker = new google.maps.Marker({
        position: limaHouseLatLng,
        map: map,
        title: 'Rosas Family Lima House'
    });
    var limaHouseString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Rosas Family Lima House</h1>' +
        '<p>Anthony lived here with his family since he was 14 until he was 16 years old.</p>' +
        '<img src = "./images/interactiveGoogleMap/lima_rosas_house.jpg">';
    var limaHouseInfo = new google.maps.InfoWindow({
        content: limaHouseString
    });
    limaHouseMarker.addListener('click', function () {
        limaHouseInfo.open(map, limaHouseMarker);
    });

    // Trilce High School 
    var trilceHighSchoolLatLng = { lat: -12.050858, lng: -77.043305 }
    var trilceHighSchoolMarker = new google.maps.Marker({
        position: trilceHighSchoolLatLng,
        map: map,
        title: 'Trilce High School'
    });
    var trilceHighSchoolString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Trilce High School</h1>' +
        '<p>Anthony finished High School here. Really good three years.</p>' +
        '<img src = "./images/interactiveGoogleMap/trilce_high_school.jpg">';
    var trilceHighSchoolInfo = new google.maps.InfoWindow({
        content: trilceHighSchoolString
    });
    trilceHighSchoolMarker.addListener('click', function () {
        trilceHighSchoolInfo.open(map, trilceHighSchoolMarker);
    });

    // Lima Anthony's Apartment 
    var anthonyApartmentLatLng = { lat: -12.061854, lng: -77.057611 }
    var anthonyApartmentMarker = new google.maps.Marker({
        position: anthonyApartmentLatLng,
        map: map,
        title: 'Anthony Apartment'
    });
    var anthonyApartmentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Anthony Apartment</h1>' +
        '<p>Anthony lived by himself here for like a year after his mission when attending to college.</p>' +
        '<img src = "./images/interactiveGoogleMap/anthony_apartment.jpg">';
    var anthonyApartmentInfo = new google.maps.InfoWindow({
        content: anthonyApartmentString
    });
    anthonyApartmentMarker.addListener('click', function () {
        anthonyApartmentInfo.open(map, anthonyApartmentMarker);
    });

    // Pontific Catholic University of Peru
    var pucpLatLng = { lat: -12.070864, lng: -77.079645 }
    var pucpMarker = new google.maps.Marker({
        position: pucpLatLng,
        map: map,
        title: 'PUCP'
    });
    var pucpString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">PUCP</h1>' +
        '<p>Anthony attended to college here for a year before transferring to BYU.</p>' +
        '<img src = "./images/interactiveGoogleMap/pucp.jpg">';
    var pucpInfo = new google.maps.InfoWindow({
        content: pucpString
    });
    pucpMarker.addListener('click', function () {
        pucpInfo.open(map, pucpMarker);
    });

    // Lima Peru Temple 
    var limaTempleLatLng = { lat: -12.069776, lng: -76.948975 }
    var limaTempleMarker = new google.maps.Marker({
        position: limaTempleLatLng,
        map: map,
        title: 'Lima Peru LDS Temple'
    });
    var limaTempleString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Lima Peru LDS Temple</h1>' +
        '<p>This is the oldest temple in Peru. such good memories made there.</p>' +
        '<img src = "./images/interactiveGoogleMap/lima_temple.jpg">';
    var limaTempleInfo = new google.maps.InfoWindow({
        content: limaTempleString
    });
    limaTempleMarker.addListener('click', function () {
        limaTempleInfo.open(map, limaTempleMarker);
    });


    var styledMapType = new google.maps.StyledMapType(
        [
            { elementType: 'geometry', stylers: [{ color: '#ebd9cd' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#9b6b68' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#aa9d79' }] },
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#d6652a' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#f2d59d' }]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#726151' }]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{ color: '#c9d177' }]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{ color: '#c9d177' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#7b8792' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#7c8c36' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#30756e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#f2dada' }]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{ color: '#c9e0dd' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#66a8f8' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#66a8f8' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{ color: '#3e48c1' }]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#3e48c1' }]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#443732' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{ color: '#aededf' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#78778f' }]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#b3e0e5' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{ color: '#aededf' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#2a39ba' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#3343d6' }]
            }
        ],
        { name: 'Styled Map' });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

}
    