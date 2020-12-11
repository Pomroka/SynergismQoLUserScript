// ==UserScript==
// @name         Synergism QoL
// @namespace    YanTovis
// @version      0.1.9
// @description  Some synergism QoL improvement
// @updateURL    https://github.com/Pomroka/SynergismQoLUserScript/raw/main/SynergismQoL.user.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

(function () {
    let challangesDisplay = () => {
        let chTabl = document.getElementById("challengeIcons").firstElementChild;
        let tr = document.createElement("tr");
        tr.setAttribute("id", "challengeCompletions");
        tr.style.fontSize = "14px";
        tr.style.textAlign = "center";
        tr.style.letterSpacing = "-0.06em";

        let challCompletion = player.challengecompletions;

        for (let i = 1; i < challCompletion.length; i++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode("0 / 0"));
            tr.appendChild(td);
        }
        chTabl.appendChild(tr);
        document.getElementById("challengeDetails").style.top = "130px";
    }

    let replaceStartChallengeButton = () => {
        let challengeSelected = document.getElementById("challengeName").childNodes[0].data;
        let challengeRunning = player.currentChallenge.transcension;
        challengeRunning += player.currentChallenge.reincarnation;
        challengeRunning += player.currentChallenge.ascension;

        const challengesNames = ["", "[No Multipliers]", "[No Accelerators]", "[No Shards]", "[Cost+]", "[Reduced Diamonds]",
                                "<Higher Tax>", "<No Multipliers/Accelerators>", "<Cost++>", "<No Runes>", "<Sadistic I>",
                                "<[(Reduced Ants)]>", "<[(No Reincarnation)]>", "<[(Tax+++)]>", "<[(No Research)]>", "<[(CHALLENGE)]>"];

        for (let i = 1; i < challengesNames.length; i++) {
            let chall = challengesNames[i];
            let event;
            if (i < 6) event = "resetCheck('challenge', null, true)";
            if (5 < i && i < 11) event = "resetCheck('reincarnationchallenge', null, true)";
            if (i > 10) event = "resetCheck('ascensionChallenge')";
            if (challengeSelected.includes(chall.replace(/[\[\]\(\)\<\>I]+/g, "") + " ")){
                if (i == 15) chall = "<[(Sadistic Challenge II)]>";
                if (challengeRunning === i){
                    document.getElementById("startChallenge").childNodes[0].data = "Exit " + chall;
                    document.getElementById("startChallenge").setAttribute("onClick", event);
                    document.getElementById("startChallenge").setAttribute("style", "background-color: plum; color: darkmagenta;");
                    document.getElementById("challenge" + i).style.backgroundColor = "plum";
                } else {
                    document.getElementById("startChallenge").childNodes[0].data = "Start " + chall;
                    document.getElementById("startChallenge").setAttribute("onClick", "toggleChallenges(triggerChallenge, false)");
                    document.getElementById("startChallenge").setAttribute("style", "background-color: null; color: white;");
                    document.getElementById("challenge" + i).style.backgroundColor = "green";
                }
            }
            else {
                if (challengeRunning != i){
                    document.getElementById("challenge" + i).style.backgroundColor = null;
                }
            }
        }
    }

    let challengesUpdate = () => {
        let challCompletion = player.challengecompletions;
        for (let i = 1; i < challCompletion.length; i++) {
            let maxCh = 0
            let td = document.getElementById("challengeCompletions").childNodes[i - 1]
            if (i < 6) maxCh = 25 + 5 * player.researches[66] + 925 * player.researches[105];
            else if (i > 5 && i <= 10) maxCh = 25 + 5 * player.cubeUpgrades[29] + 2 * player.shopUpgrades.challengeExtension + 5 * player.platonicUpgrades[5] + 5 * player.platonicUpgrades[10] + 10 * player.platonicUpgrades[15];
            else if (i == 15) maxCh = 9001;
            else maxCh = 30 + 3 * player.platonicUpgrades[5] + 3 * player.platonicUpgrades[10] + 4 * player.platonicUpgrades[15];
            if (challCompletion[i] == maxCh) td.style.color = "limegreen";
            else td.style.color = "white";
            td.textContent = challCompletion[i] + " / " + maxCh;
        }
        replaceStartChallengeButton();
    }

    let updateChallengesInterval = 0;
    let startUpdate = () => {
        challangesDisplay();
        updateChallengesInterval = setInterval(challengesUpdate, 100);
    }
    let stopUpdate = () => {
        clearInterval(updateChallengesInterval);
    }

    const tabsId = ['buildingstab', 'upgradestab', 'settingstab', 'achievementstab', 'runestab', 'challengetab', 
                    'researchtab', 'shoptab', 'anttab', 'cubetab', 'traitstab'];
    const tabsEvents = ['buildings', 'upgrades', 'settings', 'achievements', 'runes', 'challenges', 
                    'researches', 'shop', 'ants', 'cubes', 'traits'];

    for (let i = 0; i < tabsId.length; i++) {
        const tabId = tabsId[i];
        const tabEvent = tabsEvents[i];
        if (tabEvent == 'challenges') {
            document.getElementById(tabId).onclick = event => {
                toggleTabs(tabEvent);
                startUpdate();
            }
        } else {
            document.getElementById(tabId).onclick = event => {
                toggleTabs(tabEvent);
                stopUpdate();
            }
        }
    }


})();
