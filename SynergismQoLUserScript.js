// ==UserScript==
// @name         Synergism QoL
// @namespace    YanTovis
// @version      0.1.2
// @description  Some synergism QoL improvement
// @updateURL    https://github.com/denesmet/SynergismQoLUserScript/blob/main/SynergismQoLUserScript.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

let challangesDisplay = (function () {
    var chTabl = document.getElementById("challengeIcons").firstElementChild;
    var tr = document.createElement("tr");
    tr.setAttribute("id", "challengeCompletions");
    tr.style.fontSize = "14px";
    tr.style.textAlign = "center";

    var challCompletion = player.challengecompletions;

    for (var i = 1; i < challCompletion.length; i++) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode("0 / 0"));
        tr.appendChild(td);
    }
    chTabl.appendChild(tr);
    document.getElementById("challengeDetails").style.top = "130px";
})();

let challengesUpdate = function () {
    var challCompletion = player.challengecompletions;
    for (var i = 1; i < challCompletion.length; i++) {
        var maxCh = 0
        var td = document.getElementById("challengeCompletions").childNodes[i - 1]
        if (i < 6) maxCh = 25 + 5 * player.researches[66] + 925 * player.researches[105];
        else if (i > 5 && i <= 10) maxCh = 25 + 5 * player.cubeUpgrades[29] + 2 * player.shopUpgrades.challengeExtension + 5 * player.platonicUpgrades[5] + 5 * player.platonicUpgrades[10] + 10 * player.platonicUpgrades[15];
        else maxCh = 30 + 3 * player.platonicUpgrades[5] + 3 * player.platonicUpgrades[10] + 4 * player.platonicUpgrades[15];
        if (challCompletion[i] == maxCh) td.style.color = "limegreen";
        else td.style.color = "white";
        td.textContent = challCompletion[i] + " / " + maxCh;
    }
    
}
window.handleChallUpdate = setInterval(challengesUpdate, 1000);



