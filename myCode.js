// http://bit.ly/XCNBkR <-- download me!

code = function () {
    
    var mrParticle = {
        x: 100,
        y: 100,
        radius: 25,
        color: 'red'
    };
    
    page.draw(mrParticle);
    
    var widthOfScreen = 800;
    var heightOfScreen = 600;
    
    page.perFrame = function() {
        page.clear();
        
        page.draw(mrParticle);
        
        mrParticle.y = mrParticle.y + 1;
        mrParticle.x = mrParticle.x + 1;
        
        if (mrParticle.y > heightOfScreen) {
            mrParticle.y = 0;
        }
        
        if (mrParticle.x > widthOfScreen) {
            mrParticle.x = 0;
        }
    };
    
};