// ==UserScript==
// @name     Synergism more info
// @version  0.1
// @grant    GM_addStyle
// @match    *://pseudonian.github.io/SynergismOfficial/
// @match    *://v1011testing.vercel.app/
// ==/UserScript==

function challangesDisplay() {
    var chTabl = document.getElementById("challengeIcons").firstElementChild;
    var tr = document.createElement("tr");
    tr.setAttribute("id", "challengeCompletions")
    tr.style.fontSize = "12px"

    var challCompletion = player.challengecompletions;

    for (var i = 1; i < challCompletion.length; i++){
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(challCompletion[i]));
        tr.appendChild(td);
    }
    chTabl.appendChild(tr);
}


challangesDisplay();

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