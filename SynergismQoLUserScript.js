// ==UserScript==
// @name         Synergism QoL
// @namespace    YanTovis
// @version      0.1.6
// @description  Some synergism QoL improvement
// @updateURL    https://raw.githubusercontent.com/denesmet/SynergismQoLUserScript/main/SynergismQoLUserScript.js
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
    tr.style.letterSpacing = "-0.06em";

    var challCompletion = player.challengecompletions;

    for (var i = 1; i < challCompletion.length; i++) {
        var td = document.createElement("td");
        td.appendChild(document.createTextNode("0 / 0"));
        tr.appendChild(td);
    }
    chTabl.appendChild(tr);
    document.getElementById("challengeDetails").style.top = "130px";
})();

let replaceStartChallengeButton = function () {
    var challengeSelected = document.getElementById("challengeName").childNodes[0].data;
    var challengeRunningT = player.currentChallenge.transcension;
    var challengeRunningR = player.currentChallenge.reincarnation;
    var challengeRunningA = player.currentChallenge.ascension;

    if (challengeSelected.includes("No Multipliers Challenge"))
        if(challengeRunningT === 1){ 
            document.getElementById("startChallenge").childNodes[0].data = "Exit [No Multipliers]";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('challenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start [No Multipliers";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Accelerators Challenge"))
        if (challengeRunningT === 2) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit [No Accelerators]";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('challenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start [No Accelerators]";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Shards Challenge"))
        if (challengeRunningT === 3) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit [No Shards";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('challenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start [No Shards";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Cost+ Challenge"))
        if (challengeRunningT === 4) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit [Cost+]";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('challenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start [Cost+]";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Reduced Diamonds Challenge"))
        if (challengeRunningT === 5) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit [Reduced Diamonds]";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('challenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start [Reduced Diamonds]";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Higher Tax Challenge"))
        if (challengeRunningR === 6) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <Higher Tax>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('reincarnationchallenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <Higher Tax>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Multipliers/Accelerators Challenge"))
        if (challengeRunningR === 7) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <No Multipliers/Accelerators>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('reincarnationchallenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <No Multipliers/Accelerators>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Cost++ Challenge"))
        if (challengeRunningR === 8) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <Cost++>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('reincarnationchallenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <Cost++>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Runes Challenge"))
        if (challengeRunningR === 9) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <No Runes>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('reincarnationchallenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <No Runes>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Sadistic Challenge I"))
        if (challengeRunningR === 10) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <Sadistic I>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('reincarnationchallenge', null, true)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <Sadistic I>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Reduced Ants Challenge"))
        if (challengeRunningA === 11) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <[(Reduced Ants)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('ascensionChallenge')");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <[(Reduced Ants)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Reincarnation Challenge"))
        if (challengeRunningA === 12) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <[(No Reincarnation)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('ascensionChallenge')");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <[(No Reincarnation)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("Tax+++ Challenge"))
        if (challengeRunningA === 13) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <[(Tax++ +)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('ascensionChallenge')");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <[(Tax++ +)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("No Research Challenge"))
        if (challengeRunningA === 14) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <[(No Research)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('ascensionChallenge')");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <[(No Research)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
        }
    if (challengeSelected.includes("SADISTIC CHALLENGE II"))
        if (challengeRunningA === 15) {
            document.getElementById("startChallenge").childNodes[0].data = "Exit <[(Sadistic Challenge II)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "resetCheck('ascensionChallenge')");
            document.getElementById("startChallenge").setAttribute("style", "background-color: plum;");
        } else {
            document.getElementById("startChallenge").childNodes[0].data = "Start <[(Sadistic Challenge II)]>";
            document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
            document.getElementById("startChallenge").setAttribute("style", "background-color: #111111;");
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
    replaceStartChallengeButton();
}
window.handleChallUpdate = setInterval(challengesUpdate, 1000);


