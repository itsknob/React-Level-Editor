import React, { useRef, useState, useEffect } from 'react';
import TileSet from './TileSet';
import TileSetMenu from './TileSetMenu'


const Tools = (props) => {
	const tileSetCanvas = useRef(null); 


	return (
	  <div className="tools-frame">
		<style jsx>{`
			.tools-frame {
				grid-area: tools;
				height: 100%;
				outline: 2px inset;
				outline-offset: -1px;
				overflow-y: auto;
				display: grid;
				grid-template: "menu" auto "tileset" max-content;
			}
		`}</style>
		<TileSetMenu 
			curTile={props.currentTile} 
			tileSetCanvasRef={tileSetCanvas}	
		/>
		<TileSet 
			currentTile={props.currentTile} 
			setCurrentTile={props.setCurrentTile} 
			tileSetCanvasRef={tileSetCanvas} 
			handleTileUpdate={props.handleTileUpdate}
		/>
	  </div>
	)
}

export default Tools