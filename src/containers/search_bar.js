import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }

    // Callback function that references a function with "this" needs to bind to the context
    this.onInputChange = this.onInputChange.bind(this)
  }

  // all DOM event handlers (onChange, onClick, onHover...) come along with the (event) object.
  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  // To prevent the form to make a default post request and refresh the page when clicking the search button
  // Using form elements for inputs is easier because you don't have to setup an event handler for when the user press the button or press the enter key
  onFormSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form
        onSubmit={ this.onFormSubmit }
        className="input-group"
      >
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={ this.state.term }
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
