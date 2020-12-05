// ==UserScript==
// @name         Synergism QoL
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Some synergism QoL improvement
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










function exportWFCButton() {
    var newExButton = document.createElement("button");
    newExButton.setAttribute("id", "WFCexport");
    newExButton.innerHTML = "WF Classic export";
    newExButton.style.border = "2px solid green";
    newExButton.style.width = "150px";
    newExButton.style.marginLeft = "auto";
    newExButton.style.marginRight = "auto";

    document.getElementById("exportButtons").appendChild(newExButton);

    document.getElementById("WFCexport").addEventListener("click", exportSaveWFC, false);
}

function infoStuff(){
    var infoNode = document.createElement("div");
    infoNode.setAttribute("id", "infoStuff");
    infoNode.innerHTML = '<p id="infoWCubes" class="statPortion" onmouseover="updateInfo()">Wow! Cubes: <span id="infWC" class="statNumber"></span></p>'
                       + '<p id="infoTess" class="statPortion">Tesseracts: <span id="infTS" class="statNumber"></span></p>'
                       + '<p id="infoHCubes" class="statPortion">Hypercubes: <span id="infHC" class="statNumber"></span></p>'
                       + '<p id="infoTimeMulti" class="statPortion">Time multiplier: <span id="infTM" class="statNumber"></span></p>';
    
    infoNode.style.position = "absolute";
    infoNode.style.top = "0";
    infoNode.style.right = "0";

    document.body.appendChild(infoNode);
}

function updateInfo() {
    var timeMultiPlier = calculateTimeAcceleration();
    var wowCubes = document.getElementById("cubeQuantity").innerText;
    var tesser = player.wowTesseracts
    var hyperCubes = player.wowHypercubes

    document.getElementById("infWC").innerHTML = wowCubes;
    document.getElementById("infTS").innerHTML = "test";
    document.getElementById("infHC").innerHTML = hyperCubes
    document.getElementById("infTM").innerHTML = timeMultiPlier;
}


//GM_addStyle ( '    #infoStuff {        position:   absolute;        top:        20;        left:       1260;    }' );