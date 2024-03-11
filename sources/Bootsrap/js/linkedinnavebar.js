document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search_bar');

    searchBar.addEventListener('focus', function() {
        searchBar.classList.add('expanded');
    });

    searchBar.addEventListener('blur', function() {
        searchBar.classList.remove('expanded');
        });
});