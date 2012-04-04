(function () {

    var game = new light8.Game(),
        scene = game.currentScene;

    var oImg;
    var gravity = 3;
    var numBunnies = 1000;
    var bunnies = [];
    var maxX = 640;
    var minX = 0;
    var maxY = 480;
    var minY = 0;

    var Bunny = fabric.util.createClass({

        initialize: function (img) {
            this.speedX = 0;
            this.speedY = 0;
            this.x = 0;
            this.y = 0;
            this.img = img;
        },

        getCanvasObj: function () {
            return this.img;
        },

        tick: function () {
            var bunny = this;

            bunny.x += bunny.speedX;
            bunny.y += bunny.speedY;
            bunny.speedY += gravity;

            if (bunny.x > maxX)
            {
                bunny.speedX *= -1;
                bunny.x = maxX;
            }
            else if (bunny.x < minX)
            {
                bunny.speedX *= -1;
                bunny.x = minX;
            }

            if (bunny.y > maxY){
                bunny.speedY *= -0.8;
                bunny.y = maxY;

                if (Math.random() > 0.5){
                    bunny.speedY -= Math.random() * 12;
                }
            }
            else if (bunny.y < minY){
                bunny.speedY = 0;
                bunny.y = minY;
            }

            this.img.left = bunny.x;
            this.img.top = bunny.y;
        }

    });

    var buffBunny;
    var img = new Image();


    var bunny;

    img.onload = function() {
        for (var i = 0; i < numBunnies; i++){
            bunny = new fabric.Image(img);

            buffBunny = new Bunny(bunny);
            buffBunny.speedX = Math.random() * 10;
            buffBunny.speedY = (Math.random() * 10) - 5;

            bunnies.push(buffBunny);
            //scene.add(bunny);
            game.add(buffBunny)
        }
      img = img.onload = null;
    };
    img.src = './wabbit_alpha.png';

    // start game
    game.start();

})();