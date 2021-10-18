# CryptocurrencyProject
Website to compare two cryptocurrency prices(BTC&amp;ETH) at the two different exchanges

## instructions on how to build and run
If using the terminal, type <code>python3 -m http.server</code> in that directory, or can use the command <code>npx http-server [path] [options]</code><br/>  Personally, I used the VScode to build and used “live server” that is part of Visual Studio Code<br/>  

There is a possibility to encounter intermitten CORS errors during the execution, but since I am connecting to the third party APIs, I have no control over the header. Even though that error will not affect the front-end result on my browser (Chrome), If somehing wrong occured, please use a web browser extention to deal with the CORS error such as "moesif origin & cors changer" or "allow cors: access-control-allow-origin"

### Questionnaire:
1. **Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?**<br/>
   I used the Rest API for the sake of time and simplicity. Also, I used the simpler APIs availabe for free to have access to live currency data.
2. **Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)**<br/>
   The blinking function to show the recomendation side prices at each buy/sell and exchange is over-designed. Also, I over-designed the canvas to show each data.
3. **If you have to scale your solution to 100 users/second traffic what changes would you make, if any?**<br/>
   I will use a reliable and fast API to have access to live currency data even though many users try to access at the same time. Then I will implement the trading    system onto reliable cloud server to increase the network capacity and speed to trade. Also, I would choose a different language or other JS libraries for fast,   efficient, and relilable access to data by the larger number of users.  
4. **What are some other enhancements you would have made, if you had more time to do this implementation**<br/>
   I used the Rest API, which is easy and simple to implement, but I could have implemented FIX API ideally, or at least Websocket API. Also, I wanted to use a fast    API, which is possible to communicate with the market data in a few milliseconds speed, but since I encounted the CORS errors when communicating the target API      server, I decided to use the other APIs for the market data. I could have created my own proxy to avoid the CORS errors and could have built the system using FIX    APIs or Websocket APIs.
   Also, for the currecy data update, I used the RequestAnimationFrame, but this depends on computers hardware even though mostly it generates
   approximately 60 times per second. For this project, I used the Rest API and assumed smaller user traffic, so this rate would be sufficient. However, ideally, I    wanted to use the fast and efficient backend fetch tools if I had more time. 
