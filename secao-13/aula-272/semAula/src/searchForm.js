function searchForm(input) {
	const arrData = JSON.parse(localStorage.getItem('drinks')).drinks;
	const filterRegex = new RegExp(`${input.value}`);

	const drinksFiltered = arrData.filter((item) => {
		return filterRegex.test(item.strDrink);
	});

	return drinksFiltered;
}

export default searchForm;
