code = function () {

    var myParticle = {
        x: 400,
        y: 300,
        r: 3,
        color: 'black',
        age: 0,
        speed: 3
    };

    page.animator = function(delta) {
        page.display.clear();

        (myParticle.y < 0 || myParticle.y > 600) ? myParticle.y = 600 : myParticle.y -= myParticle.speed * delta;

        page.display.add(myParticle);
    };

    page.clicker = function(mouse) {
        myParticle.x = mouse.x;
        myParticle.y = mouse.y;
    };
    
};