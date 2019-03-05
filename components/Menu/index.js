import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
	return (
	  <div className="menu-frame">
			<style jsx>{`
				.menu-frame {
					grid-area: menu;
					outline: 1px solid;
					outline-offset: -1px;
				}
			`}</style>
			Menu
	  </div>
	)
  }
}