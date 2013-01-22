var page = {};
var code = function() {
        return code;
    };

var system = function() {
        var globalVarCount = 0;
        var addClassToBody = function(className) {
                document.getElementsByTagName('body')[0].className = className;
            },
            addTextToError = function(text) {
                document.getElementById('error-description').innerHTML = text;
            };


        page.perFrame = function() {
            var now = 0,
                then = 0,
                interval = 16,
                delta = 1,
                onTick = function() {
                    return onTick;
                };

            var main = function() {
                    now = Date.now();
                    delta = (now - then) / interval;
                    try {
                        page.perFrame((then === 0) ? 1 : delta);
                    } catch (error) {
                        addClassToBody("error");
                        addTextToError(error.message);
                        animator = onTick;
                        throw error;
                    }
                    then = now;
                };

            setInterval(main, interval);

            return onTick;
        }();

        page.perClick = function() {
            var click = function() {
                    return click;
                },
                canvas = document.getElementById('display');

            canvas.onclick = function(event) {
                var mouse = {
                    x: event.pageX - canvas.offsetLeft,
                    y: event.pageY - canvas.offsetTop
                };
                page.perClick(mouse);
            };

            return click;
        }();

        display = function() {
            var context = document.getElementById('display').getContext('2d'),
                width = document.getElementById('display').width,
                height = document.getElementById('display').height;

            var clear = function() {
                    context.clearRect(0, 0, width, height);
                };

            var particleIsInvalid = function(p) {
                    return (p.x === undefined || p.y === undefined || p.r === undefined || p.color === undefined);
                };

            var draw = function(p) {
                    if (particleIsInvalid(p)) {
                        throw new Error("page.draw was expecting an object with x, y, r and color");
                    }
                    context.fillStyle = p.color;
                    context.strokeStyle = p.color;
                    context.beginPath();
                    context.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                    context.fill();
                    context.stroke();
                };

            return {
                clear: clear,
                draw: draw
            };
        }();

        page.draw = display.draw;
        page.clear = display.clear;

        window.onload = function() {
            globalVarCount = Object.keys(window).length;

            try {
                code();
            } catch (error) {
                addTextToError(error.message);
                addClassToBody("error");
                throw error;
            }

            if (Object.keys(window).length !== globalVarCount) {
                addClassToBody("warn");
            }
        };
    }();
