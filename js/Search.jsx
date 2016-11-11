const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { connector } = require('./Store')

const { object, string } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    shows: object,
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {
            this.props.route.shows
            .filter((show) => (
              `${show.title} ${show.description}`
                .toUpperCase()
                .indexOf(this.props.searchTerm.toUpperCase()) >= 0
            ))
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
            ))
          }
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
