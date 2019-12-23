function ajax(url, data, success) {
	let req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			console.log(req.responseText);
			success(JSON.parse(req.responseText));
		} else {

		}
	}
	url += '?';
	if ('id' in data) {
		url += `id=${data.id}`;
	} console.log(url);
	req.open('GET', url);
	//req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send();
}

function elm(id) {
	return document.getElementById(id);
}