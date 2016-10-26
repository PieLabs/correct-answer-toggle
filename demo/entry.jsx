import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '../src/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Wrapper extends React.Component {  
  
  constructor(props){
    super(props);
    this.state = {
      show: true,
      toggle: true
    }
  }

  onClick() {
    console.log('onClick!');
    this.setState({toggle: !this.state.toggle});
  }

  render() {
    return <MuiThemeProvider>
      <Toggle 
      show={this.state.show} 
      toggle={this.state.toggle} 
      onClick={this.onClick.bind(this)} />
    </MuiThemeProvider>;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const element = React.createElement(Wrapper, {}); 
  let container = document.querySelector('.toggle');
  console.log('container: ', container);
  ReactDOM.render(element, container);
});