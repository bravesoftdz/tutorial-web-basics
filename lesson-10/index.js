var HSocialItems = [
    new SocialItem( "Twitch" , "#6441a5", "ion-social-twitch-outline" ),
    new SocialItem( "Twitter" , "#1da1f2" , "ion-social-twitter-outline" ),
    new SocialItem( "SnapChat" , "#fffc00" , "ion-social-snapchat-outline" ),
    new SocialItem( "Facebook" , "#3b5998" , "ion-social-facebook-outline" )
]

class SocialItem{
    constructor( _Name , _Color ){
        this.color = _Color ;
        this.name = _Name ;
        this.icon = _Icon ;
    }
}

class Slider{
    constructor( _Items , _Selected = 0 ){
        this.items = _Items;
        this.selected = _Selected ;
    }

    FillHeader( _HeaderListId ){

    }
}

$(function(){
    var HSlider = new Slider( HSocialItems );
    HSlider.FillHeader( "#id-header-list" );
    HSlider.Slide();
});