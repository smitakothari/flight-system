/**
 * Created by sjain on 5/2/2017.
 */
var React = require('react');
const InputAddress = require('./InputAddress');

const SystemDetails = React.createClass({
    render:function() {
        return (
            <div>
                <InputAddress/>
            </div>
        )
    }
    });
module.exports = SystemDetails;