code = function () {

    var orangeParticle = {
        x: 425,
        y: 300,
        r: 25,
        color: 'orange',
    };
    
    var blackParticle = {
        x: 375,
        r: 25,
        y: 300,
        color: 'black',
        speed: 5
    };

    page.draw(orangeParticle);
    page.draw(blackParticle);
    
    page.perClick = function (mouse) {
        page.clear();
 
        orangeParticle.y = mouse.y;
        orangeParticle.x = mouse.x;
        
        page.draw(blackParticle);
        page.draw(orangeParticle);
    }
};