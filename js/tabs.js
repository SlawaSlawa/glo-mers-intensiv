const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');
const tabsTitles = document.querySelectorAll('.design__title');

for (let btn of tabsHandlerElems) {
	btn.addEventListener('click', () => {
		tabsHandlerElems.forEach((item, index) => {
			item.classList.remove('design-list__item_active');
			tabsTitles[index].classList.add('hidden');
			// if () {
			// 	tabsTitles[index].classList.add('hidden');				
			// }else {
			// 	tabsTitles[index].classList.remove('hidden');
			// }

		});
		btn.classList.add('design-list__item_active');

		tabsContentElems.forEach((content, index) => {
			if (content.dataset.tabsField === btn.dataset.tabsHandler) {
				content.classList.remove('hidden');
				tabsTitles[index].classList.remove('hidden');
			}else {
				content.classList.add('hidden');
			}
		});
	});
}


							
