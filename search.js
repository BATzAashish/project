const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const query = searchInput.value.trim(); // Get the search query
    if (query !== '') {
        // Here, you can implement your search functionality
        // For simplicity, let's just display the query as the search result
        searchResults.innerHTML = `<p>Search results for: <strong>${query}</strong></p>`;
    } else {
        searchResults.innerHTML = ''; // Clear search results if the query is empty
    }
});
