// ==UserScript==
// @name         Synergism QoL
// @namespace    YanTovis
// @version      0.1.3
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

let currentChallengeSelectd = function () {
    var challengeSelected = document.getElementById("sartChallenge").childNodes[0].data;
    var challengeRunningT = player.currentChallenge.transcension;
    var challengeRunningR = player.currentChallenge.reincarnation;
    var challengeRunningA = player.currentChallenge.ascension;
    if (challengeSelected === "Start [No Multipliers]" && challengeRunningT === 1){ 
        challengeSelected = "Exit [No Multipliers";
        document.getElementById("startChallenge").onclick = "resetCheck('challenge', null, true)"
    }
    if (challengeSelected === "Start [No Accelerators]" && challengeRunningT === 2) {
        challengeSelected = "Exit [No Accelerators]";
        document.getElementById("startChallenge").onclick = "resetCheck('challenge', null, true)"
    }   
    if (challengeSelected === "Start [No Shards" && challengeRunningT === 3) {
        challengeSelected = "Exit [No Shards";
        document.getElementById("startChallenge").onclick = "resetCheck('challenge', null, true)"
    }
    if (challengeSelected === "Start [Cost+]" && challengeRunningT === 4) {
        challengeSelected = "Exit [Cost+]";
        document.getElementById("startChallenge").onclick = "resetCheck('challenge', null, true)"
    }
    if (challengeSelected === "Start [Reduced Diamonds]" && challengeRunningT === 5) {
        challengeSelected = "Exit [Reduced Diamonds]";
        document.getElementById("startChallenge").onclick = "resetCheck('challenge', null, true)"
    }
    if (challengeSelected === "Start <Higher Tax>" && challengeRunningR === 6) {
        challengeSelected = "Exit <Higher Tax>";
        document.getElementById("startChallenge").onclick = "resetCheck('reincarnationchallenge', null, true)"
    }
    if (challengeSelected === "Start <No Multipliers/Accelerators>" && challengeRunningR === 7) {
        challengeSelected = "Exit <No Multipliers/Accelerators>";
        document.getElementById("startChallenge").onclick = "resetCheck('reincarnationchallenge', null, true)"
    }
    if (challengeSelected === "Start <Cost++>" && challengeRunningR === 8) {
        challengeSelected = "Exit <Cost++>";
        document.getElementById("startChallenge").onclick = "resetCheck('reincarnationchallenge', null, true)"
    }
    if (challengeSelected === "Start <No Runes>" && challengeRunningR === 9) {
        challengeSelected = "Exit <No Runes>";
        document.getElementById("startChallenge").onclick = "resetCheck('reincarnationchallenge', null, true)"
    }
    if (challengeSelected === "Start <Sadistic I>" && challengeRunningR === 10) {
        challengeSelected = "Exit <Sadistic I>";
        document.getElementById("startChallenge").onclick = "resetCheck('reincarnationchallenge', null, true)"
    }
    if (challengeSelected === "Start <[(Reduced Ants)]>" && challengeRunningA === 11) {
        challengeSelected = "Exit <[(Reduced Ants)]>";
        document.getElementById("startChallenge").onclick = "resetCheck('ascensionChallenge')"
    }
    if (challengeSelected === "Start <[(No Reincarnation)]>" && challengeRunningA === 12) {
        challengeSelected = "Exit <[(No Reincarnation)]>"
        document.getElementById("startChallenge").onclick = "resetCheck('ascensionChallenge')"
    };
    if (challengeSelected === "Start <[(Tax+++)]>" && challengeRunningA === 13) {
        challengeSelected = "Exit <[(Tax++ +)]>"
        document.getElementById("startChallenge").onclick = "resetCheck('ascensionChallenge')"
    };
    if (challengeSelected === "Start <[(No Research)]>" && challengeRunningA === 14) {
        challengeSelected = "Exit <[(No Research)]>";
        document.getElementById("startChallenge").onclick = "resetCheck('ascensionChallenge')"
    }
    if (challengeSelected === "Start <[(Sadistic Challenge II)]>" && challengeRunningA === 15) {
        challengeSelected = "Exit <[(Sadistic Challenge II)]>";
        document.getElementById("startChallenge").onclick = "resetCheck('ascensionChallenge')"
    }
}

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


