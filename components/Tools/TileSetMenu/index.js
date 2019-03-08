import React, { useRef, useEffect } from 'react'

const TileSetMenu = (props) => {

	const selectedTile = useRef(null);

	useEffect(() => {
		const tileSet = document.querySelector('.tileset-image');
		let [left, top] = props.curTile;
		let right = 0, bottom = 0;
		left *= 16, top *= 16;
		right = tileSet.clientWidth - (left + 16);
		bottom = tileSet.clientHeight - (top + 16);
		console.log(`t: ${top}\nr: ${right}\nb: ${bottom}\nl: ${left}`)
		// tileSet.current.style = `clip-path: inset(${left} calc(100% - ${top}), calc(100% - ${right}), ${bottom}})`;
		selectedTile.current.style = `margin: -${left} -${top}, -${right}, -${bottom}`;
		
		// selectedTile.current.style = `clip-path: inset(${left} calc(100% - ${top}), calc(100% - ${right}), ${bottom}})`;
	})

	return (
		<div className="root">
				<style jsx>{`
					.root {
						grid-area: menu;
						outline: 2px blue inset;
						height: 100%;
					}
					.currentTileImage {
						max-width: 32px;
						max-height: 32px;
					}
					img {
						position: relative;
					}
				`}</style>
				<h4>TileSetMenu</h4>
				<div className="currentTileImage">
					<img 
						ref={selectedTile}
						src="../../../static/tiles.png"  
					/>
				</div>
		</div>
	)
}

export default TileSetMenu;
