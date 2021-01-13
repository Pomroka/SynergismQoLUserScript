// ==UserScript==
// @name         Synergism Time to 1e12 Diamonds
// @namespace    YanTovis
// @version      0.0.1
// @description  Show in console last 10 prestige using real time and time to get 1e12 diamonds.
// @updateURL    https://github.com/Pomroka/SynergismQoLUserScript/raw/main/SynergismDiamond.user.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

/*jshint esversion: 6 */

(function () {
  function timeTo1e12Diamonds() {
    let resetHistory = player.history.reset;
    let diamonds = 0;
    let prestigesTime = 0;
    console.log("Last " + resetHistory.length + " resets:");
    for (let i = 0; i < resetHistory.length; i++) {
      d = parseInt(resetHistory[i].diamonds);
      pT = parseFloat(resetHistory[i].seconds) / calculateTimeAcceleration();

      console.log(
        `\tPrestige Time: ${pT.toFixed(
          3
        )}  seconds | Diamonds: ${d.toExponential(3)} | Rate: ${(
          d / pT
        ).toExponential(3)} d/s`
      );
      diamonds += d;
      prestigesTime += pT;
    }
    prestigesTime = prestigesTime;
    let to1e12 = (1e12 * prestigesTime) / diamonds;
    console.log(
      `Average from last ${resetHistory.length} resets: ${(
        diamonds / prestigesTime
      ).toExponential(3)} d/s`
    );
    atTime = Date.now() + to1e12 * 1000;
    atTime = new Date(atTime).toISOString();
    strTo1e12 = new Date(to1e12 * 1000).toISOString().substr(11, 8);
    if (to1e12 >= 24 * 3600) {
      strTo1e12 = `${Math.floor(to1e12 / (24 * 3600))}day ${strTo1e12}`;
    }

    console.log("Time left to 1e12 Diamonds: " + strTo1e12);
    console.log(
      `At your current rate, you are expected to get this at: ${atTime.substr(0, 10)} ${atTime.substr(11, 8)}`
    );
  }
})();
