import React from 'react';
import { render } from 'react-dom';
import ControlUI from './controlUI.jsx';


class UINode extends React.Component {

	changePosition(pos) {
		this.setState({position: pos})
	}

	render() {
			return <rect className="node" width="10" height="10" x={this.props.x} y={this.props.y}/>
	}
}

class UIGraph extends React.Component {

	render()
	{
		return 	<svg width="1000" height="800" key="1">
					{
						Object.keys(this.props.graph.getNodes()).map((dat) => {
							var x = Math.floor((Math.random() * 1000) + 1);
							var y = Math.floor((Math.random() * 800) + 1);
							return <UINode key={dat} node={this.props.graph.getNodes()[dat]} x={x} y={y}/>;
						})
					}
				</svg>
	}
}

export default UIGraph;
/*

const GraphThumbnail = props => (
	<svg width=UIConfig.width height=UIConfig.height key="1" >
		<rect width="100" height="100" stroke="green" strokeWidth="4" fill="yellow"/>
	</svg>
);

const renderGraphThumbnails = graphs => (
	<div>
		{graphs.map(graph => GraphThumbnail(graph))}
	</div>
)

export default renderGraphThumbnails;
*/