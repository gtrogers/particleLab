code = function () {

    var orangeParticle = {
        x: 425,
        y: 300,
        r: 25,
        color: 'orange',
    };
    
    var blackParticle = {
        x: 375,
        y: 300,
        r: 25,
        color: 'black',
        speed: 5
    };

    page.draw(orangeParticle);
    page.draw(blackParticle);
    orangeParticle.y = orangeParticle.y + 50;
    page.draw(orangeParticle);
};