
async function fetchRaceInfo(race) {
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${race}`);
    const data = await response.json();
    return {
        name: data.name,
        age: data.age,
        alignment: data.alignment,
        size: data.size,
        sizeDescription: data.size_description,
        languages: data.languages.map(lang => lang.name).join(', '),
        languageDescription: data.language_desc
    };
}

async function fetchClassInfo(charClass) {
    const response = await fetch(`https://www.dnd5eapi.co/api/classes/${charClass}`);
    const data = await response.json();
    return {
        name: data.name,
        hitDie: data.hit_die,
        proficiencies: data.proficiencies.map(prof => prof.name).join(', '),
        savingThrows: data.saving_throws.map(save => save.name).join(', ')
    };
}

async function generateCharacter() {
    const raceSelect = document.getElementById('race-select');
    const classSelect = document.getElementById('class-select');
    const selectedRace = raceSelect.value;
    const selectedClass = classSelect.value;
    const raceInfo = await fetchRaceInfo(selectedRace);
    const classInfo = await fetchClassInfo(selectedClass);
    displayCharacterInfo(raceInfo, classInfo);
}

function displayCharacterInfo(raceInfo, classInfo) {
    const characterDiv = document.getElementById('character-info');
    characterDiv.innerHTML = `
        <h2>${raceInfo.name} ${classInfo.name}</h2>
        <p><strong>Age:</strong> ${raceInfo.age}</p>
        <p><strong>Alignment:</strong> ${raceInfo.alignment}</p>
        <p><strong>Size:</strong> ${raceInfo.size}</p>
        <p><strong>Size Description:</strong> ${raceInfo.sizeDescription}</p>
        <p><strong>Languages:</strong> ${raceInfo.languages}</p>
        <p><strong>Language Description:</strong> ${raceInfo.languageDescription}</p>
        <p><strong>Hit Die:</strong> d${classInfo.hitDie}</p>
        <p><strong>Proficiencies:</strong> ${classInfo.proficiencies}</p>
        <p><strong>Saving Throws:</strong> ${classInfo.savingThrows}</p>
    `;
}