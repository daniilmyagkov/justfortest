document.addEventListener('DOMContentLoaded', (event) => {
    const mineButton = document.getElementById('mineButton');
    const coinCount = document.getElementById('coinCount');
    const energyCount = document.getElementById('energyCount');
    const earnEnergyButton = document.getElementById('earnEnergyButton');
    let count = 0;
    let energy = 5500;

    mineButton.addEventListener('click', () => {
        if (energy > 0) {
            count++;
            energy--;
            coinCount.textContent = count.toLocaleString();
            energyCount.textContent = `${energy} ⚡`;
        } else {
            alert('No energy left! Please earn more energy.');
        }
    });

    earnEnergyButton.addEventListener('click', () => {
        energy += 100;
        if (energy >= 5500){
            energy = 5500
        }
        energyCount.textContent = `${energy} ⚡`;
    });
});