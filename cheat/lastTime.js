code = function () {
    
    var mrParticle = {
        x: 100,
        y: 100,
        radius: 25,
        color: 'red'
    };
    
    page.draw(mrParticle);
    
    var count = 0;
    var maxCount = 200;
    var widthOfScreen = 800;
    var heightOfScreen = 600;
    
    while(count < maxCount) {
        mrParticle.y = Math.random() * heightOfScreen;
        mrParticle.x = Math.random() * widthOfScreen;
        
        page.draw(mrParticle);
        
        count = count + 1;
    }
    
};