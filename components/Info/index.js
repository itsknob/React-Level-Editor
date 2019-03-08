import React, { Component } from 'react'

export default class Info extends Component {
  render() {
	return (
	  <div className="info-frame">
		<style jsx>{`
			.info-frame {
				grid-area: info;
				outline: 1px solid;
				outline-offset: -1px;
			}
		`}</style>
		<div>{this.props.currentTile.join(", ")}</div>
	  </div>
	)
  }
}