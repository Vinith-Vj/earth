window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// const carousel = document.getElementById('carouselExampleFade');

//     // Function to handle playing/pausing videos
//     function handleVideoPlayback() {
//         const videos = carousel.querySelectorAll('video');

//         videos.forEach(video => {
//             const isActive = video.closest('.carousel-item').classList.contains('active');

//             if (isActive) {
//                 video.currentTime = 0;  // Reset video to start
//                 video.play().catch(error => console.log("Video play failed:", error));
//             } else {
//                 video.pause();
//             }
//         });
//     }

//     // Handle when the carousel slides
//     carousel.addEventListener('slid.bs.carousel', handleVideoPlayback);

//     // Play the first video when the page loads
//     window.addEventListener('load', handleVideoPlayback);