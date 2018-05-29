import React from 'react';


class Tile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.inputValue,
        };
    }
    
    render() {
        return (
            <label key={this.props.idBoard} >
                <input className={this.props.style} id={this.props.idBoard} type="number" min="1" max="9" value={this.state.value} disabled={this.props.dis}/>
            </label>
        )
    }
}

export default Tile;