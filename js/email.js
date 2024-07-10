document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
            document.getElementById("contact-form").reset();
        })
        .catch(error => console.error('Error:', error));
});
