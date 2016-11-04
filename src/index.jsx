import React from 'react';
import { render } from 'react-dom';
import ControlUI from './controlUI.jsx';

class App extends React.Component {

	constructor(props) {
		super();
	}

  render () {
    return (
      <div id="react-main">
    	  <h1>Welcome to graph based Recommendations!</h1>
        <ControlUI/>
      </div>
		);
  }
}

render(<App/>, document.querySelector('#app-main'));