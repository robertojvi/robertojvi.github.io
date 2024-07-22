document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateAverages);
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const calcConstButton = document.getElementById('calculate-construction-time');
//     if (calcConstButton) {
//         calcConstButton.addEventListener('click', calculateConstructionTime);
//     }
// });


function calculateAverages() {

    const crewSize = parseInt(document.getElementById('crewSize').value);

    const daysForInventory = parseInt(document.getElementById('inventory').value);
    const daysForHeadEndInstall = parseInt(document.getElementById('headEndInstall').value);

    const totalSites = parseInt(document.getElementById('totalSites').value);

    const daysForTasks = parseInt(document.getElementById('totalDays').value)-(daysForInventory+daysForHeadEndInstall); 

    const trenchConduit = parseFloat(document.getElementById('trenchConduit').value);
    const fiberBackbone = parseFloat(document.getElementById('fiberBackbone').value);
    const roadBores = parseFloat(document.getElementById('roadBores').value);
    const microDuct = parseFloat(document.getElementById('microDuct').value);
    const preTerminatedFiber = parseFloat(document.getElementById('preTerminatedFiber').value);
    const fiberSplices = parseFloat(document.getElementById('fiberSplices').value);
    const splicePedEnclosures = parseFloat(document.getElementById('splicePedEnclosures').value);
    const handHoles = parseFloat(document.getElementById('handHoles').value);

    const trenchConduitPerDay = trenchConduit / daysForTasks;
    const fiberBackbonePerDay = fiberBackbone / daysForTasks;
    const roadBoresPerDay = roadBores / daysForTasks;
    const microDuctPerDay = microDuct / daysForTasks;
    const preTerminatedFiberPerDay = preTerminatedFiber / daysForTasks;
    const fiberSplicesPerDay = fiberSplices / daysForTasks;
    const splicePedEnclosuresPerDay = splicePedEnclosures / daysForTasks;
    const handHolesPerDay = handHoles / daysForTasks;

    const trenchConduitPerDayPerMan = trenchConduitPerDay / crewSize;
    const fiberBackbonePerDayPerMan = fiberBackbonePerDay / crewSize;
    const roadBoresPerDayPerMan = roadBoresPerDay / crewSize;
    const microDuctPerDayPerMan = microDuctPerDay / crewSize;
    const preTerminatedFiberPerDayPerMan = preTerminatedFiberPerDay / crewSize;
    const fiberSplicesPerDayPerMan = fiberSplicesPerDay / crewSize;
    const splicePedEnclosuresPerDayPerMan = splicePedEnclosuresPerDay / crewSize;
    const handHolesPerDayPerMan = handHolesPerDay / crewSize;

    const avgPreTerminatedFiberPerSite = preTerminatedFiber / totalSites;
    const avgTrenchConduitPerSite = trenchConduit / totalSites;
    const avgFiberBackbonePerSite = fiberBackbone / totalSites;
    const avgRoadBoresPerSite = roadBores / totalSites;
    const avgMicroDuctHomesPerSite = microDuct / totalSites;
    const avgFiberSplicesPerSite = fiberSplices / totalSites;
    const avgSplicePedEnclosuresPerSite = splicePedEnclosures / totalSites;
    const avgHandHolesPerSite = handHoles / totalSites;

    const results = `
        <h2>Average Work Needed Per Day</h2>
        <p>Trench & Install Conduit: ${trenchConduitPerDay.toFixed(2)} ft/day (${trenchConduitPerDayPerMan.toFixed(2)} ft/day/man)</p>
        <p>Install Fiber Backbone 6-Strand: ${fiberBackbonePerDay.toFixed(2)} ft/day (${fiberBackbonePerDayPerMan.toFixed(2)} ft/day/man)</p>
        <p>Road Bores 25' Per: ${roadBoresPerDay.toFixed(2)} per day (${roadBoresPerDayPerMan.toFixed(2)} per day/man)</p>
        <p>Install Micro Duct to Homes: ${microDuctPerDay.toFixed(2)} ft/day (${microDuctPerDayPerMan.toFixed(2)} ft/day/man)</p>
        <p>Install Pre-Terminated Fiber: ${preTerminatedFiberPerDay.toFixed(2)} ft/day (${preTerminatedFiberPerDayPerMan.toFixed(2)} ft/day/man)</p>
        <p>Fiber Splices: ${fiberSplicesPerDay.toFixed(2)} per day (${fiberSplicesPerDayPerMan.toFixed(2)} per day/man)</p>
        <p>Splice Ped Enclosures: ${splicePedEnclosuresPerDay.toFixed(2)} per day (${splicePedEnclosuresPerDayPerMan.toFixed(2)} per day/man)</p>
        <p>Hand holes 17x30 Vault: ${handHolesPerDay.toFixed(2)} per day (${handHolesPerDayPerMan.toFixed(2)} per day/man)</p>
        <p>Total Sites: ${totalSites}</p>
        <p>Average Pre-Terminated Fiber per Site: ${(preTerminatedFiber/totalSites).toFixed(2)} ft</p>
        <p>Average Trench & Install Conduit per Site: ${(trenchConduit/totalSites).toFixed(2)} ft</p>
        <p>Average Fiber Backbone per Site: ${(fiberBackbone/totalSites).toFixed(2)} ft</p>
        <p>Average Road Bores 25' Per per Site: ${(roadBores/totalSites).toFixed(2)} Units</p>
        <p>Average Micro Duct to Homes per Site: ${(microDuct/totalSites).toFixed(2)} ft</p>
        <p>Average Fiber Splices per Site: ${(fiberSplices/totalSites).toFixed(2)} Units</p>
        <p>Average Splice Ped Enclosures per Site: ${(splicePedEnclosures/totalSites).toFixed(2)} Units</p>
        <p>Average Hand holes 17x30 Vault per Site: ${(handHoles/totalSites).toFixed(2)} Units</p>
        <h2>Total Work per Man per Day</h2>
        
        <button onclick="window.location.href='calculation.html?trenchConduitPerDayPerMan=${trenchConduitPerDayPerMan.toFixed(2)}&fiberBackbonePerDayPerMan=${fiberBackbonePerDayPerMan}&roadBoresPerDayPerMan=${roadBoresPerDayPerMan}&microDuctPerDayPerMan=${microDuctPerDayPerMan}&preTerminatedFiberPerDayPerMan=${preTerminatedFiberPerDayPerMan}&fiberSplicesPerDayPerMan=${fiberSplicesPerDayPerMan}&splicePedEnclosuresPerDayPerMan=${splicePedEnclosuresPerDayPerMan}&handHolesPerDayPerMan=${handHolesPerDayPerMan}&avgPreTerminatedFiberPerSite=${avgPreTerminatedFiberPerSite}&avgTrenchConduitPerSite=${avgTrenchConduitPerSite}&avgFiberBackbonePerSite=${avgFiberBackbonePerSite}&avgRoadBoresPerSite=${avgRoadBoresPerSite}&avgMicroDuctHomesPerSite=${avgMicroDuctHomesPerSite}&avgFiberSplicesPerSite=${avgFiberSplicesPerSite}&avgSplicePedEnclosuresPerSite=${avgSplicePedEnclosuresPerSite}&avgHandHolesPerSite=${avgHandHolesPerSite}'" id="calculate-construction-time">Calculate Construction Time</button>
        
        <p>1 Man can perform:</p>
        <ul>
            <li>${trenchConduitPerDayPerMan.toFixed(2)} ft of Trenching & Installing Conduit</li>
            <li>${fiberBackbonePerDayPerMan.toFixed(2)} ft of Installing Fiber Backbone</li>Greatm 
            <li>${roadBoresPerDayPerMan.toFixed(2)} Road Bores 25' Per</li>
            <li>${microDuctPerDayPerMan.toFixed(2)} ft of Installing Micro Duct to Homes</li>
            <li>${preTerminatedFiberPerDayPerMan.toFixed(2)} ft of Installing Pre-Terminated Fiber</li>
            <li>${fiberSplicesPerDayPerMan.toFixed(2)} Fiber Splices</li>
            <li>${splicePedEnclosuresPerDayPerMan.toFixed(2)} Splice Ped Enclosures</li>
            <li>${handHolesPerDayPerMan.toFixed(2)} Hand holes 17x30 Vault</li>
        </ul>
    `;

    document.getElementById('results').innerHTML = results;
}

