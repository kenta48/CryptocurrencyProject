/**
 * This is a webpage to compare crypto currencies (Bitcoin&Ethereum) data
 * at two exchanges (n.exchange & bitstamp)
 * written by Kenta Shibasaki, october 16, 2021
*/

// @ts-check
/* jshint -W069, -W141, esversion:6 */
export {};

/** @type {HTMLCanvasElement} */
let canvas1 = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas1"));
let context1 = canvas1.getContext('2d');

/** @type {HTMLCanvasElement} */
let canvas2 = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas2"));
let context2 = canvas2.getContext('2d');

/** @type {HTMLCanvasElement} */
let canvas3 = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas3"));
let context3 = canvas3.getContext('2d');

/** @type {HTMLCanvasElement} */
let canvas4 = (/** @type {HTMLCanvasElement} */ document.getElementById("canvas4"));
let context4 = canvas4.getContext('2d');

// global variables for prices
let btc_buyprice_nex;
let btc_sellprice_nex;
let btc_buyprice_bitstamp;
let btc_sellprice_bitstamp;
let eth_buyprice_nex;
let eth_sellprice_nex;
let eth_buyprice_bitstamp;
let eth_sellprice_bitstamp;


/**
 * show all data for all Canvases
 * 
 */
function showCryptoData() {
    // clear the canvas
    context1.clearRect(0,0,canvas1.width,canvas1.height);
    context2.clearRect(0,0,canvas2.width,canvas2.height);
    context3.clearRect(0,0,canvas3.width,canvas3.height);
    context4.clearRect(0,0,canvas4.width,canvas4.height);

    /** 
    fetch("https://api.nomics.com/v1/currencies/ticker?key=582843b0b322ed53b7cf89969c84335003b90785&ids=BTC,ETH&interval=1d,30d&convert=USD&per-page=100&page=1")
    .then(response => response.json())
    .then(data => console.log(data))
    */

    // fetch third party API for BTC/USD price at n.exchange
    fetch("https://api.n.exchange/en/api/v1/price/BTCUSD/latest/?market_code=nex")
    .then(response => response.json())
    .then(data => {
        //console.log(data[0]);
        btc_buyprice_nex = data[0].ticker.ask;
        btc_sellprice_nex = data[0].ticker.bid;
    });

    // fetch third party API for ETH/USD price at n.exchange
    fetch("https://api.n.exchange/en/api/v1/price/ETHUSD/latest/?market_code=nex")
    .then(response => response.json())
    .then(data => {
        //console.log(data[0]);
        eth_buyprice_nex = data[0].ticker.ask;
        eth_sellprice_nex = data[0].ticker.bid;
    });

    // fetch third party API for BTC/USD price at bitstamp
    fetch("https://www.bitstamp.net/api/v2/ticker/btcusd/")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        btc_buyprice_bitstamp = data.ask;
        btc_sellprice_bitstamp = data.bid;
    });
    /** 
    .catch(error => {
        console.log(error);
        console.error(error);
    });
    */

    // fetch third party API for ETH/USD price at bitstamp
    fetch("https://www.bitstamp.net/api/v2/ticker/ethusd/")
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        eth_buyprice_bitstamp = data.ask;
        eth_sellprice_bitstamp = data.bid;
    });
    /** 
    .catch(error => {
        console.log(error);
        console.error(error);
    });
    */
    
    //Bitcoin information for n.exchange
    context1.save();
    context1.scale(3, 3);
    context1.fillStyle = "#484848";
    context1.fillText("n.exchange", canvas1.width/6-25, 10);
    context1.restore();
    context1.save();
    context1.fillStyle = "#6CBB3C";
    context1.fillRect(0,50,canvas1.width/2,canvas1.height/4);
    context1.fillStyle = "#FFFFFF";
    context1.scale(2, 2);
    context1.fillText("BUY", canvas1.width/8 - 10, canvas1.height/16 + 29);
    context1.restore();
    context1.save();
    context1.fillStyle = "#FF1A1A";
    context1.fillRect(0,50+canvas1.height/4,canvas1.width/2,canvas1.height/4);
    context1.fillStyle = "#FFFFFF";
    context1.scale(2, 2);
    context1.fillText("SELL", canvas1.width/8 - 10, canvas1.height/8 + 35);
    context1.restore();
    context1.fillStyle = "#484848";
    context1.fillRect(canvas1.width/2 -1, 50, 0.5, canvas1.height-50);
    context1.fillRect(0, canvas1.height/2, canvas1.width, 1);
    context1.fillRect(0, canvas1.height*3/4, canvas1.width, 1);
    context1.fillStyle = "#000000";
    context1.fillText("USD/BTC", canvas1.width*3/4-30, 50);
    context1.save();
    context1.scale(1.5, 1.5);
    context1.fillText(btc_buyprice_nex, canvas1.width*3/4-120, canvas1.height*3/4-30);
    context1.fillText(btc_sellprice_nex, canvas1.width*3/4-120, canvas1.height-38);
    context1.restore();

    //Bitcoin information for bitstamp
    context2.save();
    context2.scale(3, 3);
    context2.fillStyle = "#484848";
    context2.fillText("bitstamp", canvas2.width/6-25, 10);
    context2.restore();
    context2.save();
    context2.fillStyle = "#6CBB3C";
    context2.fillRect(0,50,canvas2.width/2,canvas2.height/4);
    context2.fillStyle = "#FFFFFF";
    context2.scale(2, 2);
    context2.fillText("BUY", canvas2.width/8 - 10, canvas2.height/16 + 29);
    context2.restore();
    context2.save();
    context2.fillStyle = "#FF1A1A";
    context2.fillRect(0,50+canvas2.height/4,canvas2.width/2,canvas2.height/4);
    context2.fillStyle = "#FFFFFF";
    context2.scale(2, 2);
    context2.fillText("SELL", canvas2.width/8 - 10, canvas2.height/8 + 35);
    context2.restore();
    context2.fillStyle = "#484848";
    context2.fillRect(canvas2.width/2 -1, 50, 0.5, canvas2.height-50);
    context2.fillRect(0, canvas2.height/2, canvas2.width, 1);
    context2.fillRect(0, canvas2.height*3/4, canvas2.width, 1);
    context2.fillStyle = "#000000";
    context2.fillText("USD/BTC", canvas2.width*3/4-30, 50);
    context2.save();
    context2.scale(1.5, 1.5);
    context2.fillText(btc_buyprice_bitstamp, canvas2.width*3/4-120, canvas2.height*3/4-30);
    context2.fillText(btc_sellprice_bitstamp, canvas2.width*3/4-120, canvas2.height-38);
    context2.restore();

    //Ethereum information for n.exchange
    context3.save();
    context3.scale(3, 3);
    context3.fillStyle = "#484848";
    context3.fillText("n.exchange", canvas3.width/6-25, 10);
    context3.restore();
    context3.save();
    context3.fillStyle = "#6CBB3C";
    context3.fillRect(0,50,canvas3.width/2,canvas3.height/4);
    context3.fillStyle = "#FFFFFF";
    context3.scale(2, 2);
    context3.fillText("BUY", canvas3.width/8 - 10, canvas3.height/16 + 29);
    context3.restore();
    context3.save();
    context3.fillStyle = "#FF1A1A";
    context3.fillRect(0,50+canvas3.height/4,canvas3.width/2,canvas3.height/4);
    context3.fillStyle = "#FFFFFF";
    context3.scale(2, 2);
    context3.fillText("SELL", canvas3.width/8 - 10, canvas3.height/8 + 35);
    context3.restore();
    context3.fillStyle = "#484848";
    context3.fillRect(canvas3.width/2 -1, 50, 0.5, canvas3.height-50);
    context3.fillRect(0, canvas3.height/2, canvas3.width, 1);
    context3.fillRect(0, canvas3.height*3/4, canvas3.width, 1);
    context3.fillStyle = "#000000";
    context3.fillText("USD/ETH", canvas3.width*3/4-30, 50);
    context3.save();
    context3.scale(1.5, 1.5);
    context3.fillText(eth_buyprice_nex, canvas3.width*3/4-120, canvas3.height*3/4-30);
    context3.fillText(eth_sellprice_nex, canvas3.width*3/4-120, canvas3.height-38);
    context3.restore();


    //Ethereum information for bitstamp
    context4.save();
    context4.scale(3, 3);
    context4.fillStyle = "#484848";
    context4.fillText("bitstamp", canvas4.width/6-25, 10);
    context4.restore();
    context4.save();
    context4.fillStyle = "#6CBB3C";
    context4.fillRect(0,50,canvas4.width/2,canvas4.height/4);
    context4.fillStyle = "#FFFFFF";
    context4.scale(2, 2);
    context4.fillText("BUY", canvas4.width/8 - 10, canvas4.height/16 + 29);
    context4.restore();
    context4.save();
    context4.fillStyle = "#FF1A1A";
    context4.fillRect(0,50+canvas4.height/4,canvas4.width/2,canvas4.height/4);
    context4.fillStyle = "#FFFFFF";
    context4.scale(2, 2);
    context4.fillText("SELL", canvas4.width/8 - 10, canvas4.height/8 + 35);
    context4.restore();
    context4.fillStyle = "#484848";
    context4.fillRect(canvas4.width/2 -1, 50, 0.5, canvas4.height-50);
    context4.fillRect(0, canvas4.height/2, canvas4.width, 1);
    context4.fillRect(0, canvas4.height*3/4, canvas4.width, 1);
    context4.fillStyle = "#000000";
    context4.fillText("USD/ETH", canvas4.width*3/4-30, 50);
    context4.save();
    context4.scale(1.5, 1.5);
    context4.fillText(eth_buyprice_bitstamp, canvas4.width*3/4-120, canvas4.height*3/4-30);
    context4.fillText(eth_sellprice_bitstamp, canvas4.width*3/4-120, canvas4.height-38);
    context4.restore();
}

/**
 * This is a function to compare two price objects, 
 * and return true if obj1 price is higher
 * @param {*} priceObj1 price object1
 * @param {*} priceObj2 price object2
 * @returns true or false
 */
 function price_comparison(priceObj1, priceObj2){
    if(parseFloat(priceObj1) > parseFloat(priceObj2)){
        return true;
    }
    return false;
}



// the animation loop
function cryptoDataLive(timestamp) {
    let xpos = (timestamp/10 % 260) - 10;

    // show all data
    showCryptoData();

    // check which exchange to buy and sell for each currency
    if(price_comparison(btc_buyprice_nex, btc_buyprice_bitstamp)){
        document.getElementById("btc_buy").innerHTML = "bitstamp"; 
    }
    if(price_comparison(btc_sellprice_nex, btc_sellprice_bitstamp)){
        document.getElementById("btc_sell").innerHTML = "n.exchange";   
    }
    if(price_comparison(eth_buyprice_nex, eth_buyprice_bitstamp)){
        document.getElementById("eth_buy").innerHTML = "bitstamp"; 
    }
    if(price_comparison(eth_sellprice_nex, eth_sellprice_bitstamp)){
        document.getElementById("eth_sell").innerHTML = "n.exchange";   
    }

    // the next "loop"
    window.requestAnimationFrame(cryptoDataLive);
}
cryptoDataLive();


/**
 * A function that makes an currency that is advantageout blink
 * 
 * This creates a function that does the blinking, and makes an animation loop
 * with requestAnimationFrame
 * 
 */
function dataBlink() {
    let value = 0;
    let lasttime = 0;
    function blinker(time) {
        const delta = (time - lasttime) / 10.0;
        value = (value + delta) % 100;
        lasttime = time;
        if (value < 50) {
            // for buy price, cheaper price option blinks
            if(!price_comparison(btc_buyprice_nex, btc_buyprice_bitstamp)){
                context1.fillStyle = 'rgba(0, 150, 0, 0.3)';
                context1.fillRect(canvas1.width/2, canvas1.height/2, canvas1.width/2, canvas1.height/4);
            }else{
                context2.fillStyle = 'rgba(0, 150, 0, 0.3)';
                context2.fillRect(canvas2.width/2, canvas2.height/2, canvas2.width/2, canvas2.height/4);  
            }

            // for sell price, higher price option blinks
            if(price_comparison(btc_sellprice_nex, btc_sellprice_bitstamp)){
                context1.fillStyle = 'rgba(150, 0, 0, 0.3)';
                context1.fillRect(canvas1.width/2, canvas1.height*3/4, canvas1.width/2, canvas1.height/4);
            }else{
                context2.fillStyle = 'rgba(150, 0, 0, 0.3)';
                context2.fillRect(canvas2.width/2, canvas2.height*3/4, canvas2.width/2, canvas2.height/4);  
            }

            // for buy price, cheaper price option blinks
            if(!price_comparison(eth_buyprice_nex, eth_buyprice_bitstamp)){
                context3.fillStyle = 'rgba(0, 150, 0, 0.3)';
                context3.fillRect(canvas3.width/2, canvas3.height/2, canvas3.width/2, canvas3.height/4);
            }else{
                context4.fillStyle = 'rgba(0, 150, 0, 0.3)';
                context4.fillRect(canvas4.width/2, canvas4.height/2, canvas4.width/2, canvas4.height/4);  
            }

            // for sell price, higher price option blinks
            if(price_comparison(eth_sellprice_nex, eth_sellprice_bitstamp)){
                context3.fillStyle = 'rgba(150, 0, 0, 0.3)';
                context3.fillRect(canvas3.width/2, canvas3.height*3/4, canvas3.width/2, canvas3.height/4);
            }else{
                context4.fillStyle = 'rgba(150, 0, 0, 0.3)';
                context4.fillRect(canvas4.width/2, canvas4.height*3/4, canvas4.width/2, canvas4.height/4);  
            }
        }
        window.requestAnimationFrame(blinker);
    }
    window.requestAnimationFrame(blinker);
}

window.onload = function() {
    dataBlink();
};

