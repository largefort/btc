let bitcoins = 0;
let minerCount = 0;
let minerCost = 10;

function mine() {
    bitcoins += 1;
    updateUI();
}

function buyMiner() {
    if (bitcoins >= minerCost) {
        bitcoins -= minerCost;
        minerCount++;
        minerCost = Math.ceil(minerCost * 1.1); // Increase cost by 10%
        updateUI();
    } else {
        alert("Not enough bitcoins to buy a miner!");
    }
}

function updateUI() {
    document.getElementById("bitcoin-count").textContent = formatBitcoins(bitcoins);
    document.getElementById("miner-count").textContent = minerCount;
    document.getElementById("miner-cost").textContent = formatBitcoins(minerCost);
}

function formatBitcoins(amount) {
    return amount.toFixed(10) + " BTC"; // Format bitcoins with 10 decimal places and append "BTC"
}

// Update UI initially
updateUI();
