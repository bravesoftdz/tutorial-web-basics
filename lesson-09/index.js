function Person( _ForeName , _SureName ){
    this.foreName = _ForeName;
    this.sureName = _SureName ;

    this.name = function(){
        return this.foreName + " " + this.sureName;
    }
    this.sayHello = function(){
        return "Halo i bims 1 " + this.name() ;
    }
}

// Testen
var HMe = new Person("Finn","Zentgraf");
console.log(HMe.sayHello());

// Person.hasSpecialSkills wäre Objektbezogen
Person.prototype.hasSpecialSkills = function(){
    return false;
}
alert(HMe.hasSpecialSkills());

// Ableiten
function Entwickler( _ForeName , _SureName ){
    Person.call(this, _ForeName , _SureName);
}

// Eigenschaften verfügbar machen
Entwickler.prototype = Object.create(Person.prototype);
// Stay safe
Entwickler.prototype.constructor = Entwickler;

// Ableiten
Entwickler.prototype.hasSpecialSkills = function(){
    return true;
};

// Test
HMe = new Entwickler("Finn","Zentgraf");

// Achtung: ohne klammern kommt immer true zurück, da property gesetzt
if(HMe.hasSpecialSkills()){
    console.log(HMe.sayHello());
}
