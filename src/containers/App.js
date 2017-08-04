import React, { Component } from 'react'
import '.style.css';

export default class App extends Component {
  render() {
    return (
          <div className="container">
            <button className="block-unit red"></button>
            <button className="block-unit green"></button>
            <button className="block-unit blue"></button>
            <button className="block-unit yellow"></button>
            <div className="center-circle">
                <button className="start-circle"></button>
            </div>
        </div>
    )
  }
}
