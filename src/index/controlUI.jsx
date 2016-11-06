import React from 'react';
import { render } from 'react-dom';


class ControlUI extends React.Component {

	constructor(props) {
		super();
	}

  render () {
    return (
      <div id="control-ui">
    	  <h3>Welcome to graph based Recommendations!</h3>
        <button>Blahoo</button>
      </div>
		);
  }
}

export default ControlUI;