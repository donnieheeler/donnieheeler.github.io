// Get modal elements 
const modal = document.getElementById("cardModal"); 
const modalTitle = document.getElementById("cardTitle"); 
const modalImage = document.getElementById("cardImage"); 
const modalDetails = document.getElementById("cardDetails"); 
const closeButton = document.querySelector(".close"); 

// Function to open modal with card info 
function openModal(cardTitle, imgSrc, details) {
    modalTitle.textContent = cardTitle; // Set title
    modalImage.src = imgSrc; // Set front image
    modalDetails.textContent = details; // Set description
    modal.style.display = "block";
}

// Close modal when clicking the close button 
closeButton.addEventListener("click", function() { 
  modal.style.display = "none"; }); 

// Close modal when clicking outside of it 
window.addEventListener("click", function(event) { 
  if (event.target === modal) { 
    modal.style.display = "none"; 
  } 
}); 

document.querySelectorAll(".card-grid img").forEach((card, index) => {
    card.addEventListener("click", function() {
        const cardInfo = cardData[index]; // Get the correct card info
        openModal(cardInfo.title, cardInfo.frontImage, cardInfo.details);
    });
});
  
  // Card Data (Add more as needed)
const cardData = [
    {
        title: "Francisco Lindor - 2024 Topps Heritage",
        frontImage: "images/lindor_example.jpg",
        backImage: "images/lindor-back.jpg",
        details: "Francisco Lindor's 2024 Topps Heritage card featuring his time with the Mets."
    },
    {
        title: "Ty Cobb - 1911 T205 Gold Border",
        frontImage: "images/cobb-front.jpg",
        backImage: "images/cobb-back.jpg",
        details: "A rare Ty Cobb T205 Gold Border card from 1911."
    }
];

});
