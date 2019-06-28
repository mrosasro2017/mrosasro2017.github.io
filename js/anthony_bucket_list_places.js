require([
    "esri/Map",
    "esri/views/MapView"
], function (
    Map,
    MapView
) {
        const map = new Map({
            basemap: "streets-navigation-vector"
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 1,
            center: {
                latitude: 0,
                longitude: 0
            }
        });

        let latitudesList = [
            -17.961544,
            29.978981,
            - 2.33269,
            30.052922,
            - 33.954654,
            51.505336,
            41.391044,
            46.560109,
            37.973824,
            52.971843,
            22.265203,
            35.714695,
            13.750021,
            27.174881,
            40.43185,
            36.093518,
            37.827199,
            - 0.444628,
            10.394735

        ];

        let longitudesList = [
            25.842267,
            31.133789,
            34.834095,
            31.241637,
            18.499601,
            - 0.075421,
            2.180538,
            8.560977,
            23.723104,
            - 9.426651,
            113.943516,
            139.796634,
            100.491325,
            78.042166,
            116.570343,
            - 112.108111,
            - 122.423203,
            - 90.269986,
            - 75.509215

        ];

        let bucketListPlacesNames = [
            "Victoria Falls, Zimbabwe",
            "Pyramids of Giza, Egypt",
            "Serengeti National Park, Tanzania",
            "Cairo, Egypt",
            "Cape Town, South Africa",
            "London Tower Bridge, England",
            "Arco de Triunfo de Barcelona, Spain",
            "Swiss Alps, Switzerland",
            "Athens, Greece",
            "Cliffs of Moher, Ireland",
            "Lantau Island, Hong Kong, China",
            "The Sensō - ji Temple in Tokyo, Japan",
            "Grand Palace in Bangkok, Thailand",
            "Taj Mahal, India",
            "The Great Wall of China, Beijing, China",
            "Grand Canyon National Park, Arizona, United States",
            "San Francisco, California, United States",
            "Galapagos Islands, Ecuador",
            "Cartagena de Indias, Colombia"

        ];

        let placesDescriptionList = [
            "My mission was Argentina Posadas which had the Iguazu Falls inside its territory, So I would like to go here to have a similar esxperience." +
            "<img alt='Victoria img' width=100% src='https://www.airpano.com/files/victoria2015_03_video_big.jpg'>",
            "I would love to visit the Pyramids of Giza in Egypt. Personally I love the Egyptian History and being able to go there would be a dream come true." +
            "<img alt='Pyramids img' width=100% src='https://cdn.britannica.com/s:300x300/42/94542-120-5736FDEF.jpg'>",
            "Being on an actual Safari is something I want to do for sure in my life. Visiting Serengeti National Park would be the perfect way to accomplish that dream." +
            "<img alt='Serengeti NP img' width=100% src='https://www.ketsafaris.com/images/serengeti-np.jp' >",
            "Visiting Egypt would be a dream come true. Walking through those ancient streets and visiting the temples and monuments in El Cairo would be such a good vacation." +
            "<img alt='Cairo img' width=100% src='https://www.egypttoursportal.com/wp-content/uploads/2017/11/Cairo-City-Egypt-Tours-Portal-1-e1511901150793.jpg' >",
            "Cape Town in South Africa is such a marvel. Being able to go to Table Mountain, which is such a romantic spot, with my future wife would be amazing. " +
            "<img alt='Cape Town img' width=100% src='https://d1ljaggyrdca1l.cloudfront.net/wp-content/uploads/sites/5/2018/07/cape-town-aerial-view-greenpoint-stadium-1600x900.jpg' >",
            "The Swiss Alps would be cool to see, especially this peak." +
            "<img alt='Matterhorn img' width=100% src='https://www.outdooractive.com/img//800/24516005/.jpg' >",
            "My wife's family comes from Norway, and I think the fjords are beautiful." +
            "<img alt='Nærøyfjord img' width=100% src='https://static1.squarespace.com/static/5549f941e4b0be890383c7c4/t/56b4a9994d088e723de53365/1454680475379/naeroyfjorden.jpg' >",
            "I would love to backpack up in the cascades. The mountains are breathtaking." +
            "<img alt='N Cascades NP img' width=100% src='https://www.gannett-cdn.com/-mm-/e6c17e797b5584fba45ce76a17ac39049b00308b/c=0-0-1498-846/local/-/media/2018/10/09/USATODAY/USATODAY/636746887858298738-NorthCascadesNPMichaelRickardSTESmall.jpg?width=3200&height=1680&fit=crop' >",
            "This is another cool waterfall. It is amazing how big it is." +
            "<img alt='Victoria Falls img' width=100% src='https://victoriafallstourism.org/wp-content/uploads/2018/01/victoria_falls.jpg'>",
            "I would really enjoy seeing the history in DC. I could spend a lot of time at the Smithsonian alone." +
            "<img alt='DC img' width=100% src='https://assets0.roadtrippers.com/uploads/poi_gallery_image/image/322393368/-quality_60_-interlace_Plane_-resize_1024x480_U__-gravity_center_-extent_1024x480/poi_gallery_image-image-91820fde-ce83-4f10-9055-4d64ab9d4c00.jpg'>"
        ]

        for (let i = 0; i < longitudesList.length; i++) {

            view.graphics.add({
                symbol: {
                    type: "text",
                    color: "#c13d11",
                    text: "\ue632",
                    font: {
                        size: 20,
                        family: "CalciteWebCoreIcons"
                    }
                },
                geometry: {
                    type: "point",
                    longitude: longitudesList[i],
                    latitude: latitudesList[i]
                },
                popupTemplate: {
                    title: bucketListPlacesNames[i],
                    content: placesDescriptionList[i]
                }
            });
        };
    });