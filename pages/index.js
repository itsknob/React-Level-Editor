import Editor from "../components/Editor/index"
import Tools from "../components/Tools/index"
import Menu from "../components/Menu/index"
import Info from "../components/Info/index"

const Home = () => {
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
					grid-template: "menu menu menu menu" 30px "editor editor editor tools" auto "info info info info" 30px;
					grid-template-columns: 1fr 1fr 1fr 1fr;
					width: 100vw;
					height: 100vh;
				}
				`}</style>
			<Menu />
			<Editor />
			<Tools />
			<Info />
		</div>
	);
}

export default Home;