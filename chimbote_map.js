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
        '<img src = "bellamar_house.jpg">';
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
        '<img src = "bellamar_church.JPG">';
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
        '<img src = "nachos_restaurant.JPG">';
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
        '<img src = "chimbote_plaza.jpg">';
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
        '<img src = "rosas_family_house.JPG">';
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
        '<img src = "arequipa_childhood_house.JPG">';
    var arequipaChildhoodHouseInfo = new google.maps.InfoWindow({
        content: arequipaChildhoodHouseString
    });
    arequipaChildhoodHouse.addListener('click', function () {
        arequipaChildhoodHouseInfo.open(map, arequipaChildhoodHouse);
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
        '<img src = "arequipa_childhood_house.JPG">';
    var arequipaChildhoodHouseInfo = new google.maps.InfoWindow({
        content: arequipaChildhoodHouseString
    });
    arequipaChildhoodHouse.addListener('click', function () {
        arequipaChildhoodHouseInfo.open(map, arequipaChildhoodHouse);
    });

    // Arequipa Temple
    var arequipaTempleLatLng = { lat: -16.374935, lng: -71.538171 }
    var arequipaTempleMarker = new google.maps.Marker({
        position: arequipaTempleLatLng,
        map: map,
        title: 'Arequipa LDS temple'
    });
    var arequipaTempleString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeadin" class="firstHeading">Arequipa LDS Temple</h1>' +
        '<p>This is the Arequipa Peru Temple. It is still under construction. It will be dedicated on November 2019. Anthony will try to visit this tempe on Christmas 2019</p>' +
        '<img src = "arequipa_temple.JPG">';
    var arequipaTempleInfo = new google.maps.InfoWindow({
        content: arequipaTempleString
    });
    arequipaTempleMarker.addListener('click', function () {
        arequipaTempleInfo.open(map, arequipaTempleMarker);
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
    