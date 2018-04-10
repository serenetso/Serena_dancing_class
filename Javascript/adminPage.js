var resultsOfAllDance; 


function getAllUsers() {
    
//Här anropar jag min sparat info till Balettkursen från formulären
        var selectedIdLocalStorage1= localStorage.getItem("BalettKurs");
        var retrievedDataFromBalletUsers = JSON.parse(selectedIdLocalStorage1);

        console.log('retrievedDataFromBalletUsers: ', retrievedDataFromBalletUsers);
    
//Här anropar jag min sparat info till Jazzkursen från formulären
    
        var selectedIdLocalStorage2= localStorage.getItem("JazzKurs");
        var retrievedDataFromJazzUsers = JSON.parse(selectedIdLocalStorage2);
        console.log('retrievedDataFromJazzUsers: ', retrievedDataFromJazzUsers);
    
//Här anropar jag min sparat info till LindyHop kursen från formulären
        var selectedIdLocalStorage3= localStorage.getItem("LindyHopKurs");
        var retrievedDataFromLindyHopUsers = JSON.parse(selectedIdLocalStorage3);
        console.log('retrievedDataFromLindyHopUsers: ', retrievedDataFromLindyHopUsers);
    
//Jag sparar alla local storage retrieved data till en sträng
        resultsOfAllDance = [retrievedDataFromBalletUsers, retrievedDataFromJazzUsers, retrievedDataFromLindyHopUsers];
 };

//Den här funktionen är från body onload; visas direkt när man öppnar sidan

function generateAllUserInfo(){
    
    
//Här skapar jag en button och table som behöver vid senare tillfälle
        var button1 = document.createElement("button");
        button1.type = "button";
        button1.setAttribute("class", "buttonClass");
        button1.id="myCreationButtonId";
        button1.onclick = generateUserInfo;
        document.getElementById("buttonAndTableId").appendChild(button1);
        
    
//Här skapar jag en span
        var resultSpan = document.createElement("span");
        resultSpan.innerHTML= "Visa Anmälda kunder till Dans Kurserna!";
        button1.appendChild(resultSpan);
       
        var table1= document.createElement("table");
        table1.id= "tableId";
        table1.setAttribute("class","myTableClass");
        document.getElementById("buttonAndTableId").appendChild(table1);
    
};


//Om man klickar button på vänster sidan körs den här funktionen

function generateUserInfo() {
    
        getAllUsers();

        var myCreationButton = document.getElementById("myCreationButtonId");
    
        var table = document.getElementById("tableId");
        
 for (var i in resultsOfAllDance) {
    

if(resultsOfAllDance[i] != null) {
        console.log(resultsOfAllDance[i]);
            
for (var j = 0; j < resultsOfAllDance[i].length; j++) {
        var row = table.insertRow();
         
        var tableRow = document.createElement("tr");
        tableRow.innerHTML += i;
         
//Här sättar jag in cell till min row
        var firstNameCell9= row.insertCell(0);
        var lastNameCell9 = row.insertCell(1);
        var phoneNumberCell9= row.insertCell(2);
        var emailCell9 = row.insertCell(3);
        var danceLevelCell9 = row.insertCell(4);
        var commentCell9 = row.insertCell(5);
        var teacherCell9= row.insertCell(6);
        var selectedDanceLessonCell9= row.insertCell(7);
            
        firstNameCell9.innerHTML = "Förnamn: " + "<br>" + resultsOfAllDance[i][j].firstName;
        lastNameCell9.innerHTML= "Efternamn: " +  "<br>" + resultsOfAllDance[i][j].lastName;
        phoneNumberCell9.innerHTML= "Telefonnummer: " +  "<br>" + resultsOfAllDance[i][j].phone;
        emailCell9.innerHTML= "Mejl Adress: " +  "<br>" + resultsOfAllDance[i][j].email;
        danceLevelCell9.innerHTML= "Dans Nivå: " +  "<br>" + resultsOfAllDance[i][j].danceLevel;
        commentCell9.innerHTML= "Kommentarer: " +  "<br>" + resultsOfAllDance[i][j].comment;
        teacherCell9.innerHTML= "Lärare: " +  "<br>" + resultsOfAllDance[i][j].teacher;
        selectedDanceLessonCell9.innerHTML= "Kurs: " +  "<br>" + resultsOfAllDance[i][j].selectedDanceCourse;
            
        tableRow.appendChild(selectedDanceLessonCell9);
        tableRow.appendChild(firstNameCell9);
        tableRow.appendChild(lastNameCell9);
        tableRow.appendChild(phoneNumberCell9);
        tableRow.appendChild(emailCell9);
        tableRow.appendChild(danceLevelCell9);
        tableRow.appendChild(commentCell9);
        tableRow.appendChild(teacherCell9);
         
         
        table.appendChild(tableRow);
         };
        };
    };
    
        table.style.display = "block";
        myCreationButton.style.display = "none";

};


//Om man klickar button på höger sidan körs den här funktionen
function generateNewActivity() {
    
     location.href = "createNewActivity.html";

};

    
