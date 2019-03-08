import React, {useState, useEffect} from "react";
import Editor from "../components/Editor/index"
import Tools from "../components/Tools/index"
import Menu from "../components/Menu/index"
import Info from "../components/Info/index"

const Home = () => {
	const [currentTile, setCurrentTile] = useState([0, 0]);
	
	useEffect(() => {
		console.log("Top Level Tools - Current Tile : ", currentTile);
	});

	const handleTileUpdate = (e) => {
		//e.preventDefault();
		const mx = e.clientX - tileSetCanvas.current.x;
		const my = e.clientY - tileSetCanvas.current.y;
		const newTile = [Math.ceil(mx/16), Math.ceil(my/16)];
		setCurrentTile(newTile);
		console.log(`HandleTileUpdate: ${newTile}`);
	}

	return (
		<div className="root">
			<style global jsx>{`
				* {
					margin: 0;
					padding: 0;
				}
				html {
					height: 100vh;
					overflow-y: hidden;
					overflow-x: hidden;
				}
				body {
					height: 100%;
				}
				
			`}</style>
			<style jsx>{`
				.root {
					display: grid;
					grid-template: "menu menu menu menu" 1.5em "editor editor editor tools" auto "info info info info" 1.5em;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					width: 100vw;
					height: 100vh;
				}
				`}</style>
			<Menu />
			<Editor />
			<Tools 
				currentTile={currentTile} 
				setCurrentTile={setCurrentTile}
				handleTileUpdate={handleTileUpdate}
			/>
			<Info 
				currentTile={currentTile}
			/>
		</div>
	);
}

export default Home;