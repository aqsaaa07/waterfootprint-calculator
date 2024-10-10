document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const liters = parseFloat(document.getElementById('liters').value);
    const members = parseInt(document.getElementById('members').value);
    
    if (members === 0) {
        document.getElementById('result').innerText = "Number of family members cannot be zero.";
        return;
    }

    const consumptionPerPerson = liters / members;
    
    let message;
    if (consumptionPerPerson < 135) {
        message = `Each person in your family uses approximately ${consumptionPerPerson.toFixed(2)} liters of water per day, which is below average. You are not wasting too much water.`;
    } else if (consumptionPerPerson === 135) {
        message = `Each person in your family uses exactly ${consumptionPerPerson.toFixed(2)} liters of water per day, which is average. You are not wasting too much water.`;
    } else {
        message = `Each person in your family uses approximately ${consumptionPerPerson.toFixed(2)} liters of water per day, which is above average. You may be using more water than necessary.`;
    }
    
    document.getElementById('result').innerText = message;
});
