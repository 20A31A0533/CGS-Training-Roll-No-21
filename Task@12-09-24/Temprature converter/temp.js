document.getElementById('convert-btn').addEventListener('click', function() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;
    let resultText = '';

    if (isNaN(temperature)) {
        resultText = 'Please enter a valid temperature.';
    } else {
        let convertedTemperature;

        switch (fromUnit) {
            case 'Celsius':
                convertedTemperature = temperature;
                break;
            case 'Fahrenheit':
                convertedTemperature = (temperature - 32) * 5 / 9;
                break;
            case 'Kelvin':
                convertedTemperature = temperature - 273.15; 
                break;
        }

        switch (toUnit) {
            case 'Celsius':
                resultText = `${temperature}° ${fromUnit} = ${convertedTemperature.toFixed(2)}° Celsius`;
                break;
            case 'Fahrenheit':
                let fahrenheit = (convertedTemperature * 9 / 5) + 32;
                resultText = `${temperature}° ${fromUnit} = ${fahrenheit.toFixed(2)}° Fahrenheit`;
                break;
            case 'Kelvin':
                let kelvin = convertedTemperature + 273.15;
                resultText = `${temperature}° ${fromUnit} = ${kelvin.toFixed(2)} K`;
                break;
        }
    }

    document.getElementById('result').innerHTML = resultText;
});
