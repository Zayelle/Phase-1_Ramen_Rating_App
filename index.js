document.addEventListener("DOMContentLoaded", main);

let selectedRamen = null; // Stores currently selected ramen
function main() {
    displayRamens();
    addSubmitListener();
    addEditListener();

    // Automatically display details of the first ramen (if available)
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }   
}

// Sample ramen data
const ramens = [
    {  name: "Shoyu Ramen",
       restaurant: "Ichiran",
       image: "images/shoyu.jpg",
       rating: 5,
       comment: "Delicious!" 
    },

    {  name: "Gyukotsu Ramen",
       restaurant: "Menya",
       image: "images/gyukotsu.jpg",
       rating: 4, 
       comment: "Very flavorful!" 
    },

    { name: "Naruto Ramen",
      restaurant: "Ramen-ya", 
      image: "images/naruto.jpg",
      rating: 6,
      comment:"Love the broth!"
    },

    {  name: "Nirvana",
       restaurant: "Ramen-ya", 
       image: "images/nirvana.jpg",
       rating: 8,
       comment:"Excellent!"
    },
 ];

 // Function to display ramen images
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");

    // Clear existing content
    ramenMenu.innerHTML = "";

    // Loop through the array and create img elements
    ramens.forEach((ramen) => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-image"); // Optional: Add a CSS class
        img.style.width = "200px"; // Adjust size if needed
        img.style.margin = "5px";
        img.style.cursor = "pointer";

    // Add click event to display ramen details
        img.addEventListener("click", () => handleClick(ramen));

    // Append image to the ramen-menu div
        ramenMenu.appendChild(img);
    });
}

// Function to display ramen details
function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("detail-name").textContent = ramen.name;
    document.getElementById("detail-restaurant").textContent = ramen.restaurant;
    document.getElementById("detail-rating").textContent = ramen.rating;
    document.getElementById("detail-comment").textContent = ramen.comment;
    
    // Pre-fill the edit form with current rating & comment
    document.getElementById("new-rating").value = ramen.rating;
    document.getElementById("new-comment").value = ramen.comment;
}

function addEditListener() {
    const editForm = document.getElementById("edit-ramen");
    editForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        if (!selectedRamen) return; { // Ensure a ramen is selected
            // Get updated values
            selectedRamen.rating = document.getElementById("new-rating").value;
            selectedRamen.comment = document.getElementById("new-comment").value;

            // Update displayed details
            document.getElementById("detail-rating").textContent = selectedRamen.rating;
            document.getElementById("detail-comment").textContent = selectedRamen.comment;
        }
    });
}
function addSubmitListener() {
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Gets user input values
        const newRamen = {
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        createRamenImage(newRamen); // Add new Ramen to the DOM

        form.reset(); // Optional: Clear form inputs after submission
    });
}

