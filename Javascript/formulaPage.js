//getParameterByName funktionen har jag tagit från nätet- För att kunna Hämta värde från Query Sträng som ska innehålla min danskurs man har valt

function getParameterByName( name, url ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
};

//Här laddas body i html funktionen när jag först öppnar sidan

function start() {
    
//getParameterByName funktionen har jag tagit från nätet- Hämta värde från Query Sträng
    var selectedId = getParameterByName("lessonId");

    
//Min activities är redan sparad och darför hämtar jag den från localStorage
     var danceLessons = JSON.parse(localStorage.getItem("activities"));
    
    
    //För varje danceLessons längd: 3 styckna aktiviteter från början
for(var i = 0; i < danceLessons.length; i++) {
        
    //Om min selectedId från första startPage är likadant med danceLessons id, då skapas det en header med specifik header och också checkbox har jag som är annorlunda till varje aktivitet
    
if(danceLessons[i].id == selectedId) {
               
        
        var headerBig = document.createElement("H3");
        headerBig.innerHTML= "Anmäl dig till " + danceLessons[i].name + " kursen idag!";
        document.getElementById("headerList").appendChild(headerBig);
        headerBig.setAttribute=("id", "headerId");
        headerBig.setAttribute= ("class", "headerBig");  
    
        var headerSmall = document.createElement("H4");
        headerSmall.innerHTML= "Fyll in i formulären så återkommer vi inom 24 timmar";
        headerSmall.setAttribute= ("class", "headerSmall");
        headerSmall.setAttribute=("id", "headerId");
        document.getElementById("headerList").appendChild(headerSmall);
      

//Här skapar jag min checkbox och sedan hämtar aktivitets teacher egenskap
    
        var checkboxTeacherName = document.createElement("input");
        checkboxTeacherName.type = "checkbox";
        checkboxTeacherName.id = "teacherId";
    
//För varje aktivitet vill jag skapa olika checkbox med olika lärare namn som är en egenskap till mina elementer
        checkboxTeacherName.value= danceLessons[i].teacher1;
        checkboxTeacherName.class= "teacherSelection";

//Jag skapar en label så att man förstår vad kunden ska skriva om och sedan skriver ut nuvarande aktivitetens teacher egenskap i textrutan
        var label1 = document.createElement("label");
   
   
//Append Child används för att lägga i elementet till en 
        label1.appendChild(document.createTextNode(danceLessons[i].teacher1));

//Här placerar jag min checkbox och label i min teacher container
        document.getElementById("teacherContainer").appendChild(checkboxTeacherName);
        document.getElementById("teacherContainer").appendChild(label1);
    
    
    
        var checkboxTeacherName2 = document.createElement("input");
        checkboxTeacherName2.type = "checkbox";
        checkboxTeacherName2.id = "teacherId";
        checkboxTeacherName2.value= danceLessons[i].teacher2;
        checkboxTeacherName2.class= "teacherSelection";

        var label2 = document.createElement('label');
   
//Här är det exakt likadant steg som teacher 1, bara att jag har skapat och nämnt ett variabel "intextForCheckBox2" så att det är mycket lättare att förstå
    
        var intextForCheckBox2= document.createTextNode(danceLessons[i].teacher2); 

        label2.appendChild(intextForCheckBox2);

        document.getElementById("teacherContainer").appendChild(checkboxTeacherName2);
        document.getElementById("teacherContainer").appendChild(label2);
     
}
}
}

//När man trycker på button, så körs min funktion

function SubmitFunction() {
    
        var selectedId = getParameterByName("lessonId");
    
//Här sparar jag vad kunden har skrivin in till mina textrutor till en variabel
    
        var firstName5 = document.getElementById("resultOfFirstName").value;
    
        var lastName5 = document.getElementById("resultOfLastName").value;
        
        var phoneNumber5 = document.getElementById("resultOfPhoneNumber").value;
    
        var email5 = document.getElementById("resultOfEmailAddress").value;
    
        var danceLevel5 = document.getElementById("resultOfDanceLevelSelected").value;
    
        var teacher5 = teacherCheckBoxValue();
    
        var comment5 = document.getElementById("commentSectionId").value;
    
        var activityName5= selectedId;
    
    
//Här skapar jag en tom array och sedan ska jag pusha olika kundens information så att alla var och en sparas och lägges till array istället att skriva på varann
    
        var resultOfFormula = [];
    
//Om min kundens val av balett, jazz, och lindy hop kurs existerar då ska man hämta den från local storage och nämnar den till resultOfFormula
    
if(localStorage.getItem(selectedId) != null) {
        resultOfFormula = JSON.parse(localStorage.getItem(selectedId));
    }
    
    
        var newUser = {selectedDanceCourse:activityName5, firstName: firstName5, lastName: lastName5, phone: phoneNumber5, email: email5, danceLevel: danceLevel5, teacher: teacher5, comment: comment5 };
    
//Här lägger jag till new user till min tom array som jag skapade tidigare
    
        resultOfFormula.push(newUser);
    

for(var i = 0; i < resultOfFormula.length; i++) {
        console.log(i);
        console.log(resultOfFormula[i]);
    };
    
        var emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
if( firstName5 ==='' || lastName5 ==='' || phoneNumber5 ==='' || email5 ===''){
        alert("Fyll i alla obligatoriska fälte!");
        return false;
    }
    
else if(!(email5).match(emailReg)){
        alert("Ange rätt email!");
        return false;
    }
else if (!(phoneNumber5).match(phoneno))  
        {  
        alert("Ange rätt telefon nummer i rätt format!");
        return false;
        }  
else{
        
        //Om allting är fylld, och man har korrekt email format ska man köras till thankYou sidan!
        location.href = "thankYou.html";
}
    
     localStorage.setItem(selectedId, JSON.stringify(resultOfFormula));

};

//Här sparar jag min CheckBox value i en ny funktion
function teacherCheckBoxValue() {
        var checkBox = document.forms[0];
        var checkBoxList = "";
    
for (var i = 0; i < checkBox.length; i++) {
    
if (checkBox[i].checked) {
        checkBoxList += checkBox[i].value;
               };
           }
        console.log(checkBoxList);
        return checkBoxList;
   }
    
   






 


