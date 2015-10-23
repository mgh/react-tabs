import React, {PropTypes} from 'react';

module.exports = React.createClass({
  displayName: 'TabList',

  propTypes: {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  },

  render() {
    return (
      <ul className={this.props.className} style={this.props.style} role="tablist">
        {this.props.children}
      </ul>
    );
  }
});
