//Google maps funktionen
function initMap() {
      
//Detta är min valt position på mappen för min dans studio
    var positionOfAcademy =  { lat:59.340631, lng:18.048399 };
     
      //Här nämnar jag bara variabel namn till min div
    var mapContainer = document.getElementById("mapDivId");
    
      //Nu skapar jag faktiskt min karta
    var myAcademyMap = new google.maps.Map(mapContainer, {
          center: positionOfAcademy,
          zoom: 15,
        });
     
      //Här skapar jag en marker på kartan
        var marker = new google.maps.Marker ({
        position: positionOfAcademy,
        map:myAcademyMap
    });
  };
