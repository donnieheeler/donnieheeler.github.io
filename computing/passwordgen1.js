async function generatePassword() {
    let password = "";
    let wikipediaPages = [];
    let words = [];

    for (let i = 0; i < 3; i++) {
        let iframe = document.createElement("iframe");
        iframe.style.display = "none"; // Hide the iframe
        document.body.appendChild(iframe);

        let loaded = new Promise((resolve, reject) => {
            iframe.onload = () => resolve(iframe);
            iframe.onerror = reject;
        });

        iframe.src = "https://en.wikipedia.org/wiki/Special:Random";
        await loaded;

        let textContent = iframe.contentDocument.body.innerText;
        document.body.removeChild(iframe); // Remove after loading

        let wordArray = textContent.split(/\s+/).filter(word => word.length > 2);
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        words.push(wordArray[randomIndex]);

        wikipediaPages.push(iframe.src);
    }

    let digits = Math.floor(1000 + Math.random() * 9000);
    let specialChars = "!@#$%^&*";
    let specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];

    password = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("") + digits + specialChar;

    document.getElementById("output").innerHTML =
        `<p><strong>Generated Password:</strong> ${password}</p>` +
        `<p><strong>Wikipedia Pages Used:</strong></p>` +
        wikipediaPages.map(url => `<p><a href='${url}' target='_blank'>${url}</a></p>`).join('');
}

