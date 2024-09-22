function searchBooks() {
    var query = document.getElementById('search-input').value.toLowerCase();
    var results = [
        { title: 'Karma: A Yogi\'s Guide to Crafting', author: 'Sadguru', descriptionPage: 'b1.html' },
        { title: 'The Accidental President', author: 'A. J. Baime', descriptionPage: 'b2.html' },
        { title: 'Doglapan', author: 'Ashneer Grover', descriptionPage: 'b3.html' },
        { title: 'Naruto: The tests of the Ninja. vol. 1', author: 'Masashi Kishimoto', descriptionPage: 'b4.html' },
        { title: 'Neuromancer', author: 'William Gibson', descriptionPage: 'b5.html' },
        { title: 'It Starts with Us', author: 'Colleen Hoover', descriptionPage: 'b6.html' },
        { title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki and Sharon Lechter', descriptionPage: 'b7.html' },
        { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', descriptionPage: 'b8.html' },
        { title: 'The Siege: The Attack on the Taj', author: 'Adrian Levy and Cathy Scott-Clark', descriptionPage: 'b9.html' },
        { title: 'Life After Life', author: 'Kate Atkinson', descriptionPage: 'b10.html' },
        { title: 'The Sixth Extinction: An Unnatural History', author: 'Elizabeth Kolbert', descriptionPage: 'b11.html' },
        { title: 'The Shock Doctrine', author: 'Naomi Klein', descriptionPage: 'b12.html' },
        { title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', descriptionPage: 'b13.html' },
        { title: 'The Noonday Demon', author: 'Andrew Solomon', descriptionPage: 'b14.html' },
        { title: 'A Visit from The Goon Squad', author: 'Jennifer Egan', descriptionPage: 'b15.html' },
        { title: 'The Emperor of All Maladies', author: 'Siddhartha Mukherjee', descriptionPage: 'b16.html' },


        // Add more books here
    ];

    var filteredResults = results.filter(function(book) {
        return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);
    });

    displayResults(filteredResults);
}

function displayResults(results) {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        var html = '';
        results.forEach(function(book) {
            html += '<div>';
            // Direct link to the description page for each book
            html += '<h3><a href="' + book.descriptionPage + '">' + book.title + '</a></h3>';
            html += '<p>Author: ' + book.author + '</p>';
            html += '</div>';
        });
        resultsContainer.innerHTML = html;
    }
}
