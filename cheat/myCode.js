code = function () {
    
    var randomColor = function() {
        var red = parseInt(Math.random()*255);
        var blue = parseInt(Math.random()*255);
        var green = parseInt(Math.random()*255);
        return "rgb(" + red + "," + blue + "," + green + ")";
    }
    
    
    var particleGenerator = function() {
        var particle = {
            x: Math.random()*800,
            radius: Math.random()*30 + 5,
            y: Math.random()*600,
            color: randomColor()
        };
        return particle;
    };
    
    
    var gravity = function(particle) {
        var maxDistanceFromTop = 600 - particle.radius;
        if (particle.y > maxDistanceFromTop) {
            return
        } else {
            particle.y = particle.y + 2;
        }
    };
    
    
    var myParticles = [];
    var numberOfParticles = 200;
    
    for (var i = 0; i < numberOfParticles; i++) {
        myParticles[i] = particleGenerator();
    }
    
    page.perFrame = function(delta) {
        page.clear();
        for (var i = 0; i < myParticles.length; i++) {
            page.draw(myParticles[i]);
            gravity(myParticles[i]);
        }
    };
    
};