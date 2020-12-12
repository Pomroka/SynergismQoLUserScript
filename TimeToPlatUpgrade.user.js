// ==UserScript==
// @name         time to plat upgrade
// @namespace    lulu
// @version      1.4
// @description  Calculates tess, hyper and plat time until next upgrade
// @author       Lulu
// @coauthor	 Dankaati for extra resources, BigWhupDude for original idea, and KittensGiveMorboGas for time stuffs, corrected leftover formula by YanTovis
// @match        https://pseudonian.github.io/SynergismOfficial/
// @grant        none
// ==/UserScript==

// time to one level of a plat upgrade for Synergism v2.1.1 by lulu
// Usage: paste in the console, call the function getCubeTimes(). defaults to alpha but can be used to find any upgrade and levels by doing getCubeTimes(upgrade,level)

window.SplitTime = (numberOfHours) => {
    let Days = Math.floor(numberOfHours / 24);
    let Remainder = numberOfHours % 24;
    let Hours = Math.floor(Remainder);
    let Minutes = Math.floor(60 * (Remainder - Hours));
    return ({"Days" : Days, "Hours" : Hours, "Minutes" : Minutes});
}

window.getCubeTimes = (i = 5, levels = 1) => {
    let x = CalcCorruptionStuff();
    let tess = x[5]
    let hyper = x[6]
    let plat = x[7]
    let Upgrades = platUpgradeBaseCosts[i]
    let tessCost = Upgrades.tesseracts * levels
    let hyperCost = Upgrades.hypercubes * levels
    let platCost = Upgrades.platonics * levels
    let time = player.ascensionCounter / 3600 / 24
    let platRate = plat / time;
    let hyperRate = hyper / time;
    let tessRate = tess / time;
    let Day = (player.ascensionCounter) / (3600);
    let platTimeNeeded = (platCost - player.wowPlatonicCubes - plat) / platRate;
    let hyperTimeNeeded = (hyperCost - player.wowHypercubes - hyper) / hyperRate;
    let tessTimeNeeded = (tessCost - player.wowTesseracts - tess) / tessRate;
    let Plats = SplitTime([Math.max(0, ((platCost - player.wowPlatonicCubes - x[7]) / (x[7] / Day)))]);
    let Hypers = SplitTime([Math.max(0, ((hyperCost - player.wowHypercubes - x[6]) / (x[6] / Day)))]);
    let Tess = SplitTime([Math.max(0, ((tessCost - player.wowTesseracts - x[5]) / (x[5] / Day)))]);

    let totalTimeNeeded = Math.max(platTimeNeeded, hyperTimeNeeded, tessTimeNeeded);
    let minutesToAdd = totalTimeNeeded * 1440;
    let currentDate = new Date();
    let futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);

	console.log("Time left until next " + [levels] + " level(s) of platonic upgrade " + [i] + " purchase:\n" +
                "Plats: " + Plats.Days + " Days, " + Plats.Hours + " Hours, " + Plats.Minutes + " Minutes \n" +
                "Hypers: " + Hypers.Days + " Days, " + Hypers.Hours + " Hours, " + Hypers.Minutes + " Minutes \n" +
                "Tess: " + Tess.Days + " Days, " + Tess.Hours + " Hours, " + Tess.Minutes + " Minutes");

    console.log("At your current rate, you are expected to get this at:\n" + futureDate);

    console.log("Leftovers after " + [totalTimeNeeded.toPrecision(4)] + " days:\n" +
                "Platonics: " + [(player.wowPlatonicCubes + plat + platRate * totalTimeNeeded - platCost).toPrecision(4)] + " \n" +
                "Hypers: " + [(player.wowHypercubes + hyper + hyperRate * totalTimeNeeded - hyperCost).toPrecision(4)] + " \n" +
                "Tesseracts: " + [(player.wowTesseracts + tess + tessRate * totalTimeNeeded - tessCost).toPrecision(4)])
}