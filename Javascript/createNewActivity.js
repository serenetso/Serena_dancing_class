function createNewEvent() {
    //Vill gärna skriva koden här men mina sparade dance lessons array försvinner varje gång när jag stänger min fönster tyvärr
    
    //NOTA: FÖR ATT MIN NYA DANSKURS SKA SPARAS OCH LÄGGES TILL STARTSIDAN, MÅSTE DU NU RADERA BORT STARTSIDANS FÖRSTA KOMMENTAR OCH DESS VAR DANCELESSONS = JSON ACTIVITIES, Då funkar det ^_^
    
    var danceLessons = JSON.parse(localStorage.getItem("activities"));
    
    var newId= document.getElementById("danceCourseId").value;
    var newName= document.getElementById("danceCourseName").value;
    var newImage= document.getElementById("danceCourseImageUrl").value;
    var newDescription= document.getElementById("danceCourseDescription").value;
    var newTeacher1= document.getElementById("danceCourseTeacher1").value;
    var newTeacher2= document.getElementById("danceCourseTeacher2").value;
    
    var newEvent = {id: newId, name: newName,  imageUrl : newImage, description: newDescription, teacher1: newTeacher1, teacher2: newTeacher2
    };
    
    danceLessons.push(newEvent);
     
    for(var i = 0; i < danceLessons.length; i++) {
        console.log(i);
        console.log(danceLessons[i]);
    };
    
    
    var myNewJson = JSON.stringify(danceLessons);
    localStorage.setItem("activities", myNewJson);
    
    
    alert("Succé, Titta nu gärna i Consolen och Local storage för att dubbelkolla om det finns!");

};


