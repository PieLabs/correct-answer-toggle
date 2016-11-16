import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import muiThemeable from 'material-ui/styles/muiThemeable';
import injectSheet from 'react-jss'
import _ from 'lodash';

require('!style!css!less!./index.less');

const noSelect = () => {
  return {
    '-webkitTouchCcallout': 'none',
    '-webkitUserSelect': 'none',
    '-khtmlUserSelect': 'none',
    '-mozUserSelect': 'none',
    '-msUserSelect': 'none',
    'userSelect': 'none'
  }
}

/**
 * We export the raw unstyled class for testability. For public use please use the default export.
 */
export class _CorespringCorrectAnswerToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggled: props.initialValue
    }
  }

  onClick() {
    this.setState((prevState) => {
      return { toggled: !prevState.toggled };
    }, () => {
      this.props.onToggle(this.state.toggled);
    });
  }

  render() {

    //extract sheet.classes inject by react-jss
    let {sheet: {classes}} = this.props;

    let chooseIcon = () => {
      if (this.state.toggled) {
        return (
          <svg className={classes.svg} key="hideIcon" preserveAspectRatio="xMinYMin meet" viewBox="-283 359 34 35">
            <circle className={classes.hideIconBg} cx="-266" cy="375.9" r="14" />
            <path className={classes.hideIconBg} d="M-280.5,375.9c0-8,6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5S-280.5,383.9-280.5,375.9zM-279.5,375.9c0,7.4,6.1,13.5,13.5,13.5c7.4,0,13.5-6.1,13.5-13.5s-6.1-13.5-13.5-13.5C-273.4,362.4-279.5,368.5-279.5,375.9z" />
            <polygon className={classes.hideIconFg} points="-265.4,383.1 -258.6,377.2 -261.2,374.2 -264.3,376.9 -268.9,368.7 -272.4,370.6         " />
          </svg>
        );
      } else {
        return (
          <svg className={classes.svg} key="showIcon" preserveAspectRatio="xMinYMin meet" viewBox="-129.5 127 34 35">
            <path style={{ fill: "#B3ABA4", "stroke": "#CDC7C2", "strokeWidth": 0.5, "strokeMiterlimit": 10 }} d="M-113.2,159c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-105.2,159-113.2,159z" />
            <circle className={classes.showIconBg} cx="-114.2" cy="143.5" r="14" />
            <path className={classes.showIconBorder} d="M-114.2,158c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-106.2,158-114.2,158zM-114.2,130c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5s13.5-6.1,13.5-13.5S-106.8,130-114.2,130z" />
            <polygon className={classes.showIconFg} points="-114.8,150.7 -121.6,144.8 -119,141.8 -115.9,144.5 -111.3,136.3 -107.8,138.2" />
          </svg>
        );
      }
    }

    return (
      <div className={'svg-holder ' + classes.root} onClick={this.onClick.bind(this)}>
        <div className={classes.inner}>
          <ReactCSSTransitionGroup
            component="div" className="icon-holder"
            transitionName="answer-toggle-icon"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {chooseIcon()}
          </ReactCSSTransitionGroup>
          <div className={classes.label}>{this.state.toggled ? this.props.hideMessage : this.props.showMessage}</div>
        </div>
      </div>
    );
  }
}

_CorespringCorrectAnswerToggle.propTypes = {
  onToggle: React.PropTypes.func,
  initialValue: React.PropTypes.bool,
  hideMessage: React.PropTypes.string,
  showMessage: React.PropTypes.string
};

_CorespringCorrectAnswerToggle.defaultProps = {
  showMessage: 'Show correct answer',
  hideMessage: 'Hide correct answer'
};

/**
 * We wrap toggle with this component which builds the styles the object and passes that in.
 * Theme options: 
 * muiTheme.palette.textColor -> sets the label color
 */
const CompWithTheme = (props, context) => {

  if (!context.muiTheme) {
    throw new Error('missing `muiTheme` - is this rendered within an MuiThemeProvider?');
  }

  let theme = context.muiTheme;

  let styles = {
    label: {
      fontFamily: '\'Roboto\', sans-serif',
      position: 'absolute',
      left: '32px',
      height: '25px',
      lineHeight: '25px',
      verticalAlign: 'middle',
      color: theme.palette.textColor,
      fontSize: '15px',
      fontWeight: 'normal'
    },
    root: _.extend(noSelect(), {
      display: 'inline-block',
      width: '100%',
      height: '25px',
      cursor: 'pointer',
    }),
    inner: {
      width: '200px',
      margin: '0 auto',
      position: 'relative'
    },
    svg: {
      width: '25px',
      float: 'left'
    },
    showIconBg: {
      fill: 'white'
    },
    showIconBorder: {
      fill: '#bce2ff'
    },
    showIconFg: {
      fill: '#1e9cff'
    },
    hideIconBg: {
      fill: '#bce2ff'
    },
    hideIconFg: {
      fill: '#1a9cff'
    }
  };

  let injected = injectSheet(styles)(_CorespringCorrectAnswerToggle);
  return React.createElement(injected, props);
}

CompWithTheme.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default CompWithTheme;
