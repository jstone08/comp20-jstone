
/*
 * Name: 	lab.js - Messages part 2
 *
 * Author:  Jordan Stone 
 * Date: 	6/20/17
 *
 */
	var request = new XMLHttpRequest();

	
	request.onreadystatechange = function parse() {
		if (request.readyState == 4 && request.status == 200) {
			var data = JSON.parse(request.responseText);
			document.getElementById("messages").innerHTML = '<span class="message">' data[0].content + '</span>  <span class="username">' + data[0].username + '</span> <br /><br />';			
			document.getElementById("messages").innerHTML += '<span class="message">' data[1].content + '</span> <span> class="username">' + data[1].username + '</span> <br /><br />';
		}
	}
	
	request.open("GET", "data.json", true);
	request.send();
