# Weather Fetcher Application

## Description

The Weather Fetcher Application is a Node.js-based web service that allows you to retrieve weather information for multiple cities using either the metric or imperial measurement system.

## Prerequisites

Before running this application, you need to make sure you have Node.js installed on your system. You also need an API key from OpenWeatherMap to access weather data. You can sign up and get an API key at [OpenWeatherMap API](https://openweathermap.org/api).

## Installation

1. Clone or download the repository to your local machine.

2. Install the required Node.js modules by running the following command:

    ```bash
    npm install
    ```

3. Replace `"xxxxxxxxxxxxxxxxxxxxxxxxx"` in the code with your OpenWeatherMap API key.

## Usage

1. Start the application by running the following command:

    ```bash
    node app.js
    ```

    The application will run on the default port 3000. You can change the port by modifying the `port` variable in the code or by setting the `PORT` environment variable.

2. To fetch weather data for multiple cities, make a POST request to the `/getWeather` endpoint. You can provide the following parameters in the request body:

    - `cities`: An array of city names for which you want to fetch weather data.
    - `system`: The measurement system to use, either "metric" (Celsius) or "imperial" (Fahrenheit).

    Example Request:

    ```json
    {
    	"cities": ["London", "New York", "Tokyo"],
    	"system": "metric"
    }
    ```

3. The application will return a JSON response containing the weather data for the specified cities. Each city's temperature will be provided in the chosen measurement system.

    Example Response:

    ```json
    {
    	"weather": {
    		"London": "20°C",
    		"New York": "68°F",
    		"Tokyo": "25°C"
    	}
    }
    ```

## Error Handling

-   If the request contains invalid or missing data, the application will respond with a 400 Bad Request status and an error message.
-   If there is an error while fetching weather data from the OpenWeatherMap API, the application will respond with a 500 Internal Server Error status and an error message.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README should help users understand how to set up, run, and use your Weather Fetcher Application. You can also add more details or instructions if necessary.
