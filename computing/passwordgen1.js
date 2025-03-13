async function generatePassword() {
    let password = "";
    let wikipediaPages = [];
    let words = [];

    for (let i = 0; i < 3; i++) {
        let response = await fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary");
        let data = await response.json();

        let url = "https://en.wikipedia.org/wiki/" + encodeURIComponent(data.title);
        wikipediaPages.push(url);

        let wordArray = data.extract.split(/\s+/).filter(word => word.length > 2); // Remove short words
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        
        if (wordArray.length > 0) {
            words.push(wordArray[randomIndex]);
        } else {
            words.push("FallbackWord"); // Avoid empty words
        }
    }

    let digits = Math.floor(1000 + Math.random() * 9000); // 4 random digits
    let specialChars = "!@#$%^&*";
    let specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    password = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("") + digits + specialChar;

    document.getElementById("output").innerHTML =
        `<p><strong>Generated Password:</strong> ${password}</p>` +
        `<p><strong>Wikipedia Pages Used:</strong></p>` +
        wikipediaPages.map(url => `<p><a href='${url}' target='_blank'>${url}</a></p>`).join('');
}
