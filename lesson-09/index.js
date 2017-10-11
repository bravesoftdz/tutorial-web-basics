function Person( _ForeName , _SureName ){
    this.foreName = _ForeName;
    this.sureName = _SureName ;

    function sayHello(){
        return "Halo i bims 1 " + this.name ;
    }
    function hasSpecialSkills(){
        return false;
    }
}

var Entwickler = Person("Finn","Zentgraf");
Entwickler.hasSpecialSkills = function(){return true;}

console.log();