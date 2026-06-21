//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function(e) {
	// Grab input elements
	const titleInput = document.getElementById('title');
	const authorInput = document.getElementById('author');
	const isbnInput = document.getElementById('isbn');

	const title = titleInput.value.trim();
	const author = authorInput.value.trim();
	const isbn = isbnInput.value.trim();

	// Basic check to ensure inputs are not empty
	if (title === '' || author === '' || isbn === '') {
		alert('Please fill in all fields');
		return;
	}

	// Get table body reference
	const bookList = document.getElementById('book-list');

	// Create a new table row element
	const row = document.createElement('tr');

	// Construct row columns including the delete button
	row.innerHTML = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">X</button></td>
	`;

	// Add event listener directly to the delete button in this row
	row.querySelector('.delete').addEventListener('click', function() {
		row.remove();
	});

	// Append the fully constructed row to the table body
	bookList.appendChild(row);

	// Clear the form fields for the next entry
	titleInput.value = '';
	authorInput.value = '';
	isbnInput.value = '';
});