/**
 * Created by sjain on 5/2/2017.
 */

const React = require('react');
const $ = require('jquery');

const InputAddress = React.createClass({


    render: function() {
        return (
            <div>
                <div >
                    <div className="">
                        <div className="form-group">
                            <label id="address-label" htmlFor="address-label"
                                   className=""
                            >{this.props.label}
                            </label>
                            <input
                                type="text"
                                placeholder={this.props.placeHolderText}
                                name={this.props.name}
                                className="form-control"
                                onChange={this.props.onChange}
                            ></input>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
});
module.exports = InputAddress;