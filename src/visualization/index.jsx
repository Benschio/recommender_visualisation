import React from 'react';
import { render } from 'react-dom';
import ControlUI from './controlUI.jsx';


class UINode extends React.Component {

	changePosition(pos) {
		this.setState({position: pos})
	}

	render() {
		return <rect className="Node" width={10} height={10} x={this.props.node.getFeature("pos").x} y={this.props.node.getFeature("pos").y}/>
	}
}

class UIEdge extends React.Component {

	changePosition(pos) {
		this.setState({position: pos})
	}

	render() {/*<path d="M 100 350 q 150 -300 300 0" stroke="blue"
	 				stroke-width="5" fill="none" />*/
		return <path id={this.props.pos.name} className="Edge"
					 d={"M " + this.props.pos.x1 + " " + this.props.pos.y1 +
					 " L " + this.props.pos.x2 + " " + this.props.pos.y2}
					 stroke="blue"
					 strokeWidth="1"
					 fill="none" />
	}
}

class UIGraph extends React.Component {

	render()
	{
		return 	<svg width="10000" height="1000" key="1">
			{//Add positions to Nodes, but don't render them yet
				Object.keys(this.props.graph.getNodes()).map((dat) => {
					var x = Math.floor((Math.random() * 1000) + 1);
					var y = Math.floor((Math.random() * 800) + 1);
					this.props.graph.getNodes()[dat].setFeature("pos", {x,y});
					//return <UINode key={dat} node={this.props.graph.getNodes()[dat]}/>;
				})
			}
			{//Render edges (this is done first to show Nodes above edges, otherwise you can't see the nodes)
				Object.keys(this.props.graph.getUndEdges()).map((dat) => {
					var edge = this.props.graph.getUndEdges()[dat];
					var edgeNodes = edge.getNodes();
					var pos = {};
					var test = edgeNodes.a;
					pos.name = dat;
					pos.x1 = edgeNodes.a.getFeature("pos").x;
					pos.y1 = edgeNodes.a.getFeature("pos").y;
					pos.x2 = edgeNodes.b.getFeature("pos").x;
					pos.y2 = edgeNodes.b.getFeature("pos").y;
					return <UIEdge key={dat} pos={pos}/>;
				})
			}
			{//Render Nodes
				Object.keys(this.props.graph.getNodes()).map((dat) => {
					return <UINode key={dat} node={this.props.graph.getNodes()[dat]}/>;
				})
			}
				</svg>
	}
}

export default UIGraph;