/* 
* Name: Lots
*
* Replace the contents of myCode.js with this example to see it work in particle lab.
*/

code = function () {

    var particleGenerator = function() {
        return {
            x: Math.random()*800,
            y: Math.random()*600,
            radius: Math.random()*15,
            color: 'blue'
        };
    };
    
    var maxNumberOfParticles = 500;
    var particleArray = [];
    
    while (particleArray.length < maxNumberOfParticles) {
        var newParticle = particleGenerator();
        particleArray.push(newParticle);
    }
    
    page.perFrame = function (delta) {
        page.clear();

        particleArray.forEach(function (p) {
            if (p.y < 600) {
                p.y = p.y + (0.3 * p.radius * delta);
            }
            page.draw(p);
        });
    };
};