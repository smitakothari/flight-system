/**
 * Created by sjain on 5/2/2017.
 */

const React = require('react');
const ReactDOM = require('react-dom');


const ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    BrowserHistory = ReactRouter.browserHistory;

const test = document.getElementById('test');
const SystemDetails = require('./SystemDetails');


ReactDOM.render((
    <Router history={BrowserHistory}>
    <Route path="/" component={SystemDetails}></Route>
    <Route path="/index.html" component={SystemDetails}></Route>
    </Router>

), test);