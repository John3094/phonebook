import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
        ></input>
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
