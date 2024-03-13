import React from 'react';
import authService from './api-authorization/AuthorizeService'

export default function FetchData()
{
    // the second parameter is a dependancy array
    // empty array means the function will only run once
    React.useEffect(() => {
        populateWeatherData();
    }, [])

    const [state, setState] = React.useState({ forecasts: [], loading: true })

    let contents = state.loading
      ? <p><em>Loading...</em></p>
      : renderForecastsTable(state.forecasts);

    return (
        <>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </>
    );

    function renderForecastsTable(forecasts) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    async function populateWeatherData() {
        const token = await authService.getAccessToken();
        const response = await fetch('weatherforecast', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setState({ forecasts: data, loading: false });
    }
}
