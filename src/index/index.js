import React from 'react';
import { render } from 'react-dom';
import renderGraphThumbnail from './index.jsx';
import graphs from './availablegraphs.js';
import G from 'graphinius';

var eles = renderGraphThumbnail(graphs);
render(eles, document.querySelector('#app-main'));

//var graphini =
var csvinput = new G.input.CSVInput(" ", false, true);//G.input.CsvInput(" ", false, true);
//csvinput._separator = ' ';
//csvinput._direction_mode = true;

window.graph = csvinput.readFromEdgeListURL("/data/facebook/0.edges", function(){
    //TODO: Check whether this was successful or not
    //alert("Some callback");
    var x = 0;
    /*for(node of arguments[0]._nodes){
        x++;
    }*/
    alert("Number of nodes: " + x + " and " + arguments[0]._nr_nodes);
})

