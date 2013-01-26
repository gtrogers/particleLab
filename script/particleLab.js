var page = {};
var code = function() {
        return code;
    };

var system = function() {
        var globalVarCount = 0;

        var addErrorMessage = function(text) {
                var paragraph = document.createElement('p');
                paragraph.innerHTML = text;
                paragraph.className = "warning";
                document.getElementById("messages").appendChild(paragraph);
            };

        page.perFrame = function() {
            var now = 0,
                then = 0,
                interval = 16,
                delta = 1;

            var main = function() {
                now = Date.now();
                delta = (now - then) / interval;
                try {
                    page.perFrame((then === 0) ? 1 : delta);
                } catch (error) {
                    addClassToBody("error");
                    addTextToError(error.message);
                    throw error;
                }
                then = now;
            };

            setInterval(main, interval);

            return function () {};
        }();

        page.perClick = function() {
            var canvas = document.getElementById('display');

            canvas.onclick = function(event) {
                var mouse = {
                    x: event.pageX - canvas.offsetLeft,
                    y: event.pageY - canvas.offsetTop
                };
                page.perClick(mouse);
            };

            return function () {};
        }();

        display = function() {
            var context = document.getElementById('display').getContext('2d'),
                width = document.getElementById('display').width,
                height = document.getElementById('display').height;

            var clear = function() {
                context.clearRect(0, 0, width, height);
            };

            var particleIsInvalid = function(p) {
                return (p.x === undefined || p.y === undefined || p.radius === undefined || p.color === undefined);
            };
            
            var background = function(color) {
                document.getElementById('display').style['background-color'] = color;
            };

            var draw = function(p) {
                if (particleIsInvalid(p)) {
                    throw new Error("page.draw was expecting an object with x, y, radius and color");
                }
                context.fillStyle = p.color;
                context.strokeStyle = p.color;
                context.beginPath();
                context.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                context.fill();
                context.stroke();
            };

            return {
                clear: clear,
                draw: draw,
                background: background
            };
        }();

        page.draw = display.draw;
        page.clear = display.clear;
        page.background = display.background;

        window.onload = function() {
            globalVarCount = Object.keys(window).length;

            try {
                code();
            } catch (error) {
                addErrorMessage("Oops, it looks like your code threw an error. <strong>" + error + "</strong>");
                throw error;
            }

            if (Object.keys(window).length !== globalVarCount) {
                addErrorMessage("Oops, it looks like you created a global variable, you probably didn't want to do that.");
            }
        };
    }();
