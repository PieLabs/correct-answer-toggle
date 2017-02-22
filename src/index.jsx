import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Expander from './expander';
import CorrectResponseIcon from 'corespring-icon/correct-response-icon';

require('./index.less');

/**
 * We export the raw unstyled class for testability. For public use please use the default export.
 */
export default class CorespringCorrectAnswerToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    }
  }

  onClick() {
    this.props.onToggle(!this.props.toggled);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  render() {

    let chooseIcon = () => {
      if (this.props.toggled) {
        return <CorrectResponseIcon open={true} key="correct-open"/>
      } else {
        return <CorrectResponseIcon open={false} key="correct-closed"/>
      }
    }

    return (
      <div className={`correct-answer-toggle ${this.props.className || ''}`}>
        <Expander
          show={this.state.show}
          class="toggle-expander">
          <div
            onClick={this.onClick.bind(this)}>
            <div className="inner" >
              <ReactCSSTransitionGroup
                component="div"
                className="icon-holder"
                transitionName="icon"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
                {chooseIcon()}
              </ReactCSSTransitionGroup>
              <div className="label">{this.props.toggled ? this.props.hideMessage : this.props.showMessage}</div>
            </div>
          </div>
        </Expander>
      </div>
    );
  }
}

CorespringCorrectAnswerToggle.propTypes = {
  onToggle: React.PropTypes.func,
  toggled: React.PropTypes.bool,
  show: React.PropTypes.bool,
  hideMessage: React.PropTypes.string,
  showMessage: React.PropTypes.string
};

CorespringCorrectAnswerToggle.defaultProps = {
  showMessage: 'Show correct answer',
  hideMessage: 'Hide correct answer',
  show: false,
  toggled: false
};
