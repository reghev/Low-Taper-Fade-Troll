// Get the search query from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

// Define the keywords to look for
const keywords = ["low", "taper", "fade", "massive"];

// Check if query exists and contains any of the keywords
if (query && keywords.some(keyword => query.toLowerCase().includes(keyword))) {
    // Create the image element
    const img = document.createElement('img');
    img.src = 'https://i.scdn.co/image/ab67616d0000b273105a12301bbc5664ec5a9d0b'; // Replace with your image URL
    
    // Style the image to cover the entire screen
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100vw';
    img.style.height = '100vh';
    img.style.zIndex = '9999';
    img.style.objectFit = 'cover'; // Make sure the image covers the screen properly
    img.style.pointerEvents = 'none'; // This ensures you can still interact with the page (click links, etc.)
    
    // Append the image to the body of the page
    document.body.appendChild(img);
}
