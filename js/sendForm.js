const form = document.querySelector('.form-test-drive');
const URL = 'https://jsonplaceholder.typicode.com';

const validateForm = (data) => {
	let flag = 0;
	let count = 0;

	for (value in data) {
		const input = data[value];
		count++;

		if (input.trim() !== '') {
			flag++;
		}
	}

	if (flag !== count) {
		alert('Проверьте правильность данных у формы!!!');
	}else {
		sendForm(data);
	}
};

const sendForm = (data) => {
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
};

form.addEventListener('submit', evt => {
	evt.preventDefault();
	const data = {};

	for (let {name, value} of form.elements) {
		if (name) {
			data[name] = value;
		}
	}
	
	validateForm(data);

	
});



