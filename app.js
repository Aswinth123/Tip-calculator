document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const serviceQualitySelect = document.getElementById('serviceQuality');
    const numberOfPeopleInput = document.getElementById('numberOfPeople');
    const calculateButton = document.getElementById('calculateBtn');
    const resultArea = document.getElementById('resultArea');

    if (!billAmountInput || !serviceQualitySelect || !numberOfPeopleInput || !calculateButton || !resultArea) {
        console.error('One or more required elements are missing from the page.');
        return;
    }

    const fmt = (n) => Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    calculateButton.addEventListener('click', (e) => {
        e.preventDefault();

        const billAmount = parseFloat(billAmountInput.value);
        const serviceQuality = parseFloat(serviceQualitySelect.value);
        let numberOfPeople = parseInt(numberOfPeopleInput.value, 10);

        if (isNaN(billAmount) || billAmount <= 0) {
            resultArea.innerHTML = '<div class="total-line"><span>Please enter a valid bill amount.</span></div>';
            resultArea.style.display = 'block';
            billAmountInput.focus();
            return;
        }
        if (isNaN(serviceQuality)) {
            resultArea.innerHTML = '<div class="total-line"><span>Please select service quality.</span></div>';
            resultArea.style.display = 'block';
            serviceQualitySelect.focus();
            return;
        }
        if (isNaN(numberOfPeople) || numberOfPeople < 1) {
            numberOfPeople = 1;
        }

        const tipAmount = billAmount * serviceQuality;
        const totalBill = billAmount + tipAmount;
        const perPerson = totalBill / numberOfPeople;

        resultArea.innerHTML = `
            <div class="total-line"><span>Total Tip:</span><span>$${fmt(tipAmount)}</span></div>
            <div class="total-line"><span>Total Bill:</span><span class="highlight">$${fmt(totalBill)}</span></div>
            <div class="total-line"><span>Bill per Person:</span><span>$${fmt(perPerson)}</span></div>
        `;
        resultArea.style.display = 'block';
    });
});
