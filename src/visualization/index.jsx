import React from 'react';
import { render } from 'react-dom';
import ControlUI from './controlUI.jsx';

class GraphThumbnails extends React.Component {
	filePath;
	constructor(props, fp) {
		super();
		filePath = fp;
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

export default App;