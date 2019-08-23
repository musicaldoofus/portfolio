import React, { Component } from 'react';
import './CanvasBg.css';

class CanvasBg extends Component {
	constructor() {
		super();
		this.state = {
			height: 0,
			width: 0
		};
		this.drawAt = this.drawAt.bind(this);
		this.getCoords = this.getCoords.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);
		this.canvasRef = React.createRef();
		this.containerRef = React.createRef();
	}
	
	getCoords(clientX, clientY) {
		const canvas = this.canvasRef.current;
		const boundingRect = canvas.getBoundingClientRect();
		const x = clientX - boundingRect.left;
		const y = clientY - boundingRect.top;
		return {x, y};
	}

	drawAt(x, y) {
		const canvas = this.canvasRef.current;
		const ctx = canvas.getContext('2d');
		// let {x, y} = this.getCoords(clientX, clientY);
		console.log('got', x, y);
		ctx.beginPath();
		ctx.fillStyle = 'black';
		//adjust for browsers that don't support .ellipse(); adjust for mobile support
		ctx.ellipse(x, y, 10, 10, 100, 0, 2 * Math.PI);
		ctx.fill();
	}
	
	handleWindowResize() {
		const containerDiv = this.containerRef.current.getBoundingClientRect();
		const height = containerDiv.height;
		const width = containerDiv.width;
		this.setState({height, width});
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleWindowResize);
		const randomCoords = [
			[10, 10],
			[20, 20],
			[30, 30],
			[550, 40],
			[330, 33],
		];
		randomCoords.forEach(coords => this.drawAt(...coords));
	}
	
	render() {
		return (
			<div ref={this.containerRef} className="canvas-container">
				<canvas
					height={this.state.height}
					width={this.state.width}
					ref={this.canvasRef}
				/>
			</div>
		);
	}
}

export default CanvasBg;