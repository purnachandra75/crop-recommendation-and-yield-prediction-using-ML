document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-container img');
    var index = 0;

    function showImage(index) {
        images.forEach(function(img, i) {
            if (i === index) {
                img.style.display = 'block'; // Set display property directly
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
    }

    function nextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage(index);
    }

    showImage(0); // Display the first image initially
    setInterval(nextImage, 1000); // Change image every 3 seconds (adjust as needed)
});
