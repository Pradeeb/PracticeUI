console.log("good")

// Get references to the button and the sidebar
var button = document.getElementById('menu_btn');
var sidebar = document.getElementById('side_bar_id');

// Add event listener to the button
button.addEventListener('click', function() {
    // Toggle the 'clicked' class on the sidebar
    sidebar.classList.toggle('clicked');
});