// Get modal elements 
const modal = document.getElementById("cardModal"); 
const modalTitle = document.getElementById("cardTitle"); 
const modalImage = document.getElementById("cardImage"); 
const modalDetails = document.getElementById("cardDetails"); 
const closeButton = document.querySelector(".close"); 

  
  // Card Data (Add more as needed)
const cardData = [
    {
        title: "Francisco Lindor - 2024 Topps Heritage",
        frontImage: "images/lindor_example.jpg",
        details: "<strong>Position:</strong> Shortstop <br> <strong>Team:</strong> New York Mets <br> <strong>Year:</strong> 2024"
    },
    {
        title: "Brandon Nimmo - 2019 Archives Snapshots",
        frontImage: "images/bnimmo_asbn.png",
        details: "<strong>Card Set:</strong> T205 Gold Border <br> <strong>Year:</strong> 1911 <br> <strong>Historical Significance:</strong> One of the rarest early baseball cards."
    }
];


// Function to open modal with card info 
function openModal(cardTitle, imgSrc, details) {
    modalDetails.innerHTML = details; // Allows HTML formatting and set title
    modalImage.src = imgSrc; // Set front image
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
