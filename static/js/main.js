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


const carousel = document.querySelector('#carouselExampleFade');
carousel.addEventListener('slide.bs.carousel', function () {
    // Remove the active animations instantly when slide starts changing
    document.querySelectorAll('.custom-caption').forEach(caption => {
        caption.style.opacity = '0';
    });
});

carousel.addEventListener('slid.bs.carousel', function () {
    // After slide finishes, allow captions to animate again
    const activeItem = document.querySelector('.carousel-item.active .custom-caption');
    if (activeItem) {
        activeItem.style.opacity = '1';
    }
});