// Get modal elements 
const modal = document.getElementById("cardModal"); 
const modalTitle = document.getElementById("cardTitle"); 
const modalImage = document.getElementById("cardImage"); 
const modalDetails = document.getElementById("cardDetails"); 
const closeButton = document.querySelector(".close"); 

// Function to open modal with card info 
function openModal(cardTitle, imgSrc, details) { 
  modalTitle.textContent = cardTitle; 
  modalImage.src = imgSrc;
  modalImage.style.width = "300px";  // Forces width in the modal
  modalImage.style.height = "auto"; // Ensures aspect ratio remains correct 
  modalDetails.textContent = details; 
  modal.style.display = "block"; } 

// Close modal when clicking the close button 
closeButton.addEventListener("click", function() { 
  modal.style.display = "none"; }); 

// Close modal when clicking outside of it 
window.addEventListener("click", function(event) { 
  if (event.target === modal) { 
    modal.style.display = "none"; 
  } 
}); 

// Attach click events to all cards 
document.querySelectorAll(".card-grid img").forEach((card, index) => { 
  card.addEventListener("click", function() { 
    const cardTitle = `Card ${index + 1}`; // Placeholder title 
    const cardDetails = "This is a placeholder description for the card."; 
    openModal(cardTitle, card.src, cardDetails); 
  }); 
});
