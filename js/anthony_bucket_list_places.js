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
            -22.951977,
            17.224700,
            - 18.287081,
            - 25.34454,
            - 45.606106,
            - 13.044373,
            - 14.043825
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
            -43.210643,
            - 89.610479,
            147.699194,
            131.037662,
            167.360766,
            132.529217,
            - 171.562258           
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
            "Christ the Redeemer, Rio de Janeiro, Brazil",
            "Tikal Ruins, Guatemala",
            "Great Barrier Reef, Australia",
            "Uluru, Australia",
            "Fiordland National Park, New Zealand",
            "Kakadu National Park, Australia",
            "To Sua Ocean Trench, Samoa"
        ];

        let placesDescriptionList = [
            "My mission was Argentina Posadas which had the Iguazu Falls inside its territory, So I would like to go here to have a similar esxperience." +
            "<img alt='Victoria img' width=100% src='https://www.airpano.com/files/victoria2015_03_video_big.jpg'>",
            "I would love to visit the Pyramids of Giza in Egypt. Personally I love the Egyptian History and being able to go there would be a dream come true." +
            "<img alt='Pyramids img' width=100% src='https://cdn.britannica.com/s:300x300/42/94542-120-5736FDEF.jpg'>",
            "Being on an actual Safari is something I want to do for sure in my life. Visiting Serengeti National Park would be the perfect way to accomplish that dream." +
            "<img alt='Serengeti NP img' width=100% src='https://www.ketsafaris.com/images/serengeti-np.jpg' >",
            "Visiting Egypt would be a dream come true. Walking through those ancient streets and visiting the temples and monuments in El Cairo would be such a good vacation." +
            "<img alt='Cairo img' width=100% src='https://www.egypttoursportal.com/wp-content/uploads/2017/11/Cairo-City-Egypt-Tours-Portal-1-e1511901150793.jpg' >",
            "Cape Town in South Africa is such a marvel. Being able to go to Table Mountain, which is such a romantic spot, with my future wife would be amazing. " +
            "<img alt='Cape Town img' width=100% src='https://d1ljaggyrdca1l.cloudfront.net/wp-content/uploads/sites/5/2018/07/cape-town-aerial-view-greenpoint-stadium-1600x900.jpg' >",
            "The London Tower Bridge is such an iconic monument that I need to see in person no matter what." +
            "<img alt='London Tower Bridge img' width=100% src='https://secretadventures.org/images/secretadventures_img_hero_sail_throught_tower_bridge.jpg' >",
            "Last summer I was able to visit the Arc de Triomf in France. I would love to visit its Spanish version in Barcelona." +
            "<img alt='Arco de Triunfo de Barcelona img' width=100% src='https://www.touropia.com/gfx/d/tourist-attractions-in-barcelona/arc_de_triomf.jpg?v=d312439a111096b638ac60b397ef1dff' >",
            "I would love to hike in the Swiss Alps. I may not get to the top but I bet wherever I get the view should be breathtaking." +
            "<img alt='Swiss Alps img' width=100% src='https://d3ertfc829vzop.cloudfront.net/-/media/Tauck/Products/Hero-Images/DA_18_banner.jpg?h=817&la=en&w=1400&rev=7dba0c99823c4beeb060e44039304220&hash=20CBCC14FF47D5C74E0FA9A47D174D4E8F54378D' >",
            "Athens Greece is such an ancient, beautiful and marvelous city. I remember reading a lot about Greece when I was a kid. It would be great to visit it in person." +
            "<img alt='Athens img' width=100% src='https://cdn.britannica.com/s:500x350/66/102266-004-65D274D5.jpg'>",
            "I bet that the Cliffs of Moher in sunset would be such a romantic destination. I would love to go there with my future wife." +
            "<img alt='Cliffs of Moher img' width=100% src='http://www.cliffs-moher.com/images/cliffs-of-moher.jpg'>",
            "I would love to visit the Buddha temple in Lantau Island. I dont know much about asian religions. As an LDS member I would love to visit this place and learn a lot about their culture." +
            "<img alt='Lantau Island img' width=100% src='https://i.redd.it/0mx6qa0xtbcy.jpg'>",
            "The Sensō - ji Temple in Tokyo looks amazing. I want to walk through its corridors and learn a lot from that visit." +
            "<img alt='Sensoji Temple img' width=100% src='https://www.planetware.com/photos-large/JPN/japan-tokyo-asakusa-senso-ji-temple.jpg'>",
            "The Grand Palace in Bangkok Thailand looks like such an amazing place. Sucj a unique design." +
            "<img alt='Grand Palace Thailand img' width=100% src='http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/homepage/attraction-palace/grand-palace/pagePropertiesImage/bangkok-grand-palace.jpg.jpg'>",
            "The Taj Mahal is soemthing I must see no matter what in my life, I am fascinated by Indian culture. I bet visiting this place is great." +
            "<img alt='Taj Mahal Temple img' width=100% src='https://www.nationalgeographic.com/content/dam/travel/photos/000/930/93080.ngsversion.1482510710570.adapt.1900.1.jpg'>",
            "The Great Wall of China is a non-negotiable destination in my bucket list. This is because I want to visit all the Marvels of the World." +
            "<img alt='Great Wall China img' width=100% src='https://www.planetware.com/wpimages/2018/09/china-beijing-attractions-great-wall-of-china.jpg'>",
            "Grand Canyon National Park is another breathtaking place to visit. I bet it is super hot weather, but it will be worth it in the end." +
            "<img alt='Grand Canyon NP img' width=100% src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1551194229%2Fgrand-canyon-south-rim-19-GRANDCANYON0219.jpg%3Fitok%3DpXzOkx5_&q=85'>",
            "San Francisco California is one of the places I would love to go. Specially because of the Golden Gate Bridge." +
            "<img alt='San Francisco img' width=100% src='https://pbs.twimg.com/media/D0Nh38DUYAEYnc7.jpg'>",
            "My father and brother went to the Galapagos Islands while I was in my mission. I also want to go there. Hopefully it is sooner than later." +
            "<img alt='Galapagos img' width=100% src='https://images.newscientist.com/wp-content/uploads/2019/03/27172602/newscientist.27.3.19.gettyimages-576829559-800x533.jpg'>",
            "Christ the Redeemer is a marvel of the world. Because of this I have always wanted to visit Rio de Janeiro. I bet it is beautiful. Also I heard that the Rio de Janeiro Carnival is amazing." +
            "<img alt='Rio de Janeiro img' width=100% src='https://cdn.peruforless.com/blog/wp-content/uploads/2013/02/Christ_on_Corcovado_mountain.jpg'>",
            "The Tikal ruins in Guatemala are so mysterious. These ruins have lots of secrets. I want to visit a Mayan temple in person." +
            "<img alt='Tikal Guatemala img' width=100% src='https://www.ancient.eu/img/r/p/500x600/3100.jpg?v=1539668741'>",
            "Being able to do scubadiving in the Great Barrier is one of my lifelong dreams. I would love to achieve it soon." +
            "<img alt='Great Barrier Reef img' width=100% src='https://auspost.com.au/content/dam/auspost_corp_microsites/collectables/articles-2018/explore-the-great-barrier-reef-during-stamp-collecting-month-2018/explore-the-great-barrier-reef-during-stamp-collecting-month-2018.png'>",
            "I want to take pictures to Kangaroos from the Uluru monument in Australia." +
            "<img alt='Uluru Australia img' width=100% src='https://www.anu.edu.au/files/styles/anu_full_920_518/public/story/Uluru%20by%20Andy%20Maguire%20on%20flickr%20920.jpg?itok=irMRZ_Sh'>",
            "The view in Fiordland National Park, New Zealand is breathtaking, I want to be able to hike there and marvel with the view." +
            "<img alt='Fiordland NP img' width=100% src='https://www.newzealand.com/assets/Tourism-NZ/Fiordland/56113b64e7/img-1536379062-737-23013-0C766224-0B3D-BC30-B430C77F83D04968__FocalPointCropWzQyNyw2NDAsNDcsNDAsODUsImpwZyIsNjUsMi41XQ.jpg'>",
            "The Kakadu National Park in Australia is something really good to see. I want to be able to be in Australia with my family and enjoy my time in this incredible National Park." +
            "<img alt='Kakadu NP img' width=100% src='https://media-cdn.tripadvisor.com/media/photo-s/0e/ba/cb/ef/twin-falls-kakadu-national.jpg'>",
            "The To Sua Ocean Trench in Samoa is a place where I want to swim for sure. I bet it is so difficult to get there, but so worth it in the end." +
            "<img alt='To Sua Ocean Trench img' width=100% src='https://www.telegraph.co.uk/content/dam/Travel/2018/August/To%20Sua%20ocean%20trench%20famous%20swimming%20hole%2C%20Upolu%2C%20Samoa%2C%20South%20Pacific.jpg?imwidth=450'>"
        ]

        for (let i = 0; i < longitudesList.length; i++) {

            view.graphics.add({
                symbol: {
                    type: "text",
                    color: "#c13d11",
                    text: "\ue61d",
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