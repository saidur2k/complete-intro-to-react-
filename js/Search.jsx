const React = require('react')
const data = require('../public/data.json')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className="header">
          <h1 className="brand">svideo</h1>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={this.state.searchTerm}
            onChange={this.handleSearchTermEvent}
          />
        </header>
        <div className='shows'>
          {data.shows
            .filter((show) => (
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            ))
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
            ))}
        </div>
      </div>
    )
  }
})

module.exports = Search