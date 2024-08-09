document.getElementById('searchBtn').addEventListener('click', async function() {
    const digimonName = document.getElementById('digimonName').value.trim();
    const resultDiv = document.getElementById('result');

    if (digimonName === '') {
        resultDiv.innerHTML = '<p>Please enter a Digimon name.</p>';
        return;
    }

    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`);
        const data = await response.json();

        if (data.length === 0) {
            resultDiv.innerHTML = '<p>No Digimon found with that name.</p>';
        } else {
            const digimon = data[0];
            resultDiv.innerHTML = `
                <h2>${digimon.name}</h2>
                <img src="${digimon.img}" alt="${digimon.name}">
                <p>Level: ${digimon.level}</p>
            `;
        }
    } catch (error) {
        resultDiv.innerHTML = '<p>Error fetching Digimon data. Please try again later.</p>';
    }
});
