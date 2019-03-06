import React, { Component } from 'react';
import TileSet from './TileSet';
import TileSetMenu from './TileSetMenu'

export default class Tools extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
		 selectedTile: [0, 0]
	  }
	}
	
  render() {
		const tileSetRef = React.createRef();
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
		<TileSetMenu curTile={this.state.selectedTile} tileSetRef={tileSetRef} />
		<TileSet tileSetRef={tileSetRef} />
	  </div>
	)
  }
}