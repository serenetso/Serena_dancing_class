//Redan sparat i Local Storage, jag fortfarande har kvar den om något olycka händer och jag råker pressa på rensa knappen i local storage


var danceLessons= [
    
    //Här skapar jag en list av alla aktiviteter
    //Dance Lessons är en Array object is used to store multiple values in a single variable
    
    { id : "BalettKurs", name : "Balett", imageUrl : "https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/zinnia/shutterstock_281404052.jpg.644x760_q100.jpg", description: "I balett arbetar du med att hitta ett harmoniskt samspel i rörelserna, teknisk färdighet, konstnärligt uttryck och dansanthet. Vill du dansa någon av de stora klassiska baletterna på scen?", teacher1: "Sara Bergström", teacher2: "Simon Bergström"
    },
    
    //Jag har angett en egenskap till min strängar som heter teacher så att senare jag kan använda de till att ha olika namn till mina checkbox
    { id : "JazzKurs", name : "Jazz", imageUrl : "http://www.danceschoolacademy.com.my/images/user/content/114201333524AMJazz-Dance-Classes-Malaysia.jpg", description: "En form av jazz som kan beskrivas som flödande och emotionell med förlängda rörelser, ofta med starkt känslouttryck.I jazzen ingår allt från lyriska kombinationer med influenser av modernt till funk och olika streetstilar, och vi hämtar inspiration från pop-, r’n’b-, hiphop-, electro-, house-, funk-, latin- och scen-/filmmusik. Klassen börjar med en grundlig uppvärmning, sedan följer oftast diagonaler med stegkombinationer över golvet. Under terminens gång övar vi in olika koreografier. Du kommer att jobba rejält fysiskt i högt tempo med både explosivitet och förlängningar.", teacher1: "Maria Bergström", teacher2: "Margereta Bergström"
    },
    
    { id : "LindyHopKurs", name : "Lindy Hop", imageUrl : "http://www.goldenswingsociety.com/wp-content/uploads/2015/03/lindy-hop.jpg",  description: "De mest välmeriterade svenska streetlärarna kommer att köra stenhårt i varierade stilar. Utforskande och skapande och med den tyngd och attityd som stilen kräver. Stilarna du hittar här grundar sig på Old School (äldre street-stilar) och New School som är de stilar som skapas i takt med att hiphop hela tiden utvecklas. Inspiration hämtas även från legendariska dansare och stilar men även från film, TV, dansevent och musikvideos. Gillar du Michael Jackson? Se kursen Popping - det är den teknik som Michael Jacksons dansstil bygger på. Även i hiphop/streetkurserna ingår en hel del popping. Du får möjlighet att utvecklas som dansare och får massvis av ny inspiration.", teacher1: "Johan Bergström", teacher2: "Julia Bergström"
    }
    
    
];

//NOTA! KOMMENTERA BORT DET HÄR KOD EFTER MAN DANCELESSONS LISTAN HAR SPARATS I LOCAL STORAGE; ANNARS GÅR DET INTE ATT SKAPA NYA AKTIVITETER

localStorage.setItem('activities', JSON.stringify(danceLessons));
  
//Funktionen är från body-onload

function createSpan() {
    
    
     //För en header skapar jag direkt på toppen av body så att den har syfte att agera som en header
    
        var header = document.createElement('div');
        header.setAttribute("id", "headerId");
        header.innerHTML= "<h1> Serene's DansAkademin </h1>";
        document.body.appendChild(header);
    
    
     //Här skapar jag en länk till min adminsida där jag kommer att kunna se de registrerad kundens info

        var linkToAdminPage = document.createElement('a');
        linkToAdminPage.setAttribute('href', "adminPage.html");
        linkToAdminPage.innerHTML = "Admin";
        document.body.appendChild(linkToAdminPage);
  
   
    
    
    //Först och främst behöver jag en div i vår body
        var mainContainer = document.createElement('div');
        mainContainer.setAttribute("id", "mainContainerId");
        document.body.appendChild(mainContainer);
    

   
        var danceLessons = JSON.parse(localStorage.getItem("activities"));
  
    //Här skapar jag div för varje aktiviter jag har!
    for (var i = 0; i< danceLessons.length; i++) {
        
        //Här skapar jag div i html body
    
        var lessonDiv = document.createElement('div');
        
        lessonDiv.setAttribute("class", "lessonDivClass");
        document.getElementById("mainContainerId").appendChild(lessonDiv);
        
    //Jag ville ha en span som innehåller aktiviterers namn
        var lessonNameSpan=document.createElement('span');
        lessonNameSpan.innerHTML = "<br>" + danceLessons[i].name + "</br>";
        lessonDiv.appendChild(lessonNameSpan);
        lessonNameSpan.setAttribute("id", "lessonNameSpanId")
        
     //Här lägger jag bilder till min lesson div
        var lessonImage=document.createElement("IMG");
        lessonImage.setAttribute("id", "lessonImageId");
        lessonImage.setAttribute("src", danceLessons[i].imageUrl);
        lessonImage.setAttribute("alt", "danceImage");
        lessonImage.setAttribute("width", "304");
        lessonImage.setAttribute("height", "228");
        lessonDiv.appendChild(lessonImage);
        
    //Det skapar jag en till span till info för olika aktiviteter
        var lessonDescriptionSpan = document.createElement("span");
        lessonDescriptionSpan.innerHTML = "<br>" + danceLessons[i].description +"</br>"; 
       lessonDiv.appendChild(lessonDescriptionSpan);
        
    //Här vill jag skapa ett slags div för en button som ska leda till min formulär sida!
        var buttonForFormulaPage= document.createElement("div");
        var buttonForFormulaPageId= danceLessons[i].id;
        buttonForFormulaPage.setAttribute("id", buttonForFormulaPageId);
        buttonForFormulaPage.setAttribute("class", "buttonClass");
        buttonForFormulaPage.innerHTML="Klicka här för att anmäla dig!";
        
        
        lessonDiv.appendChild(buttonForFormulaPage);
        
    //Här vill jag att diven ska leda till formulärsidan
        buttonForFormulaPage.addEventListener("click", redirect);  
    };
    
    //Det här är funktionen som ska köras för att leda mig till formulärsidan 
    function redirect(e){

        location.href = "formulaPage.html?lessonId=" + e.srcElement.id; };
   
};

