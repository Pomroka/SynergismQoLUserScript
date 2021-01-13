// ==UserScript==
// @name         Synergism Better Diamonds History
// @namespace    YanTovis
// @version      0.0.1
// @description  Show more precise diamonds gain per prestige and time to get 1e12 diamonds.
// @updateURL    https://github.com/Pomroka/SynergismQoLUserScript/raw/main/SynergismDiamond.user.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

/*jshint esversion: 6 */

(function () {
  function diamondsDisplay() {
    let resetHistory = document.getElementById("resetHistorySubTab");
    let div = document.createElement("div");
    div.setAttribute("id", "to_e12_diamonds");

    let p = document.createElement("p");
  }
  window.SplitTime = (numberOfHours) => {
    let Days = Math.floor(numberOfHours / 24);
    let Remainder = numberOfHours % 24;
    let Hours = Math.floor(Remainder);
    let Minutes = Math.floor(60 * (Remainder - Hours));
    return { Days: Days, Hours: Hours, Minutes: Minutes };
  };

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
      `Average d/s from last ${resetHistory.length} resets: ${(
        diamonds / prestigesTime
      ).toExponential(3)}`
    );
    atTime = Date.now() + to1e12 * 1000;
    atTime = new Date(atTime).toISOString().substr(11, 8);
    to1e12 = new Date(to1e12 * 1000).toISOString().substr(11, 8);

    console.log("Time left to 1e12 Diamonds: " + to1e12);
    console.log(
      "At your current rate, you are expected to get this at: " + atTime
    );
  }
})();
