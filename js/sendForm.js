const form = document.querySelector('.form-test-drive');
const URL = 'https://jsonplaceholder.typicode.com';

form.addEventListener('submit', evt => {
	evt.preventDefault();
	const data = {};

	for (let {name, value} of form.elements) {
		if (name) {
			data[name] = value;
		}
	}

	fetch(URL + '/posts', {
		method: 'POST',
		body: JSON.stringify(data)
	})
		.then(response => {
			if (response.status === 200 || response.status === 201) {
				return response.json();
			}else {
				throw new Error();
			}
		})
		.then(newId => {
			console.log(newId);
			alert('Данные успешно отправлены!!!');
			form.reset();
		})
		.catch(error => alert('При отправке данных произошла ошибка! Повторите попытку позже!'));
});



