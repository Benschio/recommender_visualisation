import React from 'react';
import { render } from 'react-dom';
import renderGraphThumbnail from './index.jsx';
import graphs from './availablegraphs.js';

var eles = renderGraphThumbnail(graphs);
//eles.forEach((ele) => {
	render(eles, document.querySelector('#app-main'));
//})

/*var x = 0;

graphs.forEach((svgobj) => {
	//val element = GraphThumbnail(svgobj);
	x = x + 1;
	render(GraphThumbnail(svgobj), document.querySelector('#app-main'));
});*/
//render(<App/>, document.querySelector('#app-main'));