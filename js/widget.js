var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		var employees = JSON.parse(xhr.responseText);
		var statusHtml = '<ul class="lorem">';
			for (var i = 0; i < employees.length; i++) {
				if (employees[i].inoffice === true) {
					statusHtml += '<li class="in">';
				} else {
					statusHtml += '<li class="out">';
				}

				statusHtml += employees[i].name;
				statusHtml += '</li>';
			}
			statusHtml += '</ul>';
			document.getElementById('listItem').innerHTML = statusHtml;
	}
};
xhr.open('GET','practice-2/data/data.json');
xhr.send();