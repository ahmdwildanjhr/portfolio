
function updateVisitorCount() {
    fetch('update_visitors.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('visitor-count').innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

// Update count on page load
window.onload = updateVisitorCount;
