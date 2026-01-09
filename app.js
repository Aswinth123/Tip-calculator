document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const serviceQualitySelect = document.getElementById('serviceQuality');
    const numberOfPeopleInput = document.getElementById('numberOfPeople');
    const calculateButton = document.getElementById('calculateBtn');
    const resultArea = document.getElementById('resultArea');

    calculateButton.addEventListener('click', (e) => {
        e.preventDefault();

        const billAmount = parseFloat(billAmountInput.value);
        const serviceQuality = parseFloat(serviceQualitySelect.value);
        let numberOfPeople = parseInt(numberOfPeopleInput.value, 10);

        if (isNaN(billAmount) || billAmount <= 0) {
            resultArea.innerHTML = 'Please enter a valid bill amount.';
            resultArea.style.display = 'block';
            return;
        }
        if (isNaN(serviceQuality)) {
            resultArea.innerHTML = 'Please select service quality.';
            resultArea.style.display = 'block';
            return;
        }
        if (isNaN(numberOfPeople) || numberOfPeople < 1) {
            numberOfPeople = 1;
        }

        const tipAmount = billAmount * serviceQuality;
        const totalBill = billAmount + tipAmount;
        const perPerson = totalBill / numberOfPeople;

        resultArea.innerHTML = `
            <div class="total-line"><span>Total Tip:</span><span>$${tipAmount.toFixed(2)}</span></div>
            <div class="total-line"><span>Total Bill:</span><span>$${totalBill.toFixed(2)}</span></div>
            <div class="total-line"><span>Bill per Person:</span><span>$${perPerson.toFixed(2)}</span></div>
        `;
        resultArea.style.display = 'block';
    });
});
.