// ==UserScript==
// @name         Synergism Time to 1e12 Diamonds
// @namespace    YanTovis
// @version      0.3.2
// @description  Show in console last 10 prestige using real time and time to get 1e12 diamonds.
// @updateURL    https://github.com/Pomroka/SynergismQoLUserScript/raw/main/SynergismTimeTo1e12.user.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

/*jshint esversion: 6 */

/* Usage - in browser console type: timeTo1e12Diamonds() 
You can change default 10s time to calculate diamond rate: timeTo1e12Diamonds(time_in_seconds)  */

window.timeTo1e12Diamonds = (waitTime = 10) => {
  let resetHistory = player.history.reset;
  let diamonds = 0;
  let prestigesTime = 0;
  console.log("Last " + resetHistory.length + " resets:");
  for (let i = 0; i < resetHistory.length; i++) {
    const d = parseInt(resetHistory[i].diamonds);
    const pT =
      parseFloat(resetHistory[i].seconds) / calculateTimeAcceleration();

    console.log(
      `\tPrestige Time: ${pT.toFixed(3)}  seconds | Diamonds: ${d.toExponential(3)} | Rate: ${(d / pT).toExponential(3)} d/s`
    );
    diamonds += d;
    prestigesTime += pT;
  }

  console.log(
    `Average from last ${resetHistory.length} resets: ${(
      diamonds / prestigesTime
    ).toExponential(3)} d/s`
  );
  const diamondsStart = player.prestigePoints.toExponential();
  if (diamondsStart > 1e12) {
    console.log('1e12 diamonds already reached!');
    return;
  }

  console.log(`Wait ${waitTime} seconds...`);
  setTimeout(() => {
    const diamondsNow = player.prestigePoints.toExponential();
    const dRate = (diamondsNow - diamondsStart) / 10;
    const secTo1e12 = (1e12 - diamondsNow) / dRate;
    let strTo1e12 = new Date(secTo1e12 * 1000).toISOString().substr(11, 8);
    if (secTo1e12 >= 24 * 3600) {
      strTo1e12 = `${Math.floor(secTo1e12 / (24 * 3600))}day ${strTo1e12}`;
    }
    atTime = new Date(Date.now() + secTo1e12 * 1000).toLocaleString();
    console.log(
      `Average rate after ${waitTime} seconds: ${dRate.toExponential(3)} d/s`
    );
    console.log(`Diamonds left: ${(1e12 - diamondsNow).toExponential(3)}`);
    console.log(`With that rate time left to 1e12 Diamonds: ${strTo1e12}`);
    console.log(`At this rate, you are expected to get this at: ${atTime}`);
  }, waitTime * 1000);
};
