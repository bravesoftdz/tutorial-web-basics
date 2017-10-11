class Person{
    foreName = "Vorname";
    sureName = "Nachname";

    constructor( _ForeName , _SureName ){
        this.foreName = _ForeName;
        this.sureName = _SureName;
    }

    sayHello(){
        return "Halo i bims 1 " + this.name ;
    }

    get name(){
        return this.foreName + " " + this.sureName;
    }

    static isHuman(){
        return true;
    }

    hasSpecialSkills(){
        return false;
    }
}

class Entwickler extends Person{
    hasSpecialSkills(){
        return true;
    }
}



// Runtime

var HMe = new Person("Finn","Zentgraf");
console.log(HMe.sayHello());
console.log(HMe.name);

HMe = new Entwickler(HMe.foreName,HMe.sureName);
if( HMe.hasSpecialSkills() ){
    console.log('Ich war auf der BASTA!');
}