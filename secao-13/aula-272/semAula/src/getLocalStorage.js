function getLocalStorage(list) {
	const arrData = JSON.parse(localStorage.getItem(list));
	return arrData;
}

export default getLocalStorage;
