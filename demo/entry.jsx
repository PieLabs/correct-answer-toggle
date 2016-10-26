import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '../src/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Wrapper extends React.Component {  
  
  constructor(props){
    super(props);
    this.state = {
      toggled: false
    }
  }

  onToggle(toggled) {
  }

  render() {
    return <MuiThemeProvider>
      <Toggle 
      initialValue={this.state.toggled} 
      onToggle={this.onToggle.bind(this)}/> 
    </MuiThemeProvider>;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const element = React.createElement(Wrapper, {}); 
  let container = document.querySelector('.toggle');
  console.log('container: ', container);
  ReactDOM.render(element, container);
});