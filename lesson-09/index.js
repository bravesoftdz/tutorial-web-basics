function Person( _ForeName , _SureName ){
    this.foreName = _ForeName;
    this.sureName = _SureName ;

    this.name = function(){
        return this.foreName + " " + this.sureName;
    }
    this.sayHello = function(){
        return "Halo i bims 1 " + this.name() ;
    }
    this.hasSpecialSkills = function(){
        return false;
    }
}

Entwickler.prototype = Object.create(Person.prototype);

function Entwickler( _ForeName , _SureName ){
    Person.call(_ForeName , _SureName);
    this.hasSpecialSkills = function(){
        return true ;
    }
}
var HMe = new Entwickler("Finn","Zentgraf");

// Achtung: ohne klammern kommt immer true zurück, da property gesetzt
if(HMe.hasSpecialSkills()){
    console.log(HMe.sayHello);
}
