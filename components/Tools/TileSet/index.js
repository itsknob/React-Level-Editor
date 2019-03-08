import React, { Component } from "react";
import { resolve, reject } from "any-promise";
import { useState, useEffect, useRef } from "react";
import { debounce } from 'lodash';


const TileSet = (props) => {
	// Element Reference
	const tileSetRef = useRef(null);

	// State for this component
	//const [props.currentTile, setTile] = useState(null);
	const [lastX, setLastX] = useState(0);
	const [lastY, setLastY] = useState(0);

	// MouseOver Canvas Event Handler
	const handleMouseMove = (e) => {
		// console.log(e);
		setLastX(e.clientX - tileSetRef.current.x);
		setLastY(e.clientY - tileSetRef.current.y);
		//console.log(lastX, lastY);
		// Update state with current tile mouse if hovering over.
		props.setCurrentTile([Math.floor(lastX/16), Math.floor(lastY/16)]);

	};

	const handleMouseClick = (e) => {
		//props.handleTileUpdate(e);
	}

	// Side Effects
	useEffect(() => {
		if(props.tileSetCanvasRef){
			props.tileSetCanvasRef.current.height = document.querySelector('.tileset-image').height;
			props.tileSetCanvasRef.current.width = document.querySelector('.tileset-image').width;
		}
		/*
		if(tileSetRef){
			tileSetRef.current.height = document.querySelector('.tileset-image').height;
			tileSetRef.current.width = document.querySelector('.tileset-image').width;
		}
		*/
		// Reset x, y to NULL if mouse leaves.
		tileSetRef.current.previousElementSibling.addEventListener('mouseleave', (e) => {
			setLastX(0);
			setLastY(0);
		})
		// If Tile: Draw Square at current location
		if(props.currentTile) {
			drawOnCanvas(props.tileSetCanvasRef, props.currentTile);
		}
		else{
			console.log("Tile Not Selected");
		}
	}, [tileSetRef]);

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

			<canvas ref={props.tileSetCanvasRef} 
					onMouseMove={handleMouseMove} 
					onClick={handleMouseClick} 
			/>

			<img 	className="tileset-image"
					ref={tileSetRef} 
					src={"../../../static/" + "tiles.png"} 
			/>
		</div>
	)
}

export default TileSet;

function drawOnCanvas(canvasRef, tile) {
	const ctx = canvasRef.current.getContext('2d');
	const [tileX, tileY] = tile;
	// console.log(tileX, tileY);
	ctx.strokeStyle = 'rgb(255, 255, 255, 1)';
	ctx.strokeRect(tileX * 16, tileY * 16, 16, 16);
	ctx.stroke();
}
