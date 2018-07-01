import React, { Component } from 'react';

import './article.css';

export class Article extends Component {
    state = {
        price: 0
    }

    changePrice(event) {
        this.setState({ price: event.target.value })
    }

    render() {
        return (
            <div className="article">
                <h3>{this.props.movie} ({this.props.description.toUpperCase()})</h3>
                <p>{this.props.description} is a {this.props.type}</p>
                <p>precio: <strong>{this.state.price}</strong></p>
                <input
                    type="number"
                    value={this.state.price}
                    onChange={event => this.changePrice(event)}
                />
            </div>
        );
    }
}