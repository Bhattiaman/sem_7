const audioElement = document.getElementById("audio-element");
const trackList = document.getElementById("track-list");
const bookTitle = document.getElementById("book-title");
const author = document.getElementById("author");
const coverImage = document.getElementById("cover-image");

// Load the first track
audioElement.src = trackList.firstElementChild.getAttribute("data-src");
audioElement.load();
bookTitle.innerText = "Book Title";
author.innerText = "Author: Author Name";
coverImage.src = "book-cover.jpg";

// Play a track when clicked
trackList.addEventListener("click", (event) => {
    const track = event.target;
    if (track.tagName === "LI") {
        audioElement.src = track.getAttribute("data-src");
        audioElement.load();
        audioElement.play();
    }
});
