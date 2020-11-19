async function getData(url) {
	const data = await fetch(url, { method: 'GET' });

	if (data.ok) {
		const response = await data.json();
		const apiJson = JSON.stringify(response);

		localStorage.setItem('drinks', apiJson);
	}

	return data;
}

export default getData;
