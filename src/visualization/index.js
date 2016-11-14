import React from 'react';
import { render } from 'react-dom';
import UIGraph from './index.jsx';
import G from 'graphinius';
import UIConfig from './UIConfig.js';


var csvinput = new G.input.CSVInput(" ", false, false);

csvinput.readFromEdgeListURL("/data/facebook/0.edges", function(g){
    window.graph = g;
    var e = g.getUndEdges();

    /*var x = 0;
    var debug = g.getNodes();
    var keys = Object.keys(debug);
    x = keys.map(Node => {
        x++;
        return x;
    })
    var unodes = Object.keys(g.getNodes()).map(function(key){
        return <UINode/>; //this.props.graph.get(key)
    })*/
    //render(unodes, document.querySelector('#app-main'));
    //for(node in nodes){console.log(nodes[node].getID()}
    //object.keys(nodes).map(function(el){return nodes[el].getID()})
    //var eles = renderGraphThumbnail(g);
    var uigraph = React.createElement(UIGraph, {graph: g});
    //uigraph.setGraph(g);
    render(uigraph, document.querySelector('#app-main'));
});

