// Updates the background image and text in the large image container
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");

    // Log the src and alt text for debugging
    console.log(previewPic.src);
    console.log(previewPic.alt);

    // Set the background image to the hovered/focused image's src
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Update the text to the alt text of the hovered/focused image
    imageDiv.innerHTML = previewPic.alt;
}

// Resets the background image and text when mouse leaves or focus is removed
function unDo() {
    const imageDiv = document.getElementById("image");

    // Reset the background image to empty
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text to the original content
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function to randomize the image display in the #image div
function randomizeImage() {
    const images = document.querySelectorAll('.gallery img');
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the large image container with a random image
    upDate(randomImage);

    // Log to confirm the event is triggered
    console.log("Random image displayed");
}

// Add tabindex attribute to all images dynamically using JavaScript
window.onload = function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
        image.addEventListener('mouseover', () => upDate(image));
        image.addEventListener('mouseleave', unDo);
        image.addEventListener('focus', () => upDate(image));
        image.addEventListener('blur', unDo);
        image.setAttribute('tabindex', '0');
    });

    // Log to confirm event listeners are added
    console.log("Event listeners and tabindex added to images");
}
