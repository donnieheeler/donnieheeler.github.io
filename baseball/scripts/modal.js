// Get modal elements 
const modal = document.getElementById("cardModal"); 
const modalTitle = document.getElementById("cardTitle"); 
const modalImage = document.getElementById("cardImage"); 
const modalDetails = document.getElementById("cardDetails"); 
const closeButton = document.querySelector(".close"); 
const body = document.body; // Reference to body

// Card Data (Add more as needed)
const cardData = [
    {
        title: "<strong><i>Shoehei Ohtani - 2024 Series 2</i></strong><br><small>☆ Rainbow Foil Parallel</small>",
        frontImage: "images/shohei_500.png",
        details: "<strong>Description:</strong> WIP"
    },
    {
        title: "<strong><i>Brandon Nimmo - 2019 Archives Snapshots</i></strong><br><small>☆ Numbered: 03/50</small><br><small>☆ Autographed</small>",
        frontImage: "images/bnimmo_asbn_improved.png",
        details: "<strong>Description:</strong> This Brandon Nimmo 2019 Archives Snapshots autograph (#03/50) is a standout in my collection. The deep blue border, dramatic sky, and Nimmo’s determined look make it feel like a moment frozen in time—bold, striking, and unforgettable."
    },
    {
        title: "<strong><i>Ichiro - 2024 Stadium Club</i></strong><br><small>☆ Red Parallel</small>",
        frontImage: "images/ichiro_244_improved.png",
        details: "<strong>Description:</strong> This 2024 Topps Stadium Club Red parallel captures Ichiro’s unique style—blazing speed, precision hitting, and pure baseball artistry. He played the game differently, turning every at-bat into something unpredictable and unforgettable."
    },
    {
        title: "<strong><i>Bartolo Colon - T206</i></strong>",
        frontImage: "images/bcolon_t206.PNG",
        details: "<strong>Description:</strong> https://www.youtube.com/watch?v=OVFsq9FQBlc"
    },
    {
        title: "<strong><i>Aaron Judge - T210</i></strong>",
        frontImage: "images/judge_t210.png",
       details: "<strong>Description:</strong> My favorite baseball card."
    },
    {
        title: "<strong><i>Lenny Randle - Hostess Cutout</i></strong><br><small>☆ Autographed</small>",
        frontImage: "images/lrandle_hostess.PNG",
        details: "<strong>Description:</strong> https://www.youtube.com/watch?v=AJPpTXzPxFs"
    },
    {
        title: "<strong><i>R.A. Dickey - T206</i></strong>><br><small>☆ Autographed</small>",
        frontImage: "images/radickey_t206.PNG",
        details: "<strong>Description:</strong> WIP"
    },
    {
        title: "<strong><i>Warren Spahn - 2017 Topps Archive</i></strong>",
        frontImage: "images/wspahan_204.png",
        details: "<strong>Description:</strong> WIP"
    },
    {
        title: "<strong><i>Ty Cobb - 2009 Turkey Red</i></strong>",
        frontImage: "images/tcobb_tr87.png",
        details: "<strong>Description:</strong> WIP"
    }
];

// Function to open modal with card info 
function openModal(cardTitle, imgSrc, details) {
    modalTitle.innerHTML = cardTitle; // Updates the title
    modalImage.src = imgSrc; // Updates the image
    modalDetails.innerHTML = details; // Allows HTML formatting in description
    modal.style.display = "block"; // Shows the modal

    // Disable background scrolling
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
}

// Function to close modal properly
function closeModal() {
    modal.style.display = "none";

    // Re-enable background scrolling
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
}

// Close modal when clicking the close button 
closeButton.addEventListener("click", closeModal);

// Close modal when clicking outside of it (only if clicking directly on the modal background)
window.addEventListener("click", function(event) { 
    if (event.target === modal) { 
        closeModal(); 
    } 
});

// Attach event listeners to images for modal opening
document.querySelectorAll(".card-grid img").forEach((card, index) => {
    card.addEventListener("click", function() {
        const cardInfo = cardData[index]; // Get the correct card info
        openModal(cardInfo.title, cardInfo.frontImage, cardInfo.details);
    });
});
