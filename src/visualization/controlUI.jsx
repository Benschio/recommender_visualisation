import React from 'react';
import { render } from 'react-dom';
import ControlUI from './controlUI.jsx';

const GraphThumbnail = props => (
    <svg width={props.width} height={props.height} key={props.id}>
        <rect width={props.width} height="100" stroke="green" strokeWidth="4" fill="yellow"/>
    </svg>
);

const renderGraphThumbnails = graphs => (
    <div>
        {graphs.map(graph => GraphThumbnail(graph))}
    </div>
)

export default renderGraphThumbnails;
