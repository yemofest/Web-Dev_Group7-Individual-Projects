function convertToFar() {
    const celsiusTemp = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsiusTemp)) {
        const fahrenheitTemp = (celsiusTemp * 9/5) + 32;
        document.getElementById('resultFar').textContent = `Result: ${fahrenheitTemp.toFixed(2)} °F`;
    } else {
        document.getElementById('resultFar').textContent = 'Please enter a valid number.';
    }
}

function convertToCel() {
    const fahrenheitTemp = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheitTemp)) {
        const celsiusTemp = (fahrenheitTemp - 32) * 5/9;
        document.getElementById('resultCel').textContent = `Result: ${celsiusTemp.toFixed(2)} °C`;
    } else {
        document.getElementById('resultCel').textContent = 'Please enter a valid number.';
    }
}
