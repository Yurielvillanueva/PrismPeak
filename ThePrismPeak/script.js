document.addEventListener("DOMContentLoaded", function() {
    // Simulate a loading process
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 40000); // 3 seconds for demonstration
});
