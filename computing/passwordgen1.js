async function generatePassword() {
    let password = "";
    let wikipediaPages = [];
    let words = [];
    let wordSelections = [];

    for (let i = 0; i < 3; i++) {
        let response = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
        let data = await response.json();

        let title = data.title;
        let url = "https://en.wikipedia.org/wiki/" + encodeURIComponent(title);
        wikipediaPages.push({ title, url });

        let wordArray = data.extract.split(/\s+/).filter(word => word.length > 2); // Remove short words
        
        if (wordArray.length > 0) {
            let randomIndex = Math.floor(Math.random() * wordArray.length);
            let selectedWord = wordArray[randomIndex];

            words.push(selectedWord);
            wordSelections.push({ title, url, index: randomIndex + 1, word: selectedWord }); // +1 to make index human-readable
        } else {
            words.push("FallbackWord");
            wordSelections.push({ title, url, index: 1, word: "FallbackWord" });
        }
    }

    let digits = Math.floor(1000 + Math.random() * 9000); // 4 random digits
    let specialChars = "!@#$%^&*";
    let specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    password = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("") + digits + specialChar;

    document.getElementById("output").innerHTML =
        wordSelections.map(selection => 
            `<p><strong><a href="${selection.url}" target="_blank">${selection.title}</a></strong> - ${selection.index}th word - "<strong>${selection.word}</strong>"</p>`
        ).join('') +
        `<p><strong>Numbers generated:</strong> ${digits}</p>` +
        `<p><strong>Symbol Generated:</strong> ${specialChar}</p>` +
        `<p><strong>Password:</strong> ${password}</p>`;
}
