import React from 'react';
import { render } from 'react-dom';
import a from 'react-svg-pan-zoom';


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
					 fill="none"
					 opacity={0.2}
				/>
	}
}

class UIView extends React.Component{

}

class UIGraph extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.currentZoom = 1;
		this.state = {
			width:  window.innerWidth -20,
			height: window.innerHeight -20,
			tX: 0,
			tY: 0,
			zoom: this.currentZoom
		};
        this.updateDimensions = this.updateDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }
    componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
    }
    handleDrag(e){
    	if(this.dragActive){
            this.setState({
                tX: (this.startX - e.clientX)*-1,
                tY: (this.startY - e.clientY)*-1
            });
            console.log("scale("+this.state.zoom+") "+
            "translate("+this.state.tX+","+this.state.tY+")");
		}

    }
    handleDragStart(e){
    	this.dragActive = true;
    	this.startX = e.clientX;
    	this.startY = e.clientY;
    	console.log(this.startX + " " + this.startY);
    }
    handleDragEnd(e){
        this.dragActive = false;
    }
    handleScroll(e){
		this.currentZoom -= e.deltaY/1000;
        this.setState({
            zoom: this.currentZoom
        });
	}
	updateDimensions() {
		this.setState({
			width:  window.innerWidth -20,
			height: window.innerHeight -20
		});
	}
	render()
	{
		return(
			<div onWheel={this.handleScroll} onMouseDown={this.handleDragStart} onMouseUp={this.handleDragEnd} onMouseMove={this.handleDrag}>
			<svg width={this.state.width} height={this.state.height} key="1" style={{transform: "scale("+this.state.zoom+") "+
																					 "translate("+this.state.tX+"px,"+this.state.tY+"px)"}}>
			{//Add positions to Nodes, but don't render them yet
				Object.keys(this.props.graph.getNodes()).map((dat) => {
					var x = Math.floor((Math.random() * window.innerWidth-20) + 1);
					var y = Math.floor((Math.random() * window.innerHeight-20) + 1);
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

            </div>
		);
	}
}

export default UIGraph;