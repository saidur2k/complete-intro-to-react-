const React = require('react')
const { Link } = require('react-router')
const { bool, string, func } = React.PropTypes
const { connector } = require('./Store')

const Header = React.createClass({
  propTypes: {
    showSearch: bool,
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={this.props.searchTerm}
          onChange={this.handleSearchTermEvent}
        />
        )
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to="/search" className="brand-link">Back</Link>
        </h2>
      )
    }
    return (
      <header className="header">
        <h1 className="brand">
          <Link to="/" className="brand-link">svideo</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
