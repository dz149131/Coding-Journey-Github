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
