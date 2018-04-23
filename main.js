var inp = document.getElementById("input");
var btn = document.getElementById("getWeather")
var citiesName = [];
var histList = document.getElementById("histlist");
var temp = document.getElementById("temp")

    var link = `http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=59f1b47ae1fc581851e1bb0af1a3613c`



btn.onclick = function(){
	citiesName.push(inp.value)
	console.log(citiesName);
	var li = document.createElement("li");
	li.innerHTML = inp.value;
	histList.appendChild(li);
    var link = `http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=59f1b47ae1fc581851e1bb0af1a3613c`;
    console.log(link);
    li.onclick = getTemp;
    inp.value= "";
    getWeather(link);

    
}

function getTemp(e){
    var link = `http://api.openweathermap.org/data/2.5/weather?q=${e.target.innerHTML}&appid=59f1b47ae1fc581851e1bb0af1a3613c`
	console.log(e.target.innerHTML + " "+ link + " "+ " HELLO")
	getWeather(link);
}

function getWeather(uri){
	var req = new XMLHttpRequest();
	req.onload = function(){
		console.log(req.response.main.temp)
		temp.innerHTML = Math.round(req.response.main.temp -273 );
	}
	req.onerror = function(){
		console.log(req.statusText)
	}
	req.open("GET", uri, true);
	req.responseType= 'json';
	req.send();
}








