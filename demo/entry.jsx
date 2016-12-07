import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '../src/index.jsx';
import Expander from '../src/expander.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

class Wrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      show: false
    }
  }

  onToggle(toggled) {
  }

  onShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return <MuiThemeProvider>
      <div>
        <Checkbox
          label="Show"
          checked={this.state.show}
          onClick={this.onShow.bind(this)}
          />
        <Toggle
          show={this.state.show}
          initialValue={this.state.toggled}
          onToggle={this.onToggle.bind(this)} />

        <div hidden={!this.state.show}>Note: You can set the color of the label by using <code>--correct-answer-toggle-label-color</code> css variable</div>
        <Toggle
          className="red-label"
          show={this.state.show}
          initialValue={this.state.toggled}
          onToggle={this.onToggle.bind(this)} />
        <p>Here is some text below</p>
      </div>
    </MuiThemeProvider>;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const element = React.createElement(Wrapper, {});
  let container = document.querySelector('.toggle');
  console.log('container: ', container);
  ReactDOM.render(element, container);
});