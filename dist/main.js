"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CorespringShowCorrectAnswerToggle = function (_React$Component) {
  _inherits(CorespringShowCorrectAnswerToggle, _React$Component);

  function CorespringShowCorrectAnswerToggle(props) {
    _classCallCheck(this, CorespringShowCorrectAnswerToggle);

    var _this = _possibleConstructorReturn(this, (CorespringShowCorrectAnswerToggle.__proto__ || Object.getPrototypeOf(CorespringShowCorrectAnswerToggle)).call(this, props));

    _this.state = {
      isOn: _this.props.initialValue
    };
    return _this;
  }

  _createClass(CorespringShowCorrectAnswerToggle, [{
    key: "onClick",
    value: function onClick() {
      this.setState({ isOn: !this.state.isOn });
      this.props.onToggle(!this.state.isOn);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var self = this;
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "corespring-correct-answer-toggle", onClick: this.onClick.bind(this) },
          _react2.default.createElement(
            "div",
            { className: "svg-holder" },
            function () {
              if (_this2.state.isOn) {
                return _react2.default.createElement(
                  "svg",
                  { preserveAspectRatio: "xMinYMin meet", viewBox: "-283 359 34 35" },
                  _react2.default.createElement("circle", { className: "hide-icon-background", cx: "-266", cy: "375.9", r: "14" }),
                  _react2.default.createElement("path", { className: "hide-icon-background",
                    d: "M-280.5,375.9c0-8,6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5s-6.5,14.5-14.5,14.5S-280.5,383.9-280.5,375.9zM-279.5,375.9c0,7.4,6.1,13.5,13.5,13.5c7.4,0,13.5-6.1,13.5-13.5s-6.1-13.5-13.5-13.5C-273.4,362.4-279.5,368.5-279.5,375.9z" }),
                  _react2.default.createElement("polygon", { className: "hide-icon-foreground",
                    points: "-265.4,383.1 -258.6,377.2 -261.2,374.2 -264.3,376.9 -268.9,368.7 -272.4,370.6         " })
                );
              } else {
                return _react2.default.createElement(
                  "svg",
                  { preserveAspectRatio: "xMinYMin meet", viewBox: "-129.5 127 34 35" },
                  _react2.default.createElement("path", {
                    style: { fill: "#B3ABA4", "stroke": "#CDC7C2", "strokeWidth": 0.5, "strokeMiterlimit": 10 },
                    d: "M-113.2,159c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-105.2,159-113.2,159z" }),
                  _react2.default.createElement("circle", { className: "show-icon-background", cx: "-114.2", cy: "143.5", r: "14" }),
                  _react2.default.createElement("path", { className: "show-icon-border",
                    d: "M-114.2,158c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5s14.5,6.5,14.5,14.5S-106.2,158-114.2,158zM-114.2,130c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5s13.5-6.1,13.5-13.5S-106.8,130-114.2,130z" }),
                  _react2.default.createElement("polygon", { className: "show-icon-foreground",
                    points: "-114.8,150.7 -121.6,144.8 -119,141.8 -115.9,144.5 -111.3,136.3 -107.8,138.2" })
                );
              }
            }()
          ),
          _react2.default.createElement(
            "div",
            { className: "corespring-correct-answer-toggle-label" },
            this.state.isOn ? self.props.hideMessage : self.props.showMessage
          )
        )
      );
    }
  }]);

  return CorespringShowCorrectAnswerToggle;
}(_react2.default.Component);

exports.default = CorespringShowCorrectAnswerToggle;


CorespringShowCorrectAnswerToggle.propTypes = {
  onToggle: _react2.default.PropTypes.func,
  initialValue: _react2.default.PropTypes.bool,
  hideMessage: _react2.default.PropTypes.string,
  showMessage: _react2.default.PropTypes.string
};

CorespringShowCorrectAnswerToggle.defaultProps = {
  showMessage: 'Show correct answer',
  hideMessage: 'Hide correct answer'
};
