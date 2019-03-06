import React, { Component } from "react";
import { resolve, reject } from "any-promise";
import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';
/*
export default class TileSet extends Component {
	state = { tileset: "tiles.png" };
	
	render() {
		return (
			<div className="root">
				<style jsx>{`
					.root {
						grid-area: tileset;
						height: 100%;
						width: 100%;
						outline: 2px red inset;
					}
					.tileset {
						outline: 1px solid inset;
					}
				`}</style>

				

				<h4>TileSetImage</h4>
				<img src={"../../../static/" + this.state.tileset} />
			</div>
		);
	}
}
*/

const TileSet = (props) => {
	// Element Reference
	//const tileSetRef = useRef(props.tileSetRef);
	const canvasRef = useRef(null);

	// State for this component
	const [tile, setTile] = useState(null);
	const [startX, setstartX] = useState(0);
	const [startY, setLastY] = useState(0);
	const [dragging, setDragging] = useState(false);


	// MouseOver Canvas Event Handler
	const handleMouseMove = (e) => {
		// console.log(e);
		setstartX(e.clientX - props.tileSetRef.current.x);
		setLastY(e.clientY - props.tileSetRef.current.y);
		//console.log(startX, startY);
		// Update state with current tile mouse if hovering over.
		setTile([Math.floor(startX/16), Math.floor(startY/16)]);

	};

	const handleMouseDown = (e) => {
		setDragging(true);
	}
	const handleMouseUp = (e) => {
		setDragging(false);
	}

	// Side Effects
	useEffect(() => {
		// Set Canvas to be same size as TileSet
		if(canvasRef){
			canvasRef.current.height = document.querySelector('.tileset-image').height;
			canvasRef.current.width = document.querySelector('.tileset-image').width;
		}

		// Reset x, y to 0, 0 if mouse leaves. 
		props.tileSetRef.current.previousElementSibling.addEventListener('mouseleave', (e) => {
			setstartX(0);
			setLastY(0);
		})

		// If Tile: Draw Square at current location
		if(tile) {
			// Setup for Canvas
			const ctx = canvasRef.current.getContext('2d');
			let [tileX, tileY] = tile;
			var startTileX, startTileY;
			var boxSizeX, boxSizeY;
			console.log(tileX, tileY);
			
			// mouseDown
			if(dragging){
				ctx.strokeStyle = 'rgb(255, 0, 0, 1)';
				// If mouseDown store Current Tile for Start Position; update Tile for End Position
				// Calculate Size of Box to Draw. 
				[startTileX, startTileY] = tile;
				boxSizeX = startTileX - tileX;
				boxSizeY = startTileY - tileY;
				
			}
			// mouseUp
			else {
				ctx.strokeStyle = 'rgb(255, 255, 255, 1)';
				[tileX, tileY] = tile;
			}
			ctx.strokeRect(tileX*16, tileY*16, 16, 16);
			ctx.stroke();
		}
		else{
			console.log("Tile Not Selected");
		}
	}, [canvasRef, tile]);

	// Render
	return (
		<div className="root">
			
			<style jsx>{`
				.root {
					grid-area: tileset;
					position: relative;
					height: 100%;
					width: 100%;
				}
				canvas {
					position: absolute;
				}
			`}</style>
			
			{ dragging ? <canvas ref={canvasRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} /> : 
			<canvas ref={canvasRef} 
					onMouseDown={handleMouseDown} 
					onMouseUp={handleMouseUp} 
			/> }

			<img 	className="tileset-image"
					ref={props.tileSetRef} 
					src={"../../../static/" + "tiles.png"} 
			/>
		</div>
	)
}

export default TileSet;