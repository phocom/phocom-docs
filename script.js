function ajax(url, data, success) {
	let req = new XMLHttpRequest();
	req.onreadystatechange = function () {
		if (req.readyState == 4) {
			success(JSON.parse(req.responseText));
		} else {

		}
	}
	req.open('POST', url);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	req.send(EncodeHTMLForm(data));
}

function EncodeHTMLForm(data) {
	let params = [];
	for (let name in data) {
		let value = data[name];
		let param = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		params.push(param);
	}
	return params.join('&').replace(/%20/g, '+');
}

function elm(id) {
	return document.getElementById(id);
}