import React, { Component } from 'react'
import { changeExt } from 'upath';

export default class Editor extends Component {
	componentDidMount() {
	  const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');
	
		ctx.fillStyle = 'green';
		ctx.fillRect(0, 0, 501, 501);
	}
  render() {
	return (
	  <div className="editor-frame">
		<style jsx>{`
			.editor-frame {
				grid-area: editor;
				outline: 2px inset;
				outline-offset: -1px;
				height: 100%;
				width: 100%;
			}
			canvas {
				height: 100%;
				width: 100%;
			}
		`}</style>
		<canvas id="canvas">

		</canvas>
	  </div>
	)
  }
}