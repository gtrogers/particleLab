code = function () {

    var myParticle = {
        x: 400,
        y: 300,
        r: 3,
        color: 'black',
        age: 0,
        speed: 3
    };
    
    var colorDecider = function () {
        var colors = ['red','green','blue','black','pink'];
        var index = parseInt(Math.random()*colors.length);
        
        return colors[index];
    }

    page.animator = function(delta) {
        page.display.clear();
        
        myParticle.y = myParticle.y - myParticle.speed;
        
        if (myParticle.y < 0) {
            myParticle.y = 600;
        }
        
        page.display.add(myParticle);
    };

    page.clicker = function(mouse) {
        myParticle.color = colorDecider();
        myParticle.x = mouse.x;
        myParticle.y = mouse.y;
    };
    
};