import React from 'react';
import { render } from 'react-dom';
import UIGraph from './index.jsx';
import G from 'graphinius';
import UIConfig from './UIConfig.js';
import GraphVis from './simulation.jsx'


var csvinput = new G.input.CSVInput(" ", false, false);
var csvoutput = new G.output.CSVOutput(";",false,false);
/*
csvinput.readFromEdgeListURL("/data/facebook/107.edges", function(g){
    window.graph = g;
    var e = g.getUndEdges();
    var uigraph = React.createElement(UIGraph, {graph: g});

    var d3graph = {
        //nodes: [],
        //links: []
    };
    d3graph.nodes =
    Object.keys(g.getNodes()).map((dat) => {
        var node = g.getNodes()[dat];
        return {id: node.getID(), group: 1};
    });
    d3graph.links =
    Object.keys(e).map((dat) => {
        var edge = g.getUndEdges()[dat];
        var edgeNodes = edge.getNodes();
        return {source: edgeNodes.a.getID(), target: edgeNodes.b.getID(), value: 1};
    });
    alert("abc");
    var str = JSON.stringify(d3graph);
    console.log(str);
    //GraphVis(d3graph);

    //render(uigraph, document.querySelector('#app-main'));
});*/
GraphVis("a");
