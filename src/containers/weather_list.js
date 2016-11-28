import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name

    return (
      <tr>
        <td>
          { name }
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table
        className="table table-hover"
        key={ name }
        >
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  // weather referring to the key weather in the combineReducers (index.js)
  return { weather: state.weather }
}

// ES6 OPTIONAL SYNTAX:
// function mapStateToProps({ weather }) {
//   return { weather }
// }

export default connect (mapStateToProps)(WeatherList)
