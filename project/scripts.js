
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
    const race = raceSelect.value;
    const classValue = classSelect.value;
    const raceInfo = await fetchRaceInfo(race);
    const classInfo = await fetchClassInfo(classValue);

    const abilityScores = [];
    for (let i=0; i < 6; i++) {
        abilityScores.push(Math.floor(Math.random() * 18) + 1);
    }
    
    const abilityModifiers = abilityScores.map(score => Math.floor((score - 10) / 2));

    let characterName = prompt('Enter a name for your character (Leave blank for random name):');
    if (!characterName) {
        characterName = getRandomNameByRace(race);
    }

    const characterInfoHTML = `
        <h2>${characterName} the ${classInfo.name}</h2>
        <p><strong>Race:</strong> ${raceInfo.name}</p>
        <p><strong>Class:</strong> ${classInfo.name}</p>
        <p><strong>Ability Scores:</strong> ${abilityScores.join(', ')}</p>
        <p><strong>Ability Modifiers:</strong> ${abilityModifiers.join(', ')}</p>
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
    
        const characterInfoContainer = document.getElementById('character-info');
        characterInfoContainer.innerHTML = characterInfoHTML;
}

function getRandomNameByRace(race) {
    const raceNames = {
        dragonborn: ['Draxor', 'Zara', 'Sethra', 'Vex'],
        dwarf: ['Thorin', 'Gimli', 'Durin', 'Balin'],
        elf: ['Legolas', 'Arwen', 'Galadriel', 'Elrond'],
        gnome: ['Glim', 'Nix', 'Fizzel', 'Bix'],
        'half-elf': ['Eldrin', 'Aria', 'Alara', 'Kael'],
        'half-orc': ['Grog', 'Thokk', 'Zanar', 'Ghurak'],
        halfling: ['Frodo', 'Samwise', 'Merry', 'Pippin'],
        human: ['Arthur', 'Eleanor', 'Alistair', 'Isabella'],
        tiefling: ['Moloch', 'Lilith', 'Azazel', 'Zephyr']
        // Add more here
    };

    const names = raceNames[race];
    return names[Math.floor(Math.random() * names.length)];
}