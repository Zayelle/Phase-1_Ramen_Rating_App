// Sample ramen data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Gyukotsu Ramen", restaurant: "Menya", image: "images/gyukotsu.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg" },
    { id: 4, name: "Nirvana", restaurant: "Ramen-ya", image: "images/nirvana.jpg" }
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

        // Append image to the ramen-menu div
        ramenMenu.appendChild(img);
    });
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", displayRamens);