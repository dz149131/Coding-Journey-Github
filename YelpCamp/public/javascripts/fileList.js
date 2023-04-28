(function () {
	const input = document.querySelector('#image');
	const fileListContainer = document.querySelector('#fileList');

	input.addEventListener('change', () => {
		fileListContainer.innerHTML = ''; // Clear previous file list

		const files = input.files;
		if (files.length > 0) {
			for (let i = 0; i < files.length; i++) {
				const fileListItem = document.createElement('div');
				fileListItem.textContent = files[i].name;
				fileListContainer.appendChild(fileListItem);
			}
			fileListContainer.classList.remove('text-danger');
			fileListContainer.classList.add('text-primary-emphasis');
		} else {
			fileListContainer.textContent = 'No files selected';
			fileListContainer.classList.remove('text-primary-emphasis');
			fileListContainer.classList.add('text-danger');
		}
	});
})();
// listens for changes to an input field with the ID "image". When the user selects one or more files using this input field, the function creates a new div element for each file and displays the file name inside that div element. These div elements are added to a container with the ID "fileList".

//If no files are selected, the function displays the message "No files selected" in the container instead. When there are files, the function adds a CSS class "text-primary-emphasis" to the container to change the color of the file names to blue. If there are no files, the function adds the CSS class "text-danger" to the container to change the color of the "No files selected" message to red.
