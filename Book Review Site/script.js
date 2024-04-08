document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('review-form');
    const bookList = document.getElementById('book-list');

    // Add event listener for form submission
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const bookTitle = document.getElementById('book-title').value;
        const author = document.getElementById('author').value;
        const review = document.getElementById('review').value;

        // Create a new book card
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${bookTitle}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p><strong>Review:</strong> ${review}</p>
        `;

        // Append the new book card to the book list
        bookList.appendChild(bookCard);

        // Reset the form fields
        reviewForm.reset();
    });
});
