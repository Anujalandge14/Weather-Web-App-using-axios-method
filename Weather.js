import { useState } from "react";
import axios from "axios";

function Weather()
{
	const[city, setCity] = useState("");
	const[ans, setAns] = useState("");

		const hCity = (event) => {setCity(event.target.value);}

const find = (event) =>{
			event.preventDefault();
			let a1 = "https://api.openweathermap.org/data/2.5/weather";
			let a2 = "?q=" + city;
			let a3 = "&appid=" + "c6e315d09197cec231495138183954bd";
			let a4 = "&units=" + "metric";
			let urladd = a1+ a2 + a3 + a4;
		axios.get(urladd)
		.then(res => {

		let temp = res.data.main.temp;
	                 let wd = res.data.weather[0].main;
		let msg = "temp = " + temp + " weather = " + wd;
		setAns(msg);
})
	.catch(err => {

	if (err.code == "ERR_BAD_REQUEST")
	setAns("invalid city name");
})

}
return(
<>
<center>
<h1> Weather App </h1>
<form onSubmit={find}>
<input type="text" placeholder="enter city name" onChange={hCity} />
<br/><br/>
<input type="submit" value=" Find" />
</form>
<h1> { ans } </h1>

</center>
</>
);
}
export default Weather;