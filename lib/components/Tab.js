import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

function syncNodeAttributes(node, props) {
  if (props.selected) {
    node.setAttribute('tabindex', 0);
    node.setAttribute('selected', 'selected');
    if (props.focus) {
      node.focus();
    }
  } else {
    node.removeAttribute('tabindex');
    node.removeAttribute('selected');
  }
}

module.exports = React.createClass({
  displayName: 'Tab',

  propTypes: {
    id: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    panelId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string
    ])
  },

  getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null
    };
  },

  componentDidMount() {
    syncNodeAttributes(ReactDOM.findDOMNode(this), this.props);
  },

  componentDidUpdate() {
    syncNodeAttributes(ReactDOM.findDOMNode(this), this.props);
  },

  render() {
    return (
      <li
        role="tab"
        id={this.props.id}
        className={this.props.className}
        style={this.props.style}
        aria-selected={this.props.selected ? 'true' : 'false'}
        aria-expanded={this.props.selected ? 'true' : 'false'}
        aria-disabled={this.props.disabled ? 'true' : 'false'}
        aria-controls={this.props.panelId}
      >
        {this.props.children}
      </li>
    );
  }
});
