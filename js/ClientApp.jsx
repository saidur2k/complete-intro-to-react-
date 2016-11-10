const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, hashHistory } = ReactRouter
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path="/search" component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
