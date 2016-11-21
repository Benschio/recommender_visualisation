import React from 'react';
import { render } from 'react-dom';
import renderGraphThumbnail from './index.jsx';
import graphs from './availablegraphs.js';
import G from 'graphinius';
import BH from '../visualization/barneshut/algorithm.js';

BH.applyForces();

var eles = renderGraphThumbnail(graphs);
render(eles, document.querySelector('#app-main'));

var csvinput = new G.input.CSVInput(" ", false, true);

csvinput.readFromEdgeListURL("/data/facebook/0.edges", function(g){
    //TODO: Check whether this was successful or not

    var x = 0;

    Object.keys(g.getNodes()).forEach(function(key){
        x++;
    });
    //alert("Number of nodes: " + x + " and " + g.nrNodes());
    window.graph = g;
});

