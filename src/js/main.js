/*************************************
 *
 *  Project TechRPG by Alee Productions
 *
 *  Please don't steal the reuse code without our credit.
 *
 *************************************/

console.log("Script has been started");
var coinImage = new Image();
coinImage.src = "images/coin-sprite-animation.png";

function main (options) {

    var that = {};

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;
}