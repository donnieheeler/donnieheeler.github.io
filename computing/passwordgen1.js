async function generatePassword() {
    let password = "";
    let wikipediaPages = [];
    let words = [];

    for (let i = 0; i < 3; i++) {
        let response = await fetch("https://en.wikipedia.org/wiki/Special:Random");
        let url = response.url;
        wikipediaPages.push(url);

        let pageResponse = await fetch(url);
        let pageText = await pageResponse.text();
        let wordArray = pageText.replace(/<[^>]*>/g, ' ').split(/\s+/);
        wordArray = wordArray.filter(word => word.length > 2); // Remove short words

        let randomIndex = Math.floor(Math.random() * wordArray.length);
        words.push(wordArray[randomIndex]);
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
