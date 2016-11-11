const React = require('react')
const { Link } = require('react-router')
const { hashHistory } = require('react-router')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input
            className='search'
            type='text'
            placeholder='Search'
            value={this.props.searchTerm}
            onChange={this.handleSearchTermEvent}
          />
        </form>
        <Link to='/search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  setSearchTerm: React.Component.func,
  searchTerm: React.Component.string
}
module.exports = Landing
