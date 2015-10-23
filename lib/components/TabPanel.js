import React, {PropTypes} from 'react';

module.exports = React.createClass({
  displayName: 'TabPanel',

  propTypes: {
    selected: PropTypes.bool,
    id: PropTypes.string,
    tabId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string
    ])
  },

  contextTypes: {
    forceRenderTabPanel: PropTypes.bool
  },

  getDefaultProps() {
    return {
      selected: false,
      id: null,
      tabId: null
    };
  },

  render() {
    const children = (this.context.forceRenderTabPanel || this.props.selected) ?
      this.props.children :
      null;

    let style = {};
    if (this.props.style) {
      for (let key in this.props.style) {
        style[key] = this.props.style[key];
      }
    }

    if (!this.props.selected) { style.display = 'none'; }

    return (
      <div
        role="tabpanel"
        id={this.props.id}
        aria-labeledby={this.props.tabId}
        style={style}
      >
        {children}
      </div>
    );
  }
});
