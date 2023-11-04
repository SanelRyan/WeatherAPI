const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

const systemEnum = {
	metric: "C",
	imperial: "F",
};

app.use(bodyParser.json());

const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxx"; // Change this key to your own key

app.post("/getWeather", async (req, res) => {
	try {
		const { cities, system } = req.body;

		if (!cities || !Array.isArray(cities) || cities.length === 0) {
			return res.status(400).json({ error: "Invalid input. Provide an array of city names." });
		}

		if (!system || !systemEnum[system]) {
			return res.status(400).json({ error: "Invalid input. Provide a valid measurement system 'metric' or 'imperial'." });
		}

		const weatherData = {};

		for (const city of cities) {
			const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${system}`);

			const temperature = weatherResponse.data.main.temp;
			const temperatureWithUnit = `${temperature}°${systemEnum[system]}`;

			weatherData[city] = temperatureWithUnit;
		}

		res.json({ weather: weatherData });
	} catch (error) {
		res.status(500).json({ error: "An error occurred while fetching weather data." });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
