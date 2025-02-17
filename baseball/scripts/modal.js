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
        title: "<strong><i>Francisco Lindor - 2024 Topps Heritage</i></strong>",
        frontImage: "images/lindor_example.jpg",
        details: "<strong>Description:</strong> Francisco Lindor's 2024 Topps Heritage card featuring his time with the Mets."
    },
    {
        title: "Brandon Nimmo - 2019 Archives Snapshots<br><small>☆ Numbered: 03/50</small><br><small>☆ Autographed</small>",
        frontImage: "images/bnimmo_asbn.png",
        details: "This Brandon Nimmo 2019 Archives Snapshots autograph, numbered 03/50, is a true gem in my collection. The deep blue border perfectly complements the Mets uniform, while the sky in the background gives the card an almost cinematic feel. Nimmo’s focused, determined expression adds to the intensity, making it more than just a card—it’s a moment frozen in time. The bold, on-card autograph seals the deal, making this a piece I’ll always appreciate."
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
