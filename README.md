![SellProBotLogo](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProBotLogo.PNG)

# SellPro Bot

A bot to automatically complete SellPro courses.

If you've ever thought, "wouldn't it be awesome if I just simply didn't have to do these stupid courses to win something…"; I'm going to stop you right there. For the most part you don't have to, with this bot you can automate both the courses and their accompanying quizzes, making YOU the SellPro king.

Plus its kinda funny because you'll almost be guaranteed to be the highest on leaderboard at your store.

## Setup

### Cloning This Repository

#### Using the [Github](https://github.com/WTPGaming/SellProBot) website

 - Navigate to the [SellProBot](https://github.com/WTPGaming/SellProBot) repository on Github.

![Image of the SellProBot Github Page](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProBotGithub.PNG)

 - Clone the repository by clicking on Code, and then by clicking on [Download Zip](https://github.com/WTPGaming/SellProBot/archive/master.zip).

|Click Code|Click Download Zip|Wait For Your File To Download|
|---|---|---|
|![Image of the SellProBot Github Page Clicking Code](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProBotGithubCode.PNG)|![Image of the SellProBot Github Page Hovering On Download Zip](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProBotGithubDownloadZip.PNG)|![Image of the SellProBot Github Page With Downloaded Zip](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProBotGithubDownloadedZip.PNG)|

#### Using Git

```
git clone https://github.com/WTPGaming/SellProBot.git
```

### Installing Node.Js

You can find the version of node for you on the [Node.js Download Page](https://nodejs.org/en/download/).

 - The first step is to navigate to the downloaded folder which we will denote as ```./SellProBot```.

### Gathering the input JSON

The DOM tools supplied rely on information that needs to be formatted prior to running the scripts. 

 - Open the DOM of your browser by using the key combination ```CTRL```+```SHIFT```+```I``` (in chrome).
 - Refresh your browser using the key combination ```CTRL```+```R```.
 - Navigate to the ```network``` tab of the opened DOM.
 - Click on the ```preview``` tab within the ```network``` tab.
 - Search through all the files named ```messages``` until you find one similar to what is denoted in the image below.
 - Navigate to the ```response``` tab within the ```network``` tab
 - Copy the contents of the ```response``` tab by using the key combinations ```CTRL```+```A``` to select the text, followed by ```CTRL```+```C``` to copy the text

|Opening Your Browsers DOM|Navigating To The Network Tab|Clicking On The Preview Tab|Finding the proper "messages"|Navigating to the resonse tab|
|---|---|---|---|---|
|![SellProDOM](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProDOM.PNG)|![SellProDOM-Networking](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProDOMNetwork.PNG)|![SellProDOM](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProDOMPreview.PNG)|![SellProDOM](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProDOMMessage.PNG)|![SellProDOM](https://github.com/WTPGaming/SellProBot/blob/master/Docs/SellProDOMResponse.PNG)|

 - Paste the gathered text into the ```SellPro.json``` file located within ```./SellProBot/JSONConverterForDOMTools/Input```.

### Creating the output JSON

After gathering the input JSON you will need to process it by running the following in the ```./SellProBot``` directory.

```cmd
Node index.js
```

### Editing the DOM tools

The DOM Tool need the information from the JSON converter to run.

 - After creating your output JSON, you will need to set it as a variable within the DOM Tool script.

 - Edit either ```./SellProBot/DOMTools/SellProDOM.js``` or ```./SellProBot/DOMTools/SellProDOM.min.js``` filling in the required information.

```js
var ql = {...};
```

## Usage

Usage of the SellProBot is done completely in the DOM or console or your browser.

 - Navigate to the [SellPro](online.sellpro.net) website, and login using your credentials.
 - Open the DOM of your browser by using the key combination ```CTRL```+```SHIFT```+```I``` (in chrome).
 - Copy the edited ```SellProDOM.js``` or ```SellProDOM.min.js``` script into the console under the ```console`` tab and hit enter.
 - Close out of your console, and navigate to the courses tab in the main navagation bar of the SellPro website.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/WTPGaming/SellProBot/blob/master/LICENSE)