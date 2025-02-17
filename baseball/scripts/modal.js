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
        title: "Brandon Nimmo - 2019 Archives Snapshots",
        frontImage: "images/bnimmo_asbn.png",
        details: "<strong>Card Set:</strong> Auto"
    }
];

// Function to open modal with card info 
function openModal(cardTitle, imgSrc, details) {
    modalTitle.innerHTML = cardTitle; // Fix: Now updates the title
    modalImage.src = imgSrc; //  Updates the image
    modalDetails.innerHTML = details; // Allows HTML formatting in description
    modal.style.display = "block"; // Shows the modal

    // **Disable background scrolling**
    body.classList.add("modal-open");
}

// Function to close modal properly
function closeModal() {
    modal.style.display = "none";
    body.classList.remove("modal-open"); // Re-enable scrolling when modal closes
}

// Close modal when clicking the close button 
closeButton.addEventListener("click", closeModal);

// Close modal when clicking outside of it 
window.addEventListener("click", function(event) { 
  if (event.target === modal) { 
    closeModal(); // Fix: Calls proper close function
  } 
});

// Attach event listeners to images for modal opening
document.querySelectorAll(".card-grid img").forEach((card, index) => {
    card.addEventListener("click", function() {
        const cardInfo = cardData[index]; // Get the correct card info
        openModal(cardInfo.title, cardInfo.frontImage, cardInfo.details);
    });
});
