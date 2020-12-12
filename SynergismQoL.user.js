// ==UserScript==
// @name         Synergism QoL
// @namespace    YanTovis
// @version      0.2.2
// @description  Some synergism QoL improvement
// @updateURL    https://github.com/Pomroka/SynergismQoLUserScript/raw/main/SynergismQoL.user.js
// @author       YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

(function () {
    function challengesDisplay() {
        let chTabl = document.getElementById("challengeIcons").firstElementChild;
        let tr = document.createElement("tr");
        tr.setAttribute("id", "challengeCompletions");
        tr.style.fontSize = "14px";
        tr.style.textAlign = "center";
        tr.style.letterSpacing = "-0.06em";

        let challengeCompletion = player.challengecompletions;

        for (let i = 1; i < challengeCompletion.length; i++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode("0 / 0"));
            tr.appendChild(td);
            let id = 'challenge' + i;
            document.getElementById(id).onclick = event => {
                challengeDisplay(i);
                replaceStartChallengeButton(i);
            };
        }
        chTabl.appendChild(tr);
        document.getElementById("challengeDetails").style.top = "130px";
    }

    let updateChallengesInterval = 0;
    function startUpdate() {
        updateChallengesInterval = setInterval(challengesUpdate, 100);
    }
    function stopUpdate() {
        clearInterval(updateChallengesInterval);
    }

    function startChallengeEvent (i, running) {
        if (running){
            if (i < 6){
                resetCheck('challenge', null, true);
            }
            if (5 < i && i < 11){
                resetCheck('reincarnationchallenge', null, true);
            }
            if (i > 10){
                resetCheck('ascensionChallenge');
            }
        } else{
            toggleChallenges(triggerChallenge, false);
        }
        replaceStartChallengeButton(i);
    }

    function replaceStartChallengeButton(i) {
        let challengeRunning = [player.currentChallenge.transcension, player.currentChallenge.reincarnation, player.currentChallenge.ascension];

        const startChallengesBtnTxt = ["", "[No Multipliers]", "[No Accelerators]", "[No Shards]", "[Cost+]", "[Reduced Diamonds]",
            "<Higher Tax>", "<No Multipliers/Accelerators>", "<Cost++>", "<No Runes>", "<Sadistic I>",
            "<[(Reduced Ants)]>", "<[(No Reincarnation)]>", "<[(Tax+++)]>", "<[(No Research)]>", "<[(Sadistic Challenge II)]>"];

        let startChallengeBtnTxt = 'Start ' + startChallengesBtnTxt[i];
        let running = false;
        let startBtnStyle = "background-color: null; color: white;";
        let challengeIconStyle = "green";

        if (challengeRunning.includes(i)) {
            startChallengeBtnTxt = 'Exit ' + startChallengesBtnTxt[i];
            startBtnStyle = "background-color: plum; color: darkmagenta;";
            challengeIconStyle = "plum";
            running = true;
        }
        document.getElementById("startChallenge").childNodes[0].data = startChallengeBtnTxt;
        document.getElementById("startChallenge").onclick = event => { startChallengeEvent(i, running) };
        document.getElementById("startChallenge").setAttribute("style", startBtnStyle);
        document.getElementById("challenge" + i).style.backgroundColor = challengeIconStyle;

        for (let j = 1; j < startChallengesBtnTxt.length; j++) {
            if (j != i && !challengeRunning.includes(j)) {
                document.getElementById("challenge" + j).style.backgroundColor = null;
            }
        }
    }

    function challengesUpdate(force = false) {
        let challengeRunning = player.currentChallenge.transcension + player.currentChallenge.reincarnation + player.currentChallenge.ascension;

        if (challengeRunning > 0 || force) {
            let challengeCompletion = player.challengecompletions;
            for (let i = 1; i < challengeCompletion.length; i++) {
                let maxCh = 0;
                let td = document.getElementById("challengeCompletions").childNodes[i - 1];
                if (i < 6)
                    maxCh = 25 + 5 * player.researches[66] + 925 * player.researches[105];
                else if (i > 5 && i <= 10)
                    maxCh = 25 + 5 * player.cubeUpgrades[29] + 2 * player.shopUpgrades.challengeExtension + 5 * player.platonicUpgrades[5] + 5 * player.platonicUpgrades[10] + 10 * player.platonicUpgrades[15];
                else if (i == 15)
                    maxCh = 9001;
                else
                    maxCh = 30 + 3 * player.platonicUpgrades[5] + 3 * player.platonicUpgrades[10] + 4 * player.platonicUpgrades[15];
                if (challengeCompletion[i] == maxCh)
                    td.style.color = "limegreen";
                else
                    td.style.color = "white";
                td.textContent = challengeCompletion[i] + " / " + maxCh;
            }
        }
    }

    challengesDisplay();

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
                challengesUpdate(true);
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
