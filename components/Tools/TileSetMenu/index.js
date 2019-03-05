import React, { useRef, useEffect } from 'react'

const TileSetMenu = (props) => {

	const selectedTile = useRef(null);

	useEffect(() => {
			const tileSet = document.querySelector('.tileset-image');
			const [left, top] = this.props.curTile;
			const right = 0, bottom = 0;
			left *= 16, top *= 16;
			right = tileSet.clientWidth - (left + 16);
			bottom = tileSet.clientHeight - (top + 16);
			console.log(`t${top}r${right}b${bottom}l${left}`)
			tileSet.current.style = `clip-path: inset(${left} calc(100% - ${top}), calc(100% - ${right}), ${bottom}})`;
	})

	return (
	  <div className="root">
			<style jsx>{`
				.root {
					grid-area: menu;
					outline: 2px blue inset;
					height: 100%;
				}
			`}</style>
			<h4>TileSetMenu</h4> <br />
			<select>
				<option>First Placeholder</option>
			</select>
			<img ref="selectedTile" 
					 src="../../../static/tiles.png"  
			/>
	  </div>
	)
}

export default TileSetMenu;
