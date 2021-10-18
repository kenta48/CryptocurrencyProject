# CryptocurrencyProject
Website to compare two cryptocurrency prices(BTC&amp;ETH) at the two different exchanges

## instructions on how to build and run
If using the terminal, type <code>python3 -m http.server</code> in that directory, or can use the command <code>npx http-server [path] [options]</code><br/>  
Personally, I used the VScode to build and used “live server” that is part of Visual Studio Code
### Questionnaire:
1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?<br/>
   I used the Rest API for the sake of time and simplicity. Also, I used the simpler APIs availabe for free to have access to live currency data.
2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)<br/>
   The blinking function to show the recomendation side prices at each buy/sell and exchange is over-designed. Also, I over-designed the canvas to show each data.
3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?<br/>
   I will use a reliable and fast API to have access to live currency data even though many users try to access at the same time. Also, I will implement the system    into reliable cloud server to increase the network capacity and speed to trade. 
4. What are some other enhancements you would have made, if you had more time to do this implementation<br/>
