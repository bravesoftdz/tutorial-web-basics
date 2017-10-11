function OnApplicationClick(){
    var HElementToColor = $('#id-application');
    console.log(HElementToColor.css('background-color'));
    HElementToColor.css('background-color','#263238');
    alert('color has been changed');
}