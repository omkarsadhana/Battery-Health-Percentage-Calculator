function calculateHealth() {
    const full = parseFloat(document.getElementById("fullCap").value);
    const design = parseFloat(document.getElementById("designCap").value);

    if (!Number.isFinite(full) || !Number.isFinite(design) || design <= 0) {
        alert("Please enter valid numeric values (Original Capacity must be greater than 0).");
        return;
    }

    if (full > design) {
        alert("Current Capacity cannot exceed Original Capacity. Please correct the values.");
        return;
    }

    const health = ((full / design) * 100).toFixed(1);

    document.getElementById("resultPercent").innerText = health + "%";

    let message = "";
    const hVal = parseFloat(health);
    if (hVal >= 90) message = "Battery Health is Excellent";
    else if (hVal >= 80) message = "Battery Health is Good";
    else if (hVal >= 70) message = "Battery Health is Moderate";
    else if (hVal >= 50) message = "Battery Health is Weak (Consider replacing soon)";
    else message = "Battery Health is Poor (Replace immediately)";

    document.getElementById("resultMessage").innerText = message;

    // MOVE INDICATOR (clamped inside the bar)
    const bar = document.getElementById("healthBar") || document.querySelector(".bar");
    const barRect = bar.getBoundingClientRect();
    const barWidth = barRect.width;
    const position = Math.max(0, Math.min(barWidth, (hVal / 100) * barWidth));
    // set left relative to bar-wrap (bar is static, indicator positioned absolute on .bar-wrap)
    const wrap = bar.parentElement;
    const wrapRect = wrap.getBoundingClientRect();
    const leftWithinWrap = (barRect.left - wrapRect.left) + position;
    document.getElementById("indicator").style.left = leftWithinWrap + "px";
}

function resetAll() {
    document.getElementById("fullCap").value = "";
    document.getElementById("designCap").value = "";
    document.getElementById("resultPercent").innerText = "0%";
    document.getElementById("resultMessage").innerText = "Enter values to calculate";
    document.getElementById("indicator").style.left = "0px";
}