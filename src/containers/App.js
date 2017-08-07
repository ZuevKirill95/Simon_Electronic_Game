import React, { Component } from 'react'
import './style.css';

class App extends Component {


    handleButtonClick = (e) => {
        e.preventDefault();
        const buttonName = e.target.className.split(' ')[1]
        console.log(buttonName);
    }


    render() {
        return (
            <div className="container">
                <button className="block-unit red" onClick={this.handleButtonClick} />
                <button className="block-unit green" onClick={this.handleButtonClick} />
                <button className="block-unit blue" onClick={this.handleButtonClick} />
                <button className="block-unit yellow" onClick={this.handleButtonClick} />
                <div className="center-circle">
                    <button className="start-circle"></button>
                </div>
            </div>
        )
    }
}

export default App;
