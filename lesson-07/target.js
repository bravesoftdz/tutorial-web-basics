// Variablen
var HName = prompt('Wie heißt du?');
alert("Hallo " + HName + "!");

// if/else

if (HName === "Finn") {
    alert("Hallo Finn, schön dich zu sehen.");
} else if (HName === "Alex") {
    alert("Hi Alex, du bist also auch hier.");
} else {
    alert("Ich kenne dich nicht");
}

// Keine Typdefinition
HName = 42;
HName += 17 ; // ähnlich wie C#
alert(HName);

HName = (HName === "Finn");
alert(typeof(HName));

// Interessant ist:

HName = "Finn";

if (HName) {
    alert(HName + " ist true");
}


// Arrays
var HNames = [ "Finn" , "Alex" , "Karsten", "Sven" ] ;
alert(HNames[2]);

// Schleifen
for( var HIndex = 0; HIndex < HNames.length ; HIndex++ ){
    console.log(HNames[HIndex]);
}

// Objects
var HTeam = {
    name : "EvD" ,
    anzahl : 7
}

alert(HTeam.name + " sind " + HTeam.anzahl + " Personen");