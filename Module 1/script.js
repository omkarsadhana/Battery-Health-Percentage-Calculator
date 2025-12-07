function calculateHealth() {
    const full = parseFloat(document.getElementById("fullCap").value);
    const design = parseFloat(document.getElementById("designCap").value);

    if (!Number.isFinite(full) || !Number.isFinite(design) || design <= 0) {
        alert("Please enter valid numeric values (Design Capacity must be greater than 0).");
        return;
    }

    if (full > design) {
        alert("Full Charge Capacity cannot exceed Design Capacity. Please correct the values.");
        return;
    }

    const health = ((full / design) * 100).toFixed(1);

    document.getElementById("resultPercent").innerText = health + "%";

    let message = "";

    if (health >= 90) message = "Battery Health is Excellent";
    else if (health >= 80) message = "Battery Health is Good";
    else if (health >= 70) message = "Battery Health is Moderate";
    else if (health >= 50) message = "Battery Health is Weak (Consider replacing soon)";
    else message = "Battery Health is Poor (Replace immediately)";

    document.getElementById("resultMessage").innerText = message;

    // MOVE INDICATOR (keep it inside the bar)
    const barWidth = document.querySelector(".bar").offsetWidth;
    const position = Math.max(0, Math.min(barWidth, (parseFloat(health) / 100) * barWidth));
    document.getElementById("indicator").style.left = position - 12 + "px";
}

function resetAll() {
    document.getElementById("fullCap").value = "";
    document.getElementById("designCap").value = "";
    document.getElementById("resultPercent").innerText = "0%";
    document.getElementById("resultMessage").innerText = "Enter values to calculate";
    document.getElementById("indicator").style.left = "0px";
}
